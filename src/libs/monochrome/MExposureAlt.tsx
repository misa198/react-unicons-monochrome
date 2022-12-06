import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExposureAlt: React.FC<Props> = ({
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
          d="M19 22H5c-.80082.00462-1.56885-.31776-2.12646-.89258-.38171-.39177-.37758-1.0176.00927-1.4043L19.70312 2.88281c.387-.3872 1.01345-.39113 1.40528-.00881C21.68221 3.43203 22.00412 4.1996 22 5v14C21.99819 20.65611 20.65611 21.99819 19 22zM11 8H7C6.44772 8 6 7.55228 6 7s.44772-1 1-1h4c.55229 0 1 .44772 1 1S11.55229 8 11 8z"
        ></path>
        <path
          className="uim-primary"
          d="M19 2H5C3.34387 2.00183 2.00183 3.34387 2 5v14c-.00366.7959.31506 1.55945.88361 2.11646L21.11615 2.88379C20.55957 2.31476 19.79596 1.99585 19 2zM11 8H7C6.44769 8 6 7.55231 6 7s.44769-1 1-1h4c.55231 0 1 .44769 1 1S11.55231 8 11 8zM17 15h-1v-1c0-.55231-.44769-1-1-1s-1 .44769-1 1v1h-1c-.55231 0-1 .44769-1 1s.44769 1 1 1h1v1c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1h1c.55231 0 1-.44769 1-1S17.55231 15 17 15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
