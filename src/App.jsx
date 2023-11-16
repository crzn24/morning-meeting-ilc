import CalArea from "./components/CalArea";
import Calendar from "./components/Calendar";
import DaysWeek from "./components/DaysWeek";
import Home from "./components/Home";
import Morning from "./components/Morning";
import MorningClass from "./components/MorningClass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Morning></Morning>
      <MorningClass></MorningClass>
      <CalArea></CalArea>
      {/* <Calendar></Calendar> */}
      <DaysWeek></DaysWeek>
    </div>
  );
}

export default App;
