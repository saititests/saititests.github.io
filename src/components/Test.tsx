import * as Realm from "realm-web";

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useContext, useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LanguageContext } from "../App";
import TestPatient from "./test/TestPatient";
import { TestPatientData } from "./audio/soundsData";
import { studentIDs } from "../studentIDs";

interface FormValues {
  studentID: string;
  hoursStudied: number;
  lastStudied: string;
  actualLastStudied: string;
  actualListens: number | null;
  submitTime: string;
}

interface PatientValues {
  [key: string]: string;
}

interface TrainingData {
  _id: number;
  listens: number;
  date: Date;
}

const defaultValues: FormValues = {
  studentID: "",
  hoursStudied: 1,
  lastStudied: "morning",
  actualLastStudied: "",
  actualListens: null,
  submitTime: "",
};

export enum TestType {
  Regular,
  RegularWithoutPractice,
  TestBlue,
  TestGreen,
  TestRed,
}

interface TestProps {
  patientArray: TestPatientData[];
  type: TestType;
}

const Test = ({ patientArray, type }: TestProps) => {
  const [soundsDisabled, setSoundsDisabled] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>(defaultValues);
  const [patientValues, setPatientValues] = useState<PatientValues>({});
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>("");
  const [shuffledPatientArray, setShuffledPatientArray] = useState<
    TestPatientData[]
  >([]);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const shuffled = patientArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setShuffledPatientArray(shuffled);

    const initialValues = patientArray.map((patient) => {
      return patient.name;
    });
    initialValues.forEach((value) => {
      patientValues![value] = "";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = value?.format("DD/MM/YYYY");
    const updatedDate = date + " " + formValues.lastStudied;

    const valuesCopy = formValues;
    valuesCopy.lastStudied = updatedDate;

    const app = new Realm.App({ id: "application-0-mlapy" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const id = formValues.studentID.replace(/[^0-9]/g, "");
      const trainingData: TrainingData =
        await user.functions.getOneTrainingData(Number(id));

      const valuesFull = valuesCopy;
      valuesFull.actualLastStudied = trainingData.date.toString();
      valuesFull.actualListens = trainingData.listens;
      const currentTime = new Date();
      valuesFull.submitTime = currentTime.toString();

      const submitValues = { ...valuesFull, ...patientValues };

      switch (type) {
        case TestType.Regular:
          await user.functions.submitTestAnswers(submitValues);
          break;
        case TestType.RegularWithoutPractice:
          await user.functions.submitTestAnswersWithoutPractice(submitValues);
          break;
        case TestType.TestBlue:
          await user.functions.submitTestAnswersBlue(submitValues);
          break;
        case TestType.TestGreen:
          await user.functions.submitTestAnswersGreen(submitValues);
          break;
        case TestType.TestRed:
          await user.functions.submitTestAnswersRed(submitValues);
          break;
      }

      return alert(
        language === "LT"
          ? "Jūsų atsakymai buvo sėkmingai pateikti"
          : "Your answers have been submitted successfully"
      );
    } catch (err) {
      console.error("Failed to save data", err);
      return alert(
        language === "LT"
          ? "Pateikiant Jūsų atsakymus įvyko klaida. Susisiekite su Haroldu Razvadausku"
          : "An error appeared when saving your answers. Please contact Haroldas Razvadauskas"
      );
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (name === "studentID") {
      if (!studentIDs.includes(value)) {
        setError(true);
        setHelperText(
          language === "LT"
            ? "Naudokite gautą studento ID"
            : "Use your provided student ID"
        );
      } else {
        setError(false);
        setHelperText("");
      }
    }
  };

  const handlePatientInputChange = (e: any) => {
    const { name, value } = e.target;

    setPatientValues({
      ...patientValues,
      [name]: value,
    });
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "block" }}>
      <form onSubmit={handleSubmit}>
        <Typography>
          {language === "LT"
            ? "Atlikti testą galima tik įvedus studento ID"
            : "You can do the test if student id is entered"}
        </Typography>
        <Box sx={{ mb: 3, mt: 2 }}>
          <TextField
            id="studentID"
            name="studentID"
            label={language === "LT" ? "Studento ID" : "Student ID"}
            value={formValues.studentID}
            onChange={handleInputChange}
            required
            error={error}
            helperText={helperText}
          />
        </Box>
        {formValues.studentID && !error && (
          <>
            {patientValues &&
              Object.keys(patientValues).length !== 0 &&
              shuffledPatientArray.map((patient, index) => (
                <TestPatient
                  key={patient.name}
                  patient={patient}
                  soundsDisabled={soundsDisabled}
                  setSoundsDisabled={setSoundsDisabled}
                  index={index + 1}
                  value={patientValues![patient.name]}
                  fieldName={patient.name}
                  handleInputChange={handlePatientInputChange}
                  studentID={formValues.studentID}
                  error={error}
                />
              ))}
            <Box sx={{ mb: 4 }}>
              <Typography>
                {language === "LT"
                  ? "Valandos, praleistos mokantis:"
                  : "Hours spent studying:"}
              </Typography>
              <TextField
                name="hoursStudied"
                id="hoursStudied"
                value={formValues.hoursStudied}
                onChange={handleInputChange}
                type="number"
                sx={{ width: 180 }}
                required
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography>
                {language === "LT"
                  ? "Paskutinis mokomųjų įrašų klausymasis:"
                  : "Last studied:"}
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: 160 }} />
                  )}
                />
              </LocalizationProvider>
              <Select
                name="lastStudied"
                id="lastStudied"
                value={formValues.lastStudied}
                onChange={handleInputChange}
                sx={{ width: 130, ml: 3 }}
              >
                <MenuItem key="morning" value="morning">
                  {language === "LT" ? "Ryte" : "Morning"}
                </MenuItem>
                <MenuItem key="evening" value="evening">
                  {language === "LT" ? "Vakare" : "Evening"}
                </MenuItem>
              </Select>
            </Box>

            <Button variant="contained" color="primary" type="submit">
              {language === "LT" ? "Pateikti" : "Submit"}
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default Test;
