import React, { useState } from "react";

import CalendarCellView from "./CalendarCell.view";

import { AppointmentType } from "components/Appointment/Appointment.types";

type Props = {
  hour: moment.Moment;
  appointments: AppointmentType[];
  onAddAppointment: (appointment: AppointmentType) => void;
};

const CalendarCell: React.FC<Props> = ({
  appointments,
  hour,
  onAddAppointment,
}) => {
  const [isPopoverOpenState, setIsPopoverOpenState] = useState(false);

  const handlePopoverClose = () => setIsPopoverOpenState(() => false);
  const handlePopoverClick = () => setIsPopoverOpenState(() => true);

  const currentHourAppointments = appointments.filter((appointment) =>
    appointment.from.isSame(hour)
  );

  return (
    <CalendarCellView
      isPopOverOpen={isPopoverOpenState}
      appointments={currentHourAppointments}
      onAddAppointment={onAddAppointment}
      hour={hour}
      onClick={handlePopoverClick}
      onClose={handlePopoverClose}
    ></CalendarCellView>
  );
};

export default CalendarCell;
