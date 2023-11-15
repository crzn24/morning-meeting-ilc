import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import MovingIcon from "./MovingIcon";

const Calendar = () => {
  return (
    <div name="calendar" className="w-full h-screen bg-[#1D1E1F] text-gray-300">
      
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{ start: "", center: "title", end: "" }}
        // headerToolbar={{ start:"prev", center: "title", end: "today,next"  }}
        // headerToolbar={{ start:"prev,next", center: "title", end: "today"  }}
        // headerToolbar={{ start:"today", center: "title", end: "prev,next"  }}
        // buttonText={{today: 'Today'}}
        height={"100%"}
        showNonCurrentDates={false}
        // dateClick={this.handleDateClick}
        selectable={true}
      />
      {/* <MovingIcon></MovingIcon> */}
    </div>
  );
};

export default Calendar;

// import React from "react";
// import {
//   add,
//   differenceInDays,
//   endOfMonth,
//   format,
//   setDate,
//   startOfMonth,
//   sub,
// } from "date-fns";
// import CalendarCell from "./CalendarCell";

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const Calendar = () => {
//   return (
//     <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full border-t border-l">
//       <div className="grid grid-cols-7 items-center justify-center text-center">
//         <div>{'<<'}</div>
//         <div>{'<'}</div>
//         <div className="col-span-3">November 2023</div>
//         <div>{'>'}</div>
//         <div>{'>>'}</div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;
