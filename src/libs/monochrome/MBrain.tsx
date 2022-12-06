import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBrain: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M8.02,5.28A1.97691,1.97691,0,0,0,7,5,2.00588,2.00588,0,0,0,5,7a1.95314,1.95314,0,0,0,.32,1.08A1.92575,1.92575,0,0,0,6,8.73l-.68-.65A3.00031,3.00031,0,0,0,6,14l-1.04-.19A2.99776,2.99776,0,0,0,8.93,18.3L8,19a2,2,0,0,0,4,0V5A2,2,0,1,0,8.268,6Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.98,5.28A1.97691,1.97691,0,0,1,17,5a2.00588,2.00588,0,0,1,2,2,1.95314,1.95314,0,0,1-.32,1.08,1.92575,1.92575,0,0,1-.68.65l.68-.65A3.00031,3.00031,0,0,1,18,14l1.04-.19a2.99776,2.99776,0,0,1-3.97,4.49L16,19a2,2,0,0,1-4,0V5a2,2,0,1,1,3.732,1Z"
        ></path>
        <path
          className="uim-primary"
          d="M12 18a1 1 0 0 1-1-1 1.97177 1.97177 0 0 0-1.32324-1.87354 1 1 0 1 1 .64648-1.89257A3.97178 3.97178 0 0 1 13 17 1 1 0 0 1 12 18zM12 13a1 1 0 0 1-1-1 1.97177 1.97177 0 0 0-1.32324-1.87354 1 1 0 1 1 .64648-1.89257A3.97178 3.97178 0 0 1 13 12 1 1 0 0 1 12 13z"
        ></path>
        <path
          className="uim-primary"
          d="M12 18a1 1 0 0 1-1-1 3.97178 3.97178 0 0 1 2.67676-3.76611 1 1 0 1 1 .64648 1.89257A1.97177 1.97177 0 0 0 13 17 1 1 0 0 1 12 18zM12 13a1 1 0 0 1-1-1 3.97178 3.97178 0 0 1 2.67676-3.76611 1 1 0 1 1 .64648 1.89257A1.97177 1.97177 0 0 0 13 12 1 1 0 0 1 12 13z"
        ></path>
        <path
          className="uim-primary"
          d="M10,22a3.00614,3.00614,0,0,1-2.83008-2.00342A3.99652,3.99652,0,0,1,3.481,14.103a3.99652,3.99652,0,0,1,.5625-6.59229,3.00162,3.00162,0,0,1,3.126-3.50586A3.00025,3.00025,0,0,1,13,5V19A3.00328,3.00328,0,0,1,10,22Zm-.9043-2.57324A1,1,0,0,0,11,19V5A1,1,0,0,0,9,5c0,.02.00049.03955.002.05957l.21143.61475a.99992.99992,0,0,1-1.811.82617,2.96777,2.96777,0,0,1-.22509-.48487A1.02,1.02,0,0,0,6,7a.959.959,0,0,0,.10791.4502l.583.55664a.99995.99995,0,0,1-1.1875,1.59082,2.929,2.929,0,0,1-.481-.3418,1.99627,1.99627,0,0,0,.21094,3.5874l.94629.17285A1.00007,1.00007,0,0,1,6,15a3.94028,3.94028,0,0,1-.69141-.062A1.99589,1.99589,0,0,0,7,18a2.01452,2.01452,0,0,0,1.11133-.33545l.21728-.16357a.99992.99992,0,0,1,1.2417,1.56689q-.14281.11939-.29541.22412Z"
        ></path>
        <path
          className="uim-primary"
          d="M14,22a3.00328,3.00328,0,0,1-3-3V5a3,3,0,1,1,5.59766,1.50049,1,1,0,0,1-1.73145-1.001A1.0007,1.0007,0,0,0,15,5a1,1,0,0,0-2,0V19a1,1,0,0,0,2,0,1,1,0,0,1,2,0A3.00328,3.00328,0,0,1,14,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M18,15a1,1,0,0,1,0-2,2.01252,2.01252,0,0,0,2-2,1.99142,1.99142,0,0,0-1.54688-1.94629.99975.99975,0,1,1,.45411-1.94726A4.00009,4.00009,0,0,1,18,15Z"
        ></path>
        <path
          className="uim-primary"
          d="M17 20a4.0214 4.0214 0 0 1-2.57031-.93213A.99985.99985 0 1 1 15.71 17.53174 2.003 2.003 0 0 0 19 16a1.97312 1.97312 0 0 0-.63525-1.45264 1 1 0 1 1 1.35107-1.47461A3.99341 3.99341 0 0 1 17 20zM18.001 9.73a.99993.99993 0 0 1-.49756-1.86768.942.942 0 0 0 .33105-.31591A.97045.97045 0 0 0 18 7a1.0013 1.0013 0 0 0-1-1 .97969.97969 0 0 0-.50586.1377 1.00019 1.00019 0 1 1-1.02832-1.71582A2.9978 2.9978 0 0 1 19.5166 8.62842a2.90154 2.90154 0 0 1-1.02.96924A.99173.99173 0 0 1 18.001 9.73z"
        ></path>
      </svg>
    </Wrapper>
  );
};
