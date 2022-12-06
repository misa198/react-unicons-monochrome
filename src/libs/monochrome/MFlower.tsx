import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFlower: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M10.47217,20a8.46717,8.46717,0,0,1-5.99072-2.48047h0A8.47313,8.47313,0,0,1,2.14893,9.94531a.99874.99874,0,0,1,.79638-.79687,8.47246,8.47246,0,0,1,9.90674,9.90625.99874.99874,0,0,1-.79639.79687A8.52785,8.52785,0,0,1,10.47217,20Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13.52783,20a8.52785,8.52785,0,0,1-1.58349-.14844.99874.99874,0,0,1-.79639-.79687,8.47246,8.47246,0,0,1,9.90674-9.90625.99874.99874,0,0,1,.79638.79687,8.47313,8.47313,0,0,1-2.33252,7.57422h0A8.47125,8.47125,0,0,1,13.52783,20Zm5.28369-3.1875h0Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20a.99654.99654,0,0,1-.56348-.17383,9.46579,9.46579,0,0,1,0-15.65234.99789.99789,0,0,1,1.127,0,9.46579,9.46579,0,0,1,0,15.65234A.99654.99654,0,0,1,12,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
