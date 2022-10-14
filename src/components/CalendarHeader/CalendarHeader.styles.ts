import styled from "@emotion/styled";
import { Box, TableHead } from "@mui/material";

type WeekDayProps = {
  isToday?: boolean;
};

export const Day = styled(Box)<WeekDayProps>`
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  ${({ isToday }) =>
    isToday
      ? `background: blue; color: white`
      : `background: transparent: color: black`};
`;

export const WeekDay = styled(Box)<WeekDayProps>`
  padding: 5px;
  color: ${({ isToday }) => (isToday ? "blue" : "black")};
`;

export const HeaderWrapper = styled(TableHead)`
  position: sticky;
  top: 64px;
  z-index: 20;
  background: white;
`;
