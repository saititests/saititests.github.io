import * as Realm from "realm-web";

import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PatientData } from "../audio/soundsData";

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
  const [soundFile, setSoundFile] = useState<string>("");

  useEffect(() => {
    function loadSounds() {
      const file = require(`../audio/${name}.wav`);
      setSoundFile(file);
    }
    loadSounds();
  }, [name]);

  const playAudio = async () => {
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

    const audio = new Audio(soundFile);

    setSoundsDisabled(true);
    audio.play();

    audio.addEventListener("ended", () => {
      setSoundsDisabled(false);
    });
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={8}>
        <Grid item xs={6} textAlign="end">
          <Typography sx={{ mt: 0.75 }}>{information}</Typography>
        </Grid>
        <Grid item xs={6} textAlign="left">
          <Button
            variant="contained"
            onClick={() => playAudio()}
            disabled={soundsDisabled || studentID === "" || error}
          >
            Leisti įrašą
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticePatient;
