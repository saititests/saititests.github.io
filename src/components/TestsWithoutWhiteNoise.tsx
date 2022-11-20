import { Box, Tab, Tabs } from "@mui/material";
import { LanguageContext, TabPanel, a11yProps } from "../App";
import React, { useContext, useState } from "react";
import Test, { TestType } from "./Test";

import { test1Array } from "./audio/soundsData";

const TestsWithoutWhiteNoise = () => {
  const [value, setValue] = useState(0);
  const { language } = useContext(LanguageContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            label={
              language === "LT"
                ? "Testas, atlikusiems apmokymus"
                : "Test with practice"
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              language === "LT"
                ? "Testas, neatlikusiems apmokym7"
                : "Test without practice"
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Test patientArray={test1Array} type={TestType.Regular} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Test
          patientArray={test1Array}
          type={TestType.RegularWithoutPractice}
        />
      </TabPanel>
    </Box>
  );
};

export default TestsWithoutWhiteNoise;
