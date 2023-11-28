import CalArea from "./components/CalArea";
// import Calendar from "./components/Calendar";
import DaysWeek from "./components/DaysWeek";
import Feelings from "./components/Feelings";
import Home from "./components/Home";
import Morning from "./components/Morning";
import MorningClass from "./components/MorningClass";
import Navbar from "./components/Navbar";
import WhatClothes from "./components/WhatClothes";
import WhatDay from "./components/WhatDay";
import WhatTemp from "./components/WhatTemp";
import WhatWeather from "./components/WhatWeather";

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
      <WhatDay></WhatDay>
      <WhatWeather></WhatWeather>
      <WhatTemp></WhatTemp>
      <WhatClothes></WhatClothes>
      <Feelings></Feelings>
    </div>
  );
}

export default App;
