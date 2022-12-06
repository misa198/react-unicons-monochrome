import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLinkAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M9.53906,15.46094a1,1,0,0,1-.707-1.707L13.75391,8.832A.99989.99989,0,1,1,15.168,10.24609L10.24609,15.168A.99676.99676,0,0,1,9.53906,15.46094Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.1001 13.81836a1 1 0 0 1-.707-1.707l3.88134-3.88086a2.482 2.482 0 0 0 0-3.50488 2.53924 2.53924 0 0 0-3.50488 0L11.88818 8.60742a.99989.99989 0 1 1-1.41406-1.41406l3.88135-3.88184a4.47811 4.47811 0 0 1 6.333 6.333l-3.88135 3.88086A.99676.99676 0 0 1 16.1001 13.81836zM6.478 21.99805a4.47608 4.47608 0 0 1-3.16651-7.64258l3.88135-3.88086a.99989.99989 0 1 1 1.41406 1.41406L4.72559 15.76953a2.482 2.482 0 0 0 0 3.50488 2.53924 2.53924 0 0 0 3.50488 0l3.88135-3.88183a.99989.99989 0 0 1 1.41406 1.41406L9.64453 20.68848A4.4638 4.4638 0 0 1 6.478 21.99805z"
        ></path>
      </svg>
    </Wrapper>
  );
};
