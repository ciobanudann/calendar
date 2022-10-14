import React from "react";

import HeaderView from "./Header.view";

type Props = {
  onNextWeekClick: () => void;
  onTodayClick: () => void;
  onPrevWeekClick: () => void;
};

const Header: React.FC<Props> = ({
  onPrevWeekClick,
  onTodayClick,
  onNextWeekClick,
}) => {
  return (
    <HeaderView
      onTodayClick={onTodayClick}
      onNextWeekClick={onNextWeekClick}
      onPrevWeekClick={onPrevWeekClick}
    ></HeaderView>
  );
};

export default Header;
