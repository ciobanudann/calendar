import { Box } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const AppointmentView: React.FC<Props> = ({ title }) => {
  return (
    <Box
      width="100%"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      height="50px"
      bgcolor="blue"
    >
      {title}
    </Box>
  );
};

export default AppointmentView;
