import { Box, Tab, Tabs } from "@mui/material";
import { LanguageContext, TabPanel, a11yProps } from "../App";
import React, { useContext, useEffect, useState } from "react";
import Test, { TestType } from "./Test";
import {
  testBlueArray,
  testGreenArray,
  testRedArray,
} from "./audio/soundsData";

const TestsWithWhiteNoise = () => {
  const [value, setValue] = useState(0);
  const [testOrder, setTestOrder] = useState([1, 2, 3]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    var arr = [];
    while (arr.length < 3) {
      var r = Math.floor(Math.random() * 3);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    setTestOrder(arr);
  }, []);

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
            label={language === "LT" ? "Testas A" : "Test A"}
            {...a11yProps(0)}
          />
          <Tab
            label={language === "LT" ? "Testas B" : "Test B"}
            {...a11yProps(1)}
          />
          <Tab
            label={language === "LT" ? "Testas C" : "Test C"}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={testOrder[0]}>
        <Test patientArray={testBlueArray} type={TestType.TestBlue} />
      </TabPanel>
      <TabPanel value={value} index={testOrder[1]}>
        <Test patientArray={testGreenArray} type={TestType.TestGreen} />
      </TabPanel>
      <TabPanel value={value} index={testOrder[2]}>
        <Test patientArray={testRedArray} type={TestType.TestRed} />
      </TabPanel>
    </Box>
  );
};

export default TestsWithWhiteNoise;
