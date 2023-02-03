import Test, { TestType } from "./Test";

import { Box } from "@mui/material";
import { test2Array } from "./audio/soundsData";

const TestsWithoutWhiteNoise = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Test patientArray={test2Array} type={TestType.Regular} />
    </Box>
  );
};

export default TestsWithoutWhiteNoise;
