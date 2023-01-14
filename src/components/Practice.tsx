import { TextField, Typography } from "@mui/material";
import {
  patientsPracticeArray,
  singlePracticeSounds,
} from "./audio/soundsData";
import { useContext, useState } from "react";

import { LanguageContext } from "../App";
import PracticePatient from "./practice/PracticePatient";
import PracticeSound from "./practice/PracticeSound";
import { studentIDs } from "../studentIDs";

const Practice = () => {
  const [soundsDisabled, setSoundsDisabled] = useState<boolean>(false);
  const [studentID, setStudentID] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>("");
  const { language } = useContext(LanguageContext);

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setStudentID(value);
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
  };

  return (
    <div style={{ display: "block" }}>
      <Typography>
        {language === "LT"
          ? "Klausytis mokomųjų įrašų galima tik įvedus studento ID"
          : "You can only listen to practice records if student id is entered"}
      </Typography>
      <TextField
        id="studentID"
        name="studentID"
        label={language === "LT" ? "Studento ID" : "Student ID"}
        value={studentID}
        onChange={handleInputChange}
        required
        error={error}
        helperText={helperText}
        sx={{ mt: 2, mb: 3 }}
      />
      {studentID &&
        !error &&
        patientsPracticeArray.map((patient) => (
          <PracticePatient
            key={patient.fileName}
            patient={patient}
            soundsDisabled={soundsDisabled}
            setSoundsDisabled={setSoundsDisabled}
            studentID={studentID}
            error={error}
          />
        ))}
      {studentID && !error && (
        <>
          <Typography variant="h5" sx={{ my: 4 }}>
            {language === "LT" ? "Pavieniai garsai" : "Individual sounds"}
          </Typography>
          {singlePracticeSounds.map((patient) => (
            <PracticeSound
              key={patient.name}
              patient={patient}
              soundsDisabled={soundsDisabled}
              setSoundsDisabled={setSoundsDisabled}
              studentID={studentID}
              error={error}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Practice;
