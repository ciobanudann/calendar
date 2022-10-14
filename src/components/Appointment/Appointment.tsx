import React from "react";

import AppointmentView from "./Appointment.view";

type Props = {
  title: string;
};

const Appointment: React.FC<Props> = ({ title }) => {
  return <AppointmentView title={title}></AppointmentView>;
};

export default Appointment;
