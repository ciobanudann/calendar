import moment from "moment";
import React from "react";
import { Table } from "@mui/material";

import CalendarHeader from "components/CalendarHeader/CalendarHeader";
import CalendarBody from "components/CalendarBody/CalendarBody";
import Header from "components/Header/Header";

import { AppointmentType } from "components/Appointment/Appointment.types";

type Props = {
  week: moment.Moment[];
  appointments: AppointmentType[];
  hours: moment.Moment[][];
  onNextWeekClick: () => void;
  onTodayClick: () => void;
  onAddAppointment: (appointment: AppointmentType) => void;
  onPrevWeekClick: () => void;
};

const CalendarView: React.FC<Props> = ({
  week,
  hours,
  onNextWeekClick,
  onPrevWeekClick,
  onAddAppointment,
  appointments,
  onTodayClick,
}) => {
  return (
    <>
      <Header
        onNextWeekClick={onNextWeekClick}
        onPrevWeekClick={onPrevWeekClick}
        onTodayClick={onTodayClick}
      ></Header>
      <Table>
        <CalendarHeader week={week}></CalendarHeader>
        <CalendarBody
          appointments={appointments}
          hours={hours}
          onAddAppointment={onAddAppointment}
        ></CalendarBody>
      </Table>
    </>
  );
};

export default CalendarView;
