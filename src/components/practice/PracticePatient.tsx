import * as Realm from "realm-web";

import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PatientData } from "../audio/soundsData";
import backPhoto from "../images/backPhoto.jpg";

interface ButtonConfig {
  index: number;
  marginTop: number;
  marginLeft: number;
}

interface PatientProps {
  patient: PatientData;
  soundsDisabled: boolean;
  setSoundsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  studentID: string;
  error: boolean;
}

const PracticePatient = (props: PatientProps) => {
  const { patient, soundsDisabled, setSoundsDisabled, studentID, error } =
    props;
  const { name, information } = patient;
  const [soundFiles, setSoundFiles] = useState<string[]>([]);
  const [viewInfo, setViewInfo] = useState<boolean>(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<string>("");

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
    const app = new Realm.App({ id: "application-0-mlapy" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      await user.functions.setTrainingData({
        _id: Number(studentID),
        date: new Date(),
      });
    } catch (err) {
      console.error("Failed to save data", err);
    }

    const audio = new Audio(soundFiles[index - 1]);

    setCurrentAudioIndex(index.toString());
    setSoundsDisabled(true);
    audio.play();

    audio.addEventListener("ended", () => {
      setCurrentAudioIndex("");
      setSoundsDisabled(false);
    });
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
            <Typography sx={{ mt: 6 }}>Pacientas {name}</Typography>
            <Typography sx={{ mt: 6 }}>
              <strong>Dabar leidžiamas įrašas: {currentAudioIndex}</strong>
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              disabled={viewInfo || studentID === "" || error}
              onClick={() => setViewInfo(true)}
            >
              Peržiūrėti patologiją
            </Button>
            {viewInfo && (
              <Box
                sx={{
                  border: "1px solid #1976d2",
                  borderRadius: 5,
                  padding: 3,
                  mt: 4,
                }}
              >
                {information}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticePatient;
