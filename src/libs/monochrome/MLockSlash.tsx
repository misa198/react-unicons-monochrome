import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLockSlash: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M10 7c0-1.10303.89697-2 2-2 1.10254 0 2 .89697 2 2v2h2V7c0-2.20557-1.79395-4-4-4C9.79443 3 8 4.79443 8 7v2h2V7zM12 17c-.55225 0-1-.44727-1-1v-2c0-.55273.44775-1 1-1 .55273 0 1 .44727 1 1v2C13 16.55273 12.55273 17 12 17z"
        ></path>
        <path
          className="uim-tertiary"
          d="M16,9H8c-1.65686,0-3,1.34314-3,3v6c0,1.65686,1.34314,3,3,3h8c1.65686,0,3-1.34314,3-3v-6C19,10.34314,17.65686,9,16,9z M13,16c0,0.55273-0.44727,1-1,1c-0.55225,0-1-0.44727-1-1v-2c0-0.55273,0.44775-1,1-1c0.55273,0,1,0.44727,1,1V16z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.90605,3.31302,1.91175,2.67995,2.30573,2.293c0.38897-0.38203,1.0123-0.38203,1.40127,0l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,21.89463,21.26509,21.99994,21,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
