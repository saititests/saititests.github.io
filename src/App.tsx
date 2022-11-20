import "./App.css";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

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

export type LanguageContextType = {
  language: string;
};
export const LanguageContext = createContext<LanguageContextType>({
  language: "LT",
});
export const useLanguageContext = () => useContext(LanguageContext);

const App = () => {
  const [value, setValue] = useState(0);
  const [language, setLanguage] = useState<string>("LT");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <LanguageContext.Provider value={{ language }}>
          <Typography
            sx={{
              position: "absolute",
              left: 25,
              top: 20,
              fontWeight: 600,
              color: "#1976d2",
            }}
          >
            {language === "LT" ? "SAITI versija 1.0" : "SAITI version 1.0"}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              right: 30,
              top: 15,
            }}
          >
            {language === "LT" && (
              <img
                src={require("./components/images/Flag_of_the_United_Kingdom.svg.png")}
                width={60}
                height={40}
                alt="UK flag"
                onClick={() => setLanguage("UK")}
                style={{ cursor: "pointer" }}
              />
            )}
            {language === "UK" && (
              <img
                src={require("./components/images/Flag_of_Lithuania.svg.png")}
                width={60}
                height={40}
                alt="Lithuanian flag"
                onClick={() => setLanguage("LT")}
                style={{ cursor: "pointer" }}
              />
            )}
          </Box>
          <Box sx={{ mt: 1, borderBottom: 1, borderColor: "divider" }}>
            <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
              {language === "LT"
                ? "Plaučių garsų mokymo el. centras"
                : "Learn your adventitious lung sounds online"}
            </Typography>
            <Typography sx={{ mb: 1, fontWeight: 400, fontSize: 14 }}>
              {language === "LT"
                ? "Mes siekiame progreso, todėl prašome informuoti gyd. Haroldą Razvadauską jei yra/pastebėjote/iškilo problemų naudojantis tinklalapiu."
                : "We look forward to developing the site further. Hence, please Haroldas Razvadauskas MD of any mistakes or issues you might come across using this website."}
            </Typography>
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab
                label={language === "LT" ? "Mokymasis" : "Practice"}
                {...a11yProps(0)}
              />
              <Tab
                label={language === "LT" ? "Testai" : "Tests"}
                {...a11yProps(1)}
              />
              <Tab
                label={
                  language === "LT"
                    ? "Testai su triukšmu"
                    : "Tests with white noise"
                }
                {...a11yProps(2)}
              />
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
        </LanguageContext.Provider>
      </Box>
    </div>
  );
};

export default App;
