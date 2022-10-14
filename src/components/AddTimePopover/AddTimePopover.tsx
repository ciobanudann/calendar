import moment from "moment";
import React, { ChangeEvent, useState } from "react";

import { AppointmentType } from "components/Appointment/Appointment.types";
import AddTimePopoverView from "./AddTimePopover.view";

type Props = {
  isPopOverOpen: boolean;
  onAddAppointment: (appointment: AppointmentType) => void;
  onClose: () => void;
  hour: moment.Moment;
};

const AddTimePopover: React.FC<Props> = ({
  isPopOverOpen,
  onAddAppointment,
  onClose,
  hour,
}) => {
  const [titleState, setTitleState] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitleState(() => event.target.value);

  const handleAddAppointment = () => {
    onAddAppointment({
      from: hour.clone(),
      to: hour.clone(),
      title: titleState,
    });
    setTitleState(() => "");
    onClose();
  };

  return (
    <AddTimePopoverView
      isPopOverOpen={isPopOverOpen}
      onAddAppointment={handleAddAppointment}
      onClose={onClose}
      title={titleState}
      onChangeTitle={handleTitleChange}
    ></AddTimePopoverView>
  );
};

export default AddTimePopover;
