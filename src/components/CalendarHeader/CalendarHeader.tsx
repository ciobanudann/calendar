import React from "react";
import CalendarHeaderView from "./CalendarHeader.view";

type Props = {
  week: moment.Moment[];
};

const CalendarHeader: React.FC<Props> = ({ week }) => {
  return <CalendarHeaderView week={week}></CalendarHeaderView>;
};

export default CalendarHeader;
