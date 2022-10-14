import { AppointmentModel } from './models/appointment.model';
import Dexie, { Table } from "dexie";

class CalendarDB extends Dexie {
  appointments!: Table<AppointmentModel>;

  constructor() {
    super("calendarDB");
    this.version(1).stores({
      appointments: `
        ++id,
        from,
        to,
        title`,
    });
  }
}

export const db = new CalendarDB();
