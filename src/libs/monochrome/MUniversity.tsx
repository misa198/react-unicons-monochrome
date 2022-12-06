import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUniversity: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M20.65039,9h-18c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V5C1.65022,4.56967,1.92566,4.18759,2.334,4.05176l9-3c0.2054-0.06836,0.42742-0.06836,0.63282,0l9,3C21.37514,4.1876,21.65057,4.56968,21.65039,5v3c0.00014,0.55214-0.44734,0.99986-0.99948,1C20.65074,9,20.65056,9,20.65039,9z M20.65039,22h-18c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C20.65074,22,20.65056,22,20.65039,22z"
        ></path>
        <path
          className="uim-quaternary"
          d="M4,9v7.07587C4.20996,16.02911,4.42645,16.00024,4.65039,16h14c0.11975,0.00012,0.23352,0.02185,0.34961,0.03558V9H4z"
        ></path>
        <path
          className="uim-primary"
          d="M8 16V9H4v7.07587C4.20996 16.02911 4.42645 16.00024 4.65039 16H8zM15 9v7h3.65039c.11975.00012.23352.02185.34961.03558V9H15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
