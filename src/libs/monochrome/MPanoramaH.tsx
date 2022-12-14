import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPanoramaH: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,19a1.01173,1.01173,0,0,1-.415-.08984A21.23887,21.23887,0,0,0,12,17.27441a21.23887,21.23887,0,0,0-8.585,1.63575A1.00086,1.00086,0,0,1,2,18V6a1.00086,1.00086,0,0,1,1.415-.91016A21.23887,21.23887,0,0,0,12,6.72559a21.23887,21.23887,0,0,0,8.585-1.63575A1.00086,1.00086,0,0,1,22,6V18a1.00111,1.00111,0,0,1-1,1Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
