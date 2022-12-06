import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudRedo: React.FC<Props> = ({
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
          d="M18.42926,7.7542A6.99612,6.99612,0,0,0,5.06079,9.64433,3.994,3.994,0,0,0,6,17.52177H17A4.98638,4.98638,0,0,0,18.42926,7.7542Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,16.75H12.75a1,1,0,0,1,0-2H14V13.5a1,1,0,0,1,2,0v2.25A1,1,0,0,1,15,16.75Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20.5a4,4,0,1,1,3.87158-4.99658,1.00011,1.00011,0,1,1-1.93847.49316,2.00218,2.00218,0,1,0-.61084,2,1.00012,1.00012,0,0,1,1.31543,1.50684A4.01637,4.01637,0,0,1,12,20.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
