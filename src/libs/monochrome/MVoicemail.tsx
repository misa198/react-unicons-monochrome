import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVoicemail: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="6" cy="12" r="3" className="uim-tertiary"></circle>
        <circle cx="18" cy="12" r="3" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M18,8a4.004,4.004,0,0,0-4,4,3.95418,3.95418,0,0,0,.55621,2H9.44379A3.95418,3.95418,0,0,0,10,12a4,4,0,1,0-4,4H18a4,4,0,0,0,0-8ZM4,12a2,2,0,1,1,2,2A2.0026,2.0026,0,0,1,4,12Zm14,2a2,2,0,1,1,2-2A2.0026,2.0026,0,0,1,18,14Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
