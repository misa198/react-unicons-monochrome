import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHome: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M15,22H9v-4.88158c-0.0265-1.4607,0.97688-2.73903,2.40207-3.06026c1.62688-0.32756,3.21126,0.72575,3.53882,2.35263C14.97994,16.60477,14.99974,16.80213,15,17V22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,10H5c-0.00037,0-0.00073,0-0.00116,0C4.4469,10.00031,3.99969,10.44806,4,11v10c0,0.00037,0,0.00073,0,0.00116C4.00031,21.5531,4.44806,22.00031,5,22h4v-4.88159c-0.02649-1.46069,0.97687-2.73901,2.4021-3.06024c1.62683-0.32758,3.21124,0.72577,3.53882,2.3526C14.97992,16.6048,14.99976,16.80212,15,17v5h4c0.00037,0,0.00073,0,0.00116,0C19.5531,21.99969,20.00031,21.55194,20,21V11c0-0.00037,0-0.00073,0-0.00116C19.99969,10.4469,19.55194,9.99969,19,10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,12H3c-0.55212,0.00004-0.99974-0.44751-0.99979-0.99963c-0.00002-0.28567,0.12217-0.5577,0.33573-0.74744l9-8c0.37823-0.33789,0.94989-0.33789,1.32812,0l9,8c0.41276,0.36671,0.45008,0.99859,0.08338,1.41134C21.5577,11.87783,21.28567,12.00002,21,12z"
        ></path>
      </svg>
    </Wrapper>
  );
};