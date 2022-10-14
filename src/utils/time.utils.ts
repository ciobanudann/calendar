import { faker } from "@faker-js/faker";
import { db } from "db";
import moment from "moment";

type TimeUnits =
  | "year"
  | "years"
  | "y"
  | "month"
  | "months"
  | "M"
  | "week"
  | "weeks"
  | "w"
  | "day"
  | "days"
  | "d"
  | "hour"
  | "hours"
  | "h"
  | "minute"
  | "minutes"
  | "m"
  | "second"
  | "seconds"
  | "s"
  | "millisecond"
  | "milliseconds"
  | "ms";

const getCurrentWeek = (substractWeeks: number) => {
  var weekStart = moment()
    .subtract(substractWeeks, "weeks")
    .clone()
    .startOf("isoWeek");

  var days = [];

  for (var i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, "days"));
  }
  return days;
};

const randomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const seedAppointments = () => {
  [-2, -1, 0, 1, 2]
    .map((day) => getCurrentWeek(day))
    .flat()
    .forEach((item) => {
      const addHours = randomNumber(0, 24);
      db.appointments.add({
        from: item.add(addHours, "hours").unix(),
        to: item.add(addHours + 1, "hours").unix(),
        title: faker.random.words(2),
      });
    });
};

const generateHours = (
  day: moment.Moment,
  interval: {
    count: number;
    unit: TimeUnits;
  }
) => {
  let startTime = moment(day.startOf("day"), "HH:mm");
  let endTime = moment(day.clone().add(1, "days").startOf("day"), "HH:mm");
  let allTimes = [];

  while (startTime < endTime) {
    allTimes.push(startTime.clone());
    startTime.add(interval.count, interval.unit);
  }
  return allTimes;
};

export { getCurrentWeek, generateHours, randomNumber, seedAppointments };
