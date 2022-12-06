import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudHeart: React.FC<Props> = ({
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
          d="M18.42926,7.73242A6.99612,6.99612,0,0,0,5.06079,9.62256,3.994,3.994,0,0,0,6,17.5H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,14.063h0a1.92226,1.92226,0,0,0-2.71849,0h0a1.92226,1.92226,0,0,0,0,2.71849l.67962.67962L12,19.5l2.71849-2.71849h0a1.92226,1.92226,0,0,0,0-2.71849h0A1.92226,1.92226,0,0,0,12,14.063Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20.5a.99676.99676,0,0,1-.707-.293L8.57471,17.48877A2.9224,2.9224,0,0,1,12,12.835a2.92244,2.92244,0,0,1,3.42529,4.65381L12.707,20.207A.99676.99676,0,0,1,12,20.5Zm-1.35889-6a.92256.92256,0,0,0-.65234,1.57471L12,18.08594l2.01123-2.01123a.92242.92242,0,0,0,0-1.3042A.94484.94484,0,0,0,12.707,14.77a.99964.99964,0,0,1-1.41406,0A.91763.91763,0,0,0,10.64111,14.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
