import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExposureIncrease: React.FC<Props> = ({
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
          d="M19 22H5c-.80082.00462-1.56885-.31776-2.12646-.89258-.38171-.39177-.37758-1.0176.00927-1.4043L19.70312 2.88281c.387-.3872 1.01345-.39113 1.40528-.00881C21.68221 3.43203 22.00412 4.1996 22 5v14C21.99819 20.65611 20.65611 21.99819 19 22zM11 7h-1V6c0-.55228-.44771-1-1-1S8 5.44772 8 6v1H7C6.44772 7 6 7.44772 6 8s.44772 1 1 1h1v1c0 .55229.44771 1 1 1s1-.44771 1-1V9h1c.55229 0 1-.44771 1-1S11.55229 7 11 7z"
        ></path>
        <path
          className="uim-primary"
          d="M19 2H5C3.34387 2.00183 2.00183 3.34387 2 5v14c-.00366.7959.31506 1.55945.88361 2.11646L21.11615 2.88379C20.55957 2.31476 19.79596 1.99585 19 2zM11 9h-1v1c0 .55231-.44769 1-1 1s-1-.44769-1-1V9H7C6.44769 9 6 8.55231 6 8s.44769-1 1-1h1V6c0-.55231.44769-1 1-1s1 .44769 1 1v1h1c.55231 0 1 .44769 1 1S11.55231 9 11 9zM17 16h-4c-.55231 0-1 .44769-1 1s.44769 1 1 1h4c.55231 0 1-.44769 1-1S17.55231 16 17 16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
