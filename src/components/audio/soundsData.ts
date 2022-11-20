export interface PatientData {
  fileName: string;
  name: string;
  nameEnglish: string;
  information: string;
  informationEnglish: string;
}

export const patientsPracticeArray: PatientData[] = [
  {
    fileName: "H_014_Control",
    name: "36 metų, vyras",
    nameEnglish: "36-year-old man",
    information: "Plaučių alsavimas vezikulinis be karkalų.",
    informationEnglish: "Only normal lung sounds are audible.",
  },
  {
    fileName: "H_015_Control",
    name: "32 metų, moteris",
    nameEnglish: "32-year-old woman",
    information: "Plaučių alsavimas vezikulinis be karkalų.",
    informationEnglish: "Only normal lung sounds are audible.",
  },
  {
    fileName: "A_006",
    name: "70 metų, vyras",
    nameEnglish: "70-year-old man",
    information: "Plaučių alsavimas vezikulinis be karkalų.",
    informationEnglish: "Only normal lung sounds are audible.",
  },
  {
    fileName: "A_027",
    name: "75 metų, vyras",
    nameEnglish: "75-year-old man",
    information: "Girdimi sausi karkalai.",
    informationEnglish: "Adventitious wheezes are audible.",
  },
  {
    fileName: "A_022",
    name: "77 metų, vyras",
    nameEnglish: "77-year-old man",
    information: "Girdimi sausi karkalai.",
    informationEnglish: "Adventitious wheezes are audible.",
  },
  {
    fileName: "KL_023",
    name: "50 metų, vyras",
    nameEnglish: "50-year-old man",
    information: "Girdimi drėgni karkalai.",
    informationEnglish: "Adventitious crackles are audible.",
  },
  {
    fileName: "KL_051",
    name: "90 metų, vyras",
    nameEnglish: "90-year-old man",
    information: "Girdimi drėgni karkalai.",
    informationEnglish: "Adventitious crackles are audible.",
  },
  {
    fileName: "H_004",
    name: "83 metų, vyras",
    nameEnglish: "83-year-old man",
    information: "Giridimi drėgni ir sausi karkalai.",
    informationEnglish:
      "Mixed adventitous lung sounds are audible (wheezes and crackles).",
  },
  {
    fileName: "KL_015",
    name: "94 metų, moteris",
    nameEnglish: "94-year-old woman",
    information: "Giridimi drėgni ir sausi karkalai.",
    informationEnglish:
      "Mixed adventitous lung sounds are audible (wheezes and crackles).",
  },
  {
    fileName: "A_001",
    name: "56 metų, moteris",
    nameEnglish: "56-year-old woman",
    information:
      "Plaučių alsavimas vezikulinis be karkalų, bet girdimi papildomi artefaktai.",
    informationEnglish:
      "Patient without pathological lung sounds, but with audio artifacts.",
  },
  {
    fileName: "A_016",
    name: "86 metų, moteris",
    nameEnglish: "86-year-old woman",
    information:
      "Plaučių alsavimas vezikulinis be karkalų, bet girdimi papildomi artefaktai.",
    informationEnglish:
      "Patient without pathological lung sounds, but with audio artifacts.",
  },
];

export const singlePracticeSounds: PatientData[] = [
  {
    fileName: "A_008_4",
    name: "A_008_4",
    nameEnglish: "A_008_4",
    information: "Bronchovezikulinis",
    informationEnglish: "Brochialvesicular",
  },
  {
    fileName: "Brochial_001",
    name: "Brochial_001",
    nameEnglish: "Brochial_001",
    information: "Bronchinis",
    informationEnglish: "Bronchial",
  },
  {
    fileName: "A_008_6",
    name: "A_008_6",
    nameEnglish: "A_008_6",
    information: "Vezikulinis",
    informationEnglish: "Vesicular",
  },
  {
    fileName: "KL_055_5",
    name: "KL_055_5",
    nameEnglish: "KL_055_5",
    information: "Drėgni karkalai",
    informationEnglish: "Crackles",
  },
  {
    fileName: "A_022_3",
    name: "A_022_3",
    nameEnglish: "A_022_3",
    information: "Sausi karkalai",
    informationEnglish: "Wheezes",
  },
];

export interface TestPatientData {
  name: string;
}

export const testBlueArray = [
  {
    name: "KL_054_B",
  },
  {
    name: "KL_044",
  },
  {
    name: "KL_039",
  },
  {
    name: "KL_002",
  },
  {
    name: "A_019",
  },
  {
    name: "KL-058",
  },
  {
    name: "KL_026",
  },
  {
    name: "KL_014",
  },
  {
    name: "KL_055",
  },
];

export const testGreenArray = [
  {
    name: "A_026",
  },
  {
    name: "A_002",
  },
  {
    name: "A_003",
  },
  {
    name: "H_006",
  },
  {
    name: "H_003",
  },
  {
    name: "KL-058_B",
  },
  {
    name: "H_008",
  },
  {
    name: "H_002",
  },
  {
    name: "KL_057_B",
  },
];

export const testRedArray = [
  {
    name: "A_023",
  },
  {
    name: "A_017",
  },
  {
    name: "A_008",
  },
  {
    name: "A_021",
  },
  {
    name: "KL_033",
  },
  {
    name: "KL-056",
  },
  {
    name: "H_008",
  },
  {
    name: "KL_055",
  },
  {
    name: "KL_057",
  },
];

export const test1Array = [
  {
    name: "KL_054_B",
  },
  {
    name: "A_017",
  },
  {
    name: "KL_039",
  },
  {
    name: "KL_002",
  },
  {
    name: "A_019",
  },
  {
    name: "KL-058",
  },
  {
    name: "KL_026",
  },
  {
    name: "KL_014",
  },
  {
    name: "KL_055",
  },
];

export const test2Array = [
  {
    name: "A_026",
  },
  {
    name: "A_002",
  },
  {
    name: "A_003",
  },
  {
    name: "H_006",
  },
  {
    name: "H_003",
  },
  {
    name: "KL-058_B",
  },
  {
    name: "H_008",
  },
  {
    name: "H_002",
  },
  {
    name: "KL_057",
  },
];

export const test3Array = [
  {
    name: "A_023",
  },
  {
    name: "A_017",
  },
  {
    name: "A_008",
  },
  {
    name: "A_021",
  },
  {
    name: "KL_033",
  },
  {
    name: "KL-056",
  },
  {
    name: "H_008",
  },
  {
    name: "KL_055",
  },
  {
    name: "KL_057",
  },
];

export const test4Array = [
  {
    name: "KL_054_B",
  },
  {
    name: "A_008",
  },
  {
    name: "KL_039",
  },
  {
    name: "H_006",
  },
  {
    name: "KL_033",
  },
  {
    name: "KL-058_B",
  },
  {
    name: "H_008",
  },
  {
    name: "H_002",
  },
  {
    name: "KL_014",
  },
];
