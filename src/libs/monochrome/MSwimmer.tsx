import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSwimmer: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M10.55859,14.36523a1,1,0,0,1-.707-1.707l2.40332-2.40332L10.292,8.11328,7.33984,9.18555a.9997.9997,0,0,1-.68359-1.87891l3.58008-1.30078a1.00279,1.00279,0,0,1,1.0791.26367L14.376,9.60938a1.00011,1.00011,0,0,1-.03028,1.38281l-3.08008,3.08008A.99675.99675,0,0,1,10.55859,14.36523Z"
        ></path>
        <path
          className="uim-primary"
          d="M5.30469 14.7373a3.93463 3.93463 0 0 1-2.02246-.55761 2.55916 2.55916 0 0 0-.56836-.24512.99983.99983 0 0 1 .57226-1.916 4.50137 4.50137 0 0 1 1.01856.44239 2.065 2.065 0 0 0 2.09277-.02442 4.63761 4.63761 0 0 1 4.53906.002 2.13311 2.13311 0 0 0 2.125.001 4.63641 4.63641 0 0 1 4.541-.00293 2.06677 2.06677 0 0 0 2.09375.02442 4.47478 4.47478 0 0 1 1.01758-.44239.99983.99983 0 1 1 .57226 1.916 2.53148 2.53148 0 0 0-.56738.24512 4.04834 4.04834 0 0 1-4.10254-.00293 2.6184 2.6184 0 0 0-2.55664-.00391 4.13217 4.13217 0 0 1-4.12109-.001 2.61966 2.61966 0 0 0-2.55469.00488A4.22464 4.22464 0 0 1 5.30469 14.7373zM5.30469 19.7373a3.93463 3.93463 0 0 1-2.02246-.55761 2.55916 2.55916 0 0 0-.56836-.24512.99983.99983 0 1 1 .57226-1.916 4.50137 4.50137 0 0 1 1.01856.44239 2.06727 2.06727 0 0 0 2.09277-.02442 4.63761 4.63761 0 0 1 4.53906.002 2.13311 2.13311 0 0 0 2.125.001 4.63641 4.63641 0 0 1 4.541-.00293 2.06908 2.06908 0 0 0 2.09375.02442 4.47478 4.47478 0 0 1 1.01758-.44239.99983.99983 0 1 1 .57226 1.916 2.53148 2.53148 0 0 0-.56738.24512 4.04834 4.04834 0 0 1-4.10254-.00293 2.61588 2.61588 0 0 0-2.55664-.00391 4.13217 4.13217 0 0 1-4.12109-.001 2.61716 2.61716 0 0 0-2.55469.00488A4.22464 4.22464 0 0 1 5.30469 19.7373z"
        ></path>
        <circle cx="17.018" cy="7.266" r="2" className="uim-tertiary"></circle>
      </svg>
    </Wrapper>
  );
};
