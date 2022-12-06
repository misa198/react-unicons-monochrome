import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserPlus: React.FC<Props> = ({
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
          className="uim-primary"
          d="M21,10.5h-1v-1c0-0.55229-0.44772-1-1-1s-1,0.44771-1,1v1h-1c-0.55228,0-1,0.44771-1,1s0.44772,1,1,1h1v1c0,0.55229,0.44772,1,1,1s1-0.44771,1-1v-1h1c0.55228,0,1-0.44771,1-1S21.55228,10.5,21,10.5z"
        ></path>
        <circle cx="10" cy="8.5" r="5" className="uim-quaternary"></circle>
        <path
          className="uim-tertiary"
          d="M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00037,0,0.00073,0,0.00116C2.00031,20.0531,2.44806,20.50031,3,20.5h14c0.00037,0,0.00073,0,0.00116,0c0.55194-0.00031,0.99915-0.44806,0.99884-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z"
        ></path>
      </svg>
    </Wrapper>
  );
};
