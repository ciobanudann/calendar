import React from "react";

import CalendarBodyView from "./CalendarBody.view";

import { AppointmentType } from "components/Appointment/Appointment.types";

type Props = {
  hours: moment.Moment[][];
  appointments: AppointmentType[];
  onAddAppointment: (appointment: AppointmentType) => void;
};

const CalendarBody: React.FC<Props> = ({
  appointments,
  hours,
  onAddAppointment,
}) => {
  return (
    <CalendarBodyView
      appointments={appointments}
      hours={hours}
      onAddAppointment={onAddAppointment}
    ></CalendarBodyView>
  );
};

export default CalendarBody;
