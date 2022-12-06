import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMedicalDrip: React.FC<Props> = ({
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
          d="M17,6h-6C9.34515,6.00483,8.00483,7.34515,8,9v4.93c-0.00165,1.00552,0.50173,1.94468,1.34,2.5L11,17.54V18c0.00325,1.10322,0.89678,1.99675,2,2h2c1.10322-0.00325,1.99675-0.89678,2-2v-0.46l1.66-1.11c0.81739-0.54193,1.31788-1.44953,1.34-2.43V9C19.99517,7.34515,18.65485,6.00483,17,6z"
        ></path>
        <path
          className="uim-primary"
          d="M13 21c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1h-2V21zM20 12v2h-3c-.55228 0-1-.44771-1-1s.44772-1 1-1H20zM20 9v2h-4c-.55229 0-1-.44771-1-1s.44771-1 1-1H20zM5 22c-.55214.00014-.99986-.44734-1-.99948C4 21.00035 4 21.00017 4 21V7c.00324-2.76008 2.23992-4.99676 5-5h8c.55228 0 1 .44772 1 1s-.44772 1-1 1H9C7.34389 4.00181 6.00181 5.34389 6 7v14c.00014.55214-.44734.99986-.99948 1C5.00035 22 5.00017 22 5 22z"
        ></path>
        <path
          className="uim-primary"
          d="M15,6V3c0-0.55231-0.44769-1-1-1s-1,0.44769-1,1v3H15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
