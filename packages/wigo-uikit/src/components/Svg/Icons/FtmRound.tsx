import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#1969FF" />
      <path
        d="M15,5.1c0.5-0.3,1.4-0.3,1.9,0L22.4,8c0.3,0.2,0.5,0.4,0.5,0.7l0,0v14.6c0,0.3-0.2,0.6-0.5,0.8
l-5.5,2.9c-0.5,0.3-1.4,0.3-1.9,0L9.5,24C9.2,23.8,9,23.5,9,23.2c0,0,0-0.1,0-0.1V8.8c0,0,0,0,0-0.1v0l0,0C9,8.4,9.2,8.2,9.5,8
L15,5.1z M22.1,16.8l-5.2,2.7c-0.5,0.3-1.4,0.3-1.9,0l-5.2-2.7v6.4l5.2,2.7c0.3,0.2,0.6,0.3,0.9,0.3h0c0.3,0,0.6-0.2,0.9-0.3
l5.2-2.8V16.8z M8.1,22.9c0,0.6,0.1,0.9,0.2,1.2c0.1,0.2,0.3,0.4,0.6,0.6l0,0c0.1,0,0.1,0.1,0.2,0.1l0.1,0.1l0.3,0.2l-0.4,0.7
l-0.3-0.2l-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c-0.8-0.6-1.1-1.2-1.1-2.5v0C7.3,22.9,8.1,22.9,8.1,22.9z M15.6,12.9
C15.5,12.9,15.5,12.9,15.6,12.9L10,15.8l0,0l0,0l0,0l0,0l5.5,2.9c0,0,0.1,0,0.1,0V12.9z M16.4,12.9v5.9c0,0,0.1,0,0.1,0l5.5-2.9l0,0
l0,0l0,0l0,0L16.5,13C16.5,12.9,16.5,12.9,16.4,12.9z M22.1,9.7l-4.9,2.6l4.9,2.6V9.7z M9.9,9.7v5.2l4.9-2.6L9.9,9.7z M16.5,5.9
c-0.3-0.2-0.8-0.2-1.1,0L9.9,8.8l0,0l0,0l0,0l0,0l5.5,2.9c0.3,0.2,0.8,0.2,1.1,0L22,8.8l0,0l0,0l0,0l0,0L16.5,5.9z M22.9,6.2
l0.3,0.2l0.1,0c0.1,0.1,0.2,0.1,0.3,0.2c0.8,0.6,1.1,1.2,1.1,2.5v0h-0.9c0-0.6-0.1-0.9-0.2-1.2c-0.1-0.2-0.3-0.4-0.6-0.6l0,0
c-0.1,0-0.1-0.1-0.2-0.1l-0.1-0.1l-0.3-0.2L22.9,6.2z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
