import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAnalytics: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M5 22a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 5 22zM10 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 10 22zM15 22a.99974.99974 0 0 1-1-1V9a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22zM20 22a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 20 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
