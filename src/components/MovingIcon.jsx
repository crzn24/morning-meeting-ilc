import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

const imageUrl =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI4NXQyNGp0bmFxenZ4YjVvdHRrYnc5aHJqYzQxcXkyZWkxdDR1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hVkkvfPFhmIizrH9Ic/giphy.gif";

const MovingIcon = () => {
  return (
    <div>
      <Draggable>
        <Resizable
          defaultSize={{ width: 200, height: 200 }}
          style={{
            background: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Draggable>
    </div>
  );
};

export default MovingIcon;
