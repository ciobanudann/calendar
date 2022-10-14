import { useCallback, useEffect, useMemo, useState } from "react";

import CalendarView from "./Calendar.view";

import { getCurrentWeek, generateHours } from "../../utils/time.utils";
import moment from "moment";
import { AppointmentType } from "components/Appointment/Appointment.types";
import { db } from "db";
import { useLiveQuery } from "dexie-react-hooks";

const Calendar = () => {
  const [weekState, setWeekState] = useState<number>(0);
  const [weekDataState, setWeekDataState] = useState(getCurrentWeek(weekState));
  const appointmentsState = useLiveQuery(() => db.appointments.toArray(), []);

  const appointments = useMemo(
    () =>
      appointmentsState?.map((appointment) => {
        return {
          ...appointment,
          from: moment.unix(appointment.from),
          to: moment.unix(appointment.to),
        };
      }) || [],
    [appointmentsState]
  );

  const hours: moment.Moment[][] = useMemo(
    () =>
      weekDataState.map((day) =>
        generateHours(day, { count: 1, unit: "hour" })
      ),
    [weekDataState]
  );

  const handleAddAppointment = useCallback(
    async (appointment: AppointmentType) => {
      try {
        await db.appointments.add({
          from: appointment.from.unix(),
          title: appointment.title,
          to: appointment.to.unix(),
        });
      } catch (e) {
        console.error(e);
      }
    },
    []
  );
  const handleNextWeekClick = () => setWeekState((prev) => prev - 1);
  const handlePrevWeekClick = () => setWeekState((prev) => prev + 1);
  const handleTodayClick = () => setWeekState(() => 0);

  useEffect(() => {
    setWeekDataState(() => getCurrentWeek(weekState));
  }, [weekState]);




  return (
    <CalendarView
      hours={hours}
      appointments={appointments}
      onNextWeekClick={handleNextWeekClick}
      onAddAppointment={handleAddAppointment}
      onPrevWeekClick={handlePrevWeekClick}
      onTodayClick={handleTodayClick}
      week={weekDataState}
    ></CalendarView>
  );
};

export default Calendar;
