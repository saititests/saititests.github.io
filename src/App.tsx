import "./App.css";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

import Practice from "./components/Practice";
import TestsWithWhiteNoise from "./components/TestsWithWhiteNoise";
import TestsWithoutWhiteNoise from "./components/TestsWithoutWhiteNoise";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Mokymasis" {...a11yProps(0)} />
            <Tab label="Testai" {...a11yProps(1)} />
            <Tab label="Testai su triukšmu" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Practice />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TestsWithoutWhiteNoise />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TestsWithWhiteNoise />
        </TabPanel>
      </Box>
    </div>
  );
};

export default App;
