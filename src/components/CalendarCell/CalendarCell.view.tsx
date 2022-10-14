import moment from "moment";
import React from "react";
import { Box, TableCell } from "@mui/material";

import AddTimePopover from "components/AddTimePopover/AddTimePopover";
import Appointment from "components/Appointment/Appointment";

import { AppointmentType } from "components/Appointment/Appointment.types";

type Props = {
  appointments: AppointmentType[];
  hour: moment.Moment;
  isPopOverOpen: boolean;
  onAddAppointment: (appointment: AppointmentType) => void;
  onClick: () => void;
  onClose: () => void;
};

const CalendarCellView: React.FC<Props> = ({
  appointments,
  hour,
  isPopOverOpen,
  onAddAppointment,
  onClick,
  onClose,
}) => {
  return (
    <React.Fragment>
      <AddTimePopover
        hour={hour}
        isPopOverOpen={isPopOverOpen}
        onAddAppointment={onAddAppointment}
        onClose={onClose}
      ></AddTimePopover>
      <TableCell onClick={onClick}>
        <Box height="100%"  position="relative">
          {appointments.map((item) => {
            return <Appointment key={item.from.unix()} title={item.title}></Appointment>;
          })}
        </Box>
      </TableCell>
    </React.Fragment>
  );
};

export default CalendarCellView;
