import { TableRow, TableCell, Box } from "@mui/material";
import moment from "moment";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { HeaderWrapper, WeekDay, Day } from "./CalendarHeader.styles";

type Props = {
  week: moment.Moment[];
};

const CalendarHeaderView: React.FC<Props> = ({ week }) => {
  return (
    <HeaderWrapper>
      <TableRow>
        <TableCell variant="head">
          <Box display="flex" alignItems="center" justifyContent="center">
            <AddCircleIcon fontSize="large"></AddCircleIcon>
          </Box>
        </TableCell>
        {week.map((day: moment.Moment) => {
          const isToday = day.isSame(moment(), "day");
          return (
            <TableCell key={day.unix()} variant="head">
              <WeekDay
                display="flex"
                flexDirection="column"
                alignItems="center"
                isToday={isToday}
              >
                <Box>{day.format("ddd")}</Box>
                <Day
                  display="flex"
                  alignItems="cemter"
                  justifyContent="center"
                  isToday={isToday}
                >
                  {day.format("DD")}
                </Day>
              </WeekDay>
            </TableCell>
          );
        })}
      </TableRow>
    </HeaderWrapper>
  );
};

export default CalendarHeaderView;
