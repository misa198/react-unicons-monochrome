import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStretcher: React.FC<Props> = ({
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
          d="M21,12.5H3c-0.55214,0.00014-0.99986-0.44734-1-0.99948C2,11.50035,2,11.50017,2,11.5v-4c-0.00014-0.55214,0.44734-0.99986,0.99948-1c0.00017,0,0.00035,0,0.00052,0h18c0.55214-0.00014,0.99986,0.44734,1,0.99948C22,7.49965,22,7.49983,22,7.5v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,12.5,21.00017,12.5,21,12.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20.34766 18.16553l-6.2124-3.10822L19.24622 12.5h-4.47009l-2.87598 1.43903L9.02393 12.5H4.55359l5.11145 2.55737-6.21191 3.10815c-.33929.16956-.55347.51648-.55298.89575.00067.55231.44891.99945 1.00122.99878.15497.00006.3078-.03601.44629-.10547l7.55249-3.77893 7.55298 3.77893c.13849.06946.29132.10553.44629.10547.37927.00049.7262-.21368.89575-.55298C21.04205 19.01306 20.84167 18.41241 20.34766 18.16553zM21 4.5h-3c-.55228 0-1-.44772-1-1s.44772-1 1-1h3c.55228 0 1 .44772 1 1S21.55228 4.5 21 4.5z"
        ></path>
        <circle cx="4.5" cy="19" r="2.5" className="uim-primary"></circle>
        <circle cx="19.5" cy="19" r="2.5" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
