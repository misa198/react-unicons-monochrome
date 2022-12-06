import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCameraSlash: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-secondary"
          d="M12,16.5c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C15.99765,14.70816,14.20816,16.49765,12,16.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,6.5h-1.2793l-0.31592-0.94922C16.99695,4.32538,15.85004,3.49902,14.55859,3.5H9.44141C8.14996,3.49902,7.00305,4.32538,6.59521,5.55078L6.2793,6.5H5c-1.65613,0.00183-2.99817,1.34387-3,3v8c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-8C21.99817,7.84387,20.65613,6.50183,19,6.5z M12,16.5c-2.20917,0-4-1.79083-4-4s1.79083-4,4-4s4,1.79083,4,4C15.99762,14.70819,14.20819,16.49762,12,16.5z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
