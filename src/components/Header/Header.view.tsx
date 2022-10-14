import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { seedAppointments } from "utils/time.utils";

const Header = styled(Box)`
  height: 64px;
  display: flex;
  gap: 30px;
  z-index: 20;
  align-items: center;
  padding: 8px;
  position: sticky;
  top: 0;
  background: white;
`;

const Icon = styled(MenuIcon)`
  margin: 12px;
`;

type Props = {
  onNextWeekClick: () => void;
  onPrevWeekClick: () => void;
  onTodayClick: () => void;
};

const HeaderView: React.FC<Props> = ({
  onNextWeekClick,
  onPrevWeekClick,
  onTodayClick,
}) => {
  return (
    <Header>
      <Box display="flex">
        <Button>
          <Icon fontSize="medium"></Icon>
        </Button>
        <Typography textAlign="center" alignSelf="center">
          Calendar
        </Typography>
      </Box>

      <Box display="flex">
        <Button onClick={onTodayClick} variant="outlined">
          Today
        </Button>
        <Button onClick={seedAppointments} variant="outlined">
          Seed
        </Button>
        <Box>
          <Button onClick={onPrevWeekClick}>
            <ChevronLeftIcon></ChevronLeftIcon>
          </Button>
          <Button onClick={onNextWeekClick}>
            <ChevronRightIcon></ChevronRightIcon>
          </Button>
        </Box>
      </Box>
      <Box></Box>
    </Header>
  );
};

export default HeaderView;
