import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { TestPatientData } from "../audio/soundsData";
import backPhoto from "../images/backPhoto.jpg";

interface ButtonConfig {
  index: number;
  marginTop: number;
  marginLeft: number;
}

interface PatientProps {
  patient: TestPatientData;
  soundsDisabled: boolean;
  setSoundsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  value: string;
  fieldName: string;
  handleInputChange: (e: any) => void;
  studentID: string;
  error: boolean;
}

const TestPatient = (props: PatientProps) => {
  const {
    patient,
    soundsDisabled,
    setSoundsDisabled,
    index,
    value,
    fieldName,
    handleInputChange,
    studentID,
    error,
  } = props;
  const { name } = patient;
  const [soundFiles, setSoundFiles] = useState<string[]>([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<string>("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    function loadSounds() {
      const file1 = require(`../audio/${name}_1.wav`);
      const file2 = require(`../audio/${name}_2.wav`);
      const file3 = require(`../audio/${name}_3.wav`);
      const file4 = require(`../audio/${name}_4.wav`);
      const file5 = require(`../audio/${name}_5.wav`);
      const file6 = require(`../audio/${name}_6.wav`);
      setSoundFiles([file1, file2, file3, file4, file5, file6]);
    }
    loadSounds();
  }, [name]);

  const buttons: ButtonConfig[] = [
    {
      index: 1,
      marginTop: 45,
      marginLeft: 10,
    },
    {
      index: 2,
      marginTop: 45,
      marginLeft: -35,
    },
    {
      index: 3,
      marginTop: 115,
      marginLeft: 10,
    },
    {
      index: 4,
      marginTop: 115,
      marginLeft: -35,
    },
    {
      index: 5,
      marginTop: 170,
      marginLeft: 35,
    },
    {
      index: 6,
      marginTop: 170,
      marginLeft: -60,
    },
  ];

  const playAudio = async (index: number) => {
    const audio = new Audio(soundFiles[index - 1]);

    setCurrentAudioIndex(index.toString());
    setSoundsDisabled(true);
    audio.play();

    audio.addEventListener("ended", () => {
      setCurrentAudioIndex("");
      setSoundsDisabled(false);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        boxShadow: 4,
        mb: 2,
        padding: 3,
        width: "50%",
        marginLeft: "24%",
        display: "flex",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Box
            style={{
              backgroundImage: `url(${backPhoto})`,
              height: 326,
              width: 371,
            }}
          >
            {buttons.map((button, key) => (
              <Button
                key={key}
                variant="outlined"
                style={{
                  borderRadius: 20,
                  padding: 1,
                  width: 30,
                  marginTop: button.marginTop,
                  marginLeft: button.marginLeft,
                  minWidth: 10,
                  position: "absolute",
                }}
                onClick={() => playAudio(button.index)}
                disabled={soundsDisabled || studentID === "" || error}
              >
                {button.index}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography sx={{ mt: 6 }}>Pacientas {index}</Typography>
            <Typography sx={{ mt: 6 }}>
              <strong>Dabar leidžiamas įrašas: {currentAudioIndex}</strong>
            </Typography>
            <Box>
              <FormControl sx={{ mt: 2 }}>
                <Typography>
                  Girdima patologija? {/* Pathology found? */}
                </Typography>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  disabled={studentID === "" || error}
                />
              </FormControl>
            </Box>
            {checked && (
              <FormControl sx={{ mt: 1 }}>
                <InputLabel id={fieldName}>
                  Patologijos tipas{/* Pathology type */}
                </InputLabel>
                <Select
                  name={fieldName}
                  id={fieldName}
                  label="Pathology type"
                  value={value}
                  onChange={handleInputChange}
                  sx={{ width: 250 }}
                >
                  <MenuItem key="sausi" value="sausi">
                    Sausi karkalai
                  </MenuItem>
                  <MenuItem key="dregni" value="dregni">
                    Drėgni karkalai
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestPatient;
