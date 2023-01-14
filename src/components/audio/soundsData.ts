export interface PatientData {
  fileName: string;
  name: string;
  nameEnglish: string;
  information: string;
  informationEnglish: string;
  singleSoundName?: string;
  singleSoundNameEnglish?: string;
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
    fileName: "KL_064",
    name: "64 metų, moteris",
    nameEnglish: "64-year-old woman",
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
    fileName: "KL-056",
    name: "83 metų, vyras",
    nameEnglish: "83-year-old man",
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
    fileName: "KL_063",
    name: "68 metų, vyras",
    nameEnglish: "68-year-old man",
    information: "Girdimi drėgni karkalai.",
    informationEnglish: "Adventitious crackles are audible.",
  },
  {
    fileName: "KL_059_B",
    name: "68 metų, vyras",
    nameEnglish: "68-year-old man",
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
    information: "Girdimi drėgni ir sausi karkalai.",
    informationEnglish:
      "Mixed adventitous lung sounds are audible (wheezes and crackles).",
  },
  {
    fileName: "KL_015",
    name: "94 metų, moteris",
    nameEnglish: "94-year-old woman",
    information: "Girdimi drėgni ir sausi karkalai.",
    informationEnglish:
      "Mixed adventitous lung sounds are audible (wheezes and crackles).",
  },
  {
    fileName: "KL_065",
    name: "53 metų, vyras",
    nameEnglish: "53-year-old man",
    information:
      "Dominuoja sausi karkalai, bet ir girdimi pavieniai drėgni karkalai apat. dalyse.",
    informationEnglish:
      "Mixed adventitious lung sounds are audible, but wheezes predominate over crackles.",
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
    singleSoundName: "Bronchovezikulinis",
    singleSoundNameEnglish: "Bronchovesicular",
    information:
      "Bronchovezikulinis kvėpavimo garas yra bronchinio ir vezikulinio  garsų derinys. Girdimas dviejose vietose: 1. Priekyje – I ir II tarpšonkauliniame tarpe, prie krūtinkaulio. 2. Nugaroje – tarp menčių, prie stuburo. Bronchovezikulinio kvėpavimo įkvėpis prilygsta iškvėpiui (1:1).",
    informationEnglish:
      "Bronchovesicular sounds are like a mixture of both bronchial and vesicular tones. They are best heard between scapulae and in the 1st and 2nd intercostal space, near the sternum. Their inspiration and expiration ratio is 1:1.",
  },
  {
    fileName: "Brochial_001",
    name: "Brochial_001",
    nameEnglish: "Brochial_001",
    singleSoundName: "Bronchinis",
    singleSoundNameEnglish: "Bronchial",
    information:
      "Bronchinis kvėpavimo garas – skardus garsas, susidarantis gerklose, girdimas ties trachėja iš priekio ir tarp menčių ties III-IV krūtinės slanksteliais. Bronchinio kvėpavimo iškvėpimas ilgesnis už įkvėpimą (1:1 – 2:1).",
    informationEnglish:
      "Bronchial sounds are harsh and loud. They are best heard during the expiration phase. Their inspiration and expiration ratio are 1:1 or 2:1.",
  },
  {
    fileName: "A_008_6",
    name: "A_008_6",
    nameEnglish: "A_008_6",
    singleSoundName: "Vezikulinis",
    singleSoundNameEnglish: "Vesicular",
    information:
      "Vezikulinis kvėpavimo garsas – švelnus, žemas garsas. Vezikulinio kvėpavimo įkvėpis gerokai ilgesnis už iškvėpį (3:1).",
    informationEnglish:
      "Vesicular sounds are soft, blowing sounds that have inspiration to expiration ratio of 3:1.",
  },
  {
    fileName: "KL_055_5",
    name: "KL_055_5",
    nameEnglish: "KL_055_5",
    singleSoundName: "Drėgni karkalai",
    singleSoundNameEnglish: "Crackles",
    information:
      "Trumpos trukmės garsai (<20 ms). Drėgni karkalai susidaro, orui einant pro skystą turinį – formuojasi oro pūslytės ir jos sproginėja, sukeldamos traškesį.",
    informationEnglish:
      "Crackles are brief, interrupted, explosives noises, resulting from the bubbling of air through airway secretions. They may be heard in inspiration and expiration, but better in inspiration.",
  },
  {
    fileName: "A_022_3",
    name: "A_022_3",
    nameEnglish: "A_022_3",
    singleSoundName: "Sausi karkalai",
    singleSoundNameEnglish: "Wheezes",
    information:
      "Sausi karkalai – švilpimą, cypimą arba birzgimą primenantis garsas.",
    informationEnglish:
      "Wheezes are high-pitched whistling sounds made whilst breathing. Wheezes may be audible during the inspiration or expiration phase.",
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
    name: "KL_054_B_SNR40",
  },
  {
    name: "KL_044_SNR40",
  },
  {
    name: "KL_039_SNR40",
  },
  {
    name: "KL_002_SNR40",
  },
  {
    name: "A_019_SNR40",
  },
  {
    name: "KL-058_SNR40",
  },
  {
    name: "KL_026_SNR40",
  },
  {
    name: "KL_014_SNR40",
  },
  {
    name: "KL_055_SNR40",
  },
];

export const testRedArray = [
  {
    name: "KL_054_B_SNR20",
  },
  {
    name: "KL_044_SNR20",
  },
  {
    name: "KL_039_SNR20",
  },
  {
    name: "KL_002_SNR20",
  },
  {
    name: "A_019_SNR20",
  },
  {
    name: "KL-058_SNR20",
  },
  {
    name: "KL_026_SNR20",
  },
  {
    name: "KL_014_SNR20",
  },
  {
    name: "KL_055_SNR20",
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
