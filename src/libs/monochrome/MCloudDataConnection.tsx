import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudDataConnection: React.FC<Props> = ({
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
          d="M16.167,13.5H7c-1.93305-0.00004-3.50007-1.56712-3.50002-3.50018c0.00003-1.57232,1.04853-2.95165,2.5635-3.37238c0.48164-3.27827,3.52965-5.54539,6.80792-5.06376c2.02715,0.29783,3.76214,1.60956,4.60126,3.47876c2.28019,0.71875,3.54599,3.14988,2.82723,5.43007C19.73139,12.27605,18.05801,13.50185,16.167,13.5z"
        ></path>
        <circle cx="12" cy="19.5" r="2" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12 17.5c.36615 0 .70483.10559 1 .2774V13.5h-2v4.2774C11.29517 17.60559 11.63385 17.5 12 17.5zM21 18.5h-7.2774C13.89441 18.79517 14 19.13385 14 19.5s-.10559.70483-.2774 1H21c.55231 0 1-.44769 1-1S21.55231 18.5 21 18.5zM10 19.5c0-.36615.10559-.70483.2774-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h7.2774C10.10559 20.20483 10 19.86615 10 19.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
