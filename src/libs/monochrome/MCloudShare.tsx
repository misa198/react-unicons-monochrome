import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudShare: React.FC<Props> = ({
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
          d="M18.42926,7.23242A6.99612,6.99612,0,0,0,5.06079,9.12256,3.994,3.994,0,0,0,6,17H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
        ></path>
        <circle cx="14.5" cy="13" r="2" className="uim-primary"></circle>
        <circle cx="9.5" cy="15.5" r="2" className="uim-primary"></circle>
        <circle cx="14.5" cy="18" r="2" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M9.18066,16.59082a1.00007,1.00007,0,0,1-.41845-1.90869l4.50634-2.07324a1.00021,1.00021,0,0,1,.83594,1.81738L9.59814,16.49951A.99922.99922,0,0,1,9.18066,16.59082Z"
        ></path>
        <path
          className="uim-primary"
          d="M13.686,18.66406a.99914.99914,0,0,1-.41749-.09131L8.76221,16.49951a1.00021,1.00021,0,1,1,.83593-1.81738l4.50635,2.07324a1.00007,1.00007,0,0,1-.41845,1.90869Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
