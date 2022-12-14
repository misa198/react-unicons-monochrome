import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEmoji: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M8.873 17.5a1 1 0 0 1-.62354-1.78223A1.028 1.028 0 0 0 8.5 15a.94846.94846 0 0 0-.251-.71875 1.02243 1.02243 0 0 1-.13525-1.39355.97785.97785 0 0 1 1.35156-.19336A2.868 2.868 0 0 1 10.5 15a2.96336 2.96336 0 0 1-1.00439 2.28223A.99634.99634 0 0 1 8.873 17.5zM15.47705 17.49414a.95582.95582 0 0 1-.56982-.18848A2.868 2.868 0 0 1 13.87256 15 2.96336 2.96336 0 0 1 14.877 12.71777a1 1 0 0 1 1.2461 1.56446A1.028 1.028 0 0 0 15.87256 15a.94846.94846 0 0 0 .251.71875 1.02244 1.02244 0 0 1 .13525 1.39355A1.00833 1.00833 0 0 1 15.47705 17.49414z"
        ></path>
        <path
          className="uim-primary"
          d="M14,16H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="9" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
