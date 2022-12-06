import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMusicNote: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19.11523,2.21191a.99358.99358,0,0,0-.85791-.18164l-8,2A.99972.99972,0,0,0,9.5,5V9.97754c-.00049.01465-.00049.0293,0,.043v5.33056A3.45946,3.45946,0,0,0,8,15a3.5,3.5,0,1,0,3.5,3.5V10.78125l7.24268-1.81152A.99972.99972,0,0,0,19.5,8V3A1.00045,1.00045,0,0,0,19.11523,2.21191Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
