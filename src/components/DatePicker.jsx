import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { makeStyles } from "@material-ui/core";

const selectionRange = {
  startDate: new Date(20, 7, 2022),
  endDate: new Date(20, 7, 2022),
  key: "selection",
};

const DatePicker = () => {
  const classes = useStyle();
  const handleSelect = () => {};

  return (
    <div className={classes.root}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "12vh",
    left: "30vw",
    [theme.breakpoints.down("xs")]: {
      top: "12vh",
      left: 0,
    },
  },
}));

export default DatePicker;
