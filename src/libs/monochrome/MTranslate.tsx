import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTranslate: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M16.02246 10a.99974.99974 0 0 1-1-1V8a1.001 1.001 0 0 0-1-1h-1a1 1 0 0 1 0-2h1a3.00328 3.00328 0 0 1 3 3V9A.99973.99973 0 0 1 16.02246 10zM9.02246 18h-1a3.00328 3.00328 0 0 1-3-3V14a1 1 0 0 1 2 0v1a1.001 1.001 0 0 0 1 1h1a1 1 0 1 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M20.02246 15a1 1 0 0 0 0-2h-3v-.5a1 1 0 0 0-2 0V13h-3a1 1 0 0 0 0 2H17.2066a6.72418 6.72418 0 0 1-1.22546 2.52722 6.67535 6.67535 0 0 1-.62958-.98327.99972.99972 0 1 0-1.77929.9121 8.67763 8.67763 0 0 0 .95929 1.46827A6.62062 6.62062 0 0 1 12.10645 20.023 1.00015 1.00015 0 0 0 12.31934 22a1.01756 1.01756 0 0 0 .21484-.023 8.63241 8.63241 0 0 0 3.44434-1.62122 8.71878 8.71878 0 0 0 3.46875 1.62073A.9896.9896 0 0 0 19.66309 22a1 1 0 0 0 .21386-1.97656 6.72417 6.72417 0 0 1-2.44525-1.08979A8.73125 8.73125 0 0 0 19.2431 15zM9.99219 10.75732L8.23438 3.72754a2.28045 2.28045 0 0 0-4.42481 0L2.05273 10.75732a.99963.99963 0 1 0 1.93946.48536L4.55267 9H7.49194l.56079 2.24268a.99963.99963 0 1 0 1.93946-.48536zM5.05249 7L5.749 4.21289a.292.292 0 0 1 .5459 0L6.99182 7z"
        ></path>
      </svg>
    </Wrapper>
  );
};
