import Calendar from "./components/Calendar";
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
      <Calendar></Calendar>
    </div>
  );
}

export default App;
