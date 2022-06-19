import { CssBaseline, makeStyles } from "@material-ui/core";
import Banner from "./Banner";
import DatePicker from "./DatePicker";
import RoomCard from "./RoomCard";

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <DatePicker />
        </div>
        <Banner />
        <div className={classes.section}>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {},
  dates: {},
  section: {},
}));

export default Home;
