import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 69 69" {...props}>
      <path
        d="M61.9015 34.2798H68.8001V0H34.2876V6.88001H57.0246C43.8705 20.8463 23.688 26.2646 5.28216 20.7719L1.97762 19.7858L3.56307e-06 26.377L3.30454 27.3632C24.1373 33.5801 46.9532 27.5018 61.9015 11.7508V34.2798Z"
        fill="white"
      />
      <path
        d="M6.89862 34.5203H0V68.8001H34.5125V61.9201H11.7755C24.9296 47.9538 45.1121 42.5355 63.5179 48.0282L66.8225 49.0143L68.8001 42.4231L65.4956 41.4369C44.6628 35.22 21.8469 41.2983 6.89862 57.0494V34.5203Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
