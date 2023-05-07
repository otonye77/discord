import { useState } from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyle = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMininmized, setIsRoomMinimized] = useState(true);
  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMininmized);
  };
  return (
    <MainContainer
      style={isRoomMininmized ? minimizedRoomStyle : fullScreenRoomStyle}
    ></MainContainer>
  );
};

export default Room;