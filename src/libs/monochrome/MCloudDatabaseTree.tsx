import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudDatabaseTree: React.FC<Props> = ({
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
          d="M11.833,11.5H4.5c-1.65694-0.00009-3.00008-1.34337-2.99999-3.00031c0.00007-1.29975,0.83707-2.45164,2.07323-2.85321c0.47118-2.72072,3.05872-4.54434,5.77944-4.07316c1.6066,0.27823,2.97659,1.32241,3.67076,2.79777c1.91405,0.65537,2.93441,2.7383,2.27903,4.65235C14.7948,10.50612,13.40018,11.50162,11.833,11.5z"
        ></path>
        <path
          className="uim-quaternary"
          d="M14.5,13.5h6c0.55228,0,1,0.44771,1,1v2c0,0.55228-0.44772,1-1,1h-6c-0.55229,0-1-0.44772-1-1v-2C13.5,13.94771,13.94771,13.5,14.5,13.5z"
        ></path>
        <path
          className="uim-primary"
          d="M9.5,14.5v-3h-2v4c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99957,1,0.99945h5v-2H9.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M14.5,17.5h6c0.55228,0,1,0.44772,1,1v2c0,0.55228-0.44772,1-1,1h-6c-0.55229,0-1-0.44772-1-1v-2C13.5,17.94772,13.94771,17.5,14.5,17.5z"
        ></path>
        <path
          className="uim-primary"
          d="M9.5,18.5v-3c0-0.55231-0.44769-1-1-1s-1,0.44769-1,1v4c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99957,1,0.99945h5v-2H9.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
