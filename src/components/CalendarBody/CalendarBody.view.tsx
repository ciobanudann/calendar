import moment from "moment";
import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

import CalendarCell from "components/CalendarCell/CalendarCell";

import { AppointmentType } from "components/Appointment/Appointment.types";

type Props = {
  hours: moment.Moment[][];
  appointments: AppointmentType[];
  onAddAppointment: (appointment: AppointmentType) => void;
};

const CalendarBodyView: React.FC<Props> = ({
  hours,
  appointments,
  onAddAppointment,
}) => {
  return (
    <TableBody>
      {hours[0].map((_, timeIndex: number) => {
        const time = hours[0][timeIndex].format("HH:mm");
        return (
          <TableRow key={time}>
            <TableCell variant="footer">{time}</TableCell>
            {hours.map((hour: moment.Moment[]) => {
              return (
                <CalendarCell
                  key={hours[0][timeIndex].format("HH:mm")}
                  appointments={appointments}
                  hour={hour[timeIndex]}
                  onAddAppointment={onAddAppointment}
                ></CalendarCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default CalendarBodyView;
