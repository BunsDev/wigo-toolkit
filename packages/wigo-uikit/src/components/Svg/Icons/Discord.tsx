import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M12.2,14.3c-1.4,0-2.6,1.3-2.6,2.8s1.1,2.8,2.6,2.8c1.4,0,2.6-1.3,2.6-2.8S13.6,14.3,12.2,14.3z M12.2,18.6
	h-0.1c-0.6-0.1-1-0.7-1-1.4c0-0.8,0.5-1.4,1.2-1.4s1.1,0.6,1.1,1.4C13.3,17.9,12.8,18.6,12.2,18.6z"
      />
      <path
        d="M28,15L28,15c-0.6-2.2-1.3-4.3-2.3-6.3c-0.1-0.1-0.2-0.2-0.3-0.3c-1-0.6-2-1.1-3.1-1.5c-2-0.7-3-0.8-3.1-0.8
	c-0.2,0-0.3,0.1-0.5,0.2s-0.2,0.3-0.2,0.4l-0.1,0.6c-1.6-0.1-3.2-0.1-4.8,0l-0.1-0.6c0-0.2-0.1-0.3-0.2-0.4
	c-0.1-0.1-0.3-0.2-0.5-0.2c-0.1,0-1.1,0-3.1,0.8C8.7,7.3,7.6,7.8,6.6,8.4C6.5,8.5,6.4,8.6,6.4,8.7c-1,2-1.8,4.1-2.3,6.3
	c-1,4.1-1.3,6.3-1.2,6.5c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.2,0.3c1.1,1.1,2.3,2,3.8,2.7c1.3,0.5,2.7,0.9,4.1,1.1c0,0,0,0,0.1,0
	c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.3-0.3l1-1.7c1.2,0.2,2.4,0.3,3.5,0.3c1.2,0,2.4-0.1,3.5-0.3l1,1.7c0.1,0.1,0.1,0.2,0.2,0.3
	c0.1,0.1,0.2,0.1,0.4,0.1h0.1c1.4-0.2,2.8-0.5,4.1-1.1c1.4-0.6,2.7-1.5,3.8-2.7c0.1-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.2,0-0.2
	C29.2,21.4,29,19.1,28,15z M24.7,23.4c-1,0.4-2.1,0.8-3.2,0.9L21,23.4c1.1-0.3,2.8-1,4.2-2.2c0.1-0.1,0.1-0.1,0.2-0.2
	c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3c0-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.2-0.1-0.3-0.1
	c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.2,0.1c-1.7,1.6-4.3,2.1-4.4,2.1c-1.2,0.2-2.5,0.4-3.7,0.4c-1.3,0-2.5-0.1-3.8-0.3
	c0,0-2.6-0.5-4.4-2.1C7.7,20,7.5,20,7.3,20c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5
	c1.4,1.3,3.2,1.9,4.2,2.2l-0.5,0.9c-1.1-0.2-2.2-0.5-3.2-0.9c-1.2-0.5-2.2-1.2-3.1-2.1c0.1-0.7,0.4-2.7,1.2-5.9c0.5-2,1.2-4,2.1-5.9
	C8.4,9,9.3,8.6,10.2,8.3C9.5,8.6,8.7,9,8,9.5C7.9,9.6,7.9,9.6,7.8,9.7S7.7,9.9,7.7,10c0,0.2,0,0.4,0.1,0.5c0.1,0.1,0.3,0.2,0.5,0.3
	c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.2-0.1c1.6-1.2,3.9-1.7,4.3-1.8c1-0.1,1.9-0.2,2.9-0.2c1,0,1.9,0,2.9,0.2c0.1,0,2.5,0.5,4.3,1.8
	c0.2,0.1,0.3,0.2,0.5,0.1c0.2,0,0.3-0.1,0.5-0.3c0.1-0.2,0.2-0.3,0.1-0.5c0-0.2-0.1-0.3-0.3-0.5c-0.7-0.5-1.5-0.9-2.2-1.2
	c0.9,0.3,1.8,0.8,2.7,1.2c0.9,1.9,1.6,3.8,2.2,5.9c0.8,3,1.1,4.9,1.2,5.9C26.9,22.2,25.9,22.9,24.7,23.4z"
      />
      <path
        d="M19.8,14.3c-1.4,0-2.5,1.3-2.5,2.8s1.1,2.8,2.5,2.8c1.4,0,2.6-1.3,2.6-2.8S21.2,14.3,19.8,14.3z M19.8,18.6
	h-0.1c-0.6-0.1-1-0.7-1-1.4c0-0.8,0.5-1.4,1.1-1.4c0.6,0,1.2,0.6,1.2,1.4C20.9,17.9,20.4,18.6,19.8,18.6z"
      />
    </Svg>
  );
};

export default Icon;
