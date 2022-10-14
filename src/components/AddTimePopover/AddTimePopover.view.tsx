import { Popover, Input, Button, Box } from "@mui/material";
import React, { ChangeEventHandler } from "react";

type Props = {
  title: string;
  isPopOverOpen: boolean;
  onAddAppointment: () => void;
  onChangeTitle: ChangeEventHandler;
  onClose: () => void;
};

const AddTimePopoverView: React.FC<Props> = ({
  onChangeTitle,
  title,
  isPopOverOpen,
  onAddAppointment,
  onClose,
}) => {
  return (
    <Popover
      open={isPopOverOpen}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      style={{
        background: 'blur(0.5)'
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box width="400px" height="200px" display="flex" flexDirection="column" gap={5} p={4}>
      <Input value={title} onChange={onChangeTitle}></Input>
      <Button variant="contained" color="secondary" onClick={onAddAppointment}>Add Time</Button>
      </Box>
    </Popover>
  );
};

export default AddTimePopoverView;
