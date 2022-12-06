import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSignRight: React.FC<Props> = ({
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
          className="uim-primary"
          d="M12.99992,22h-6c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h6c0.55229,0,1,0.44772,1,1S13.55221,22,12.99992,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.99992,12.00043h-10c-0.55196,0.00032-0.99968-0.44688-1-0.99884c0-0.00039,0-0.00077,0-0.00116v-5c-0.00032-0.55196,0.44688-0.99968,0.99884-1c0.00039,0,0.00077,0,0.00116,0h10c0.30382-0.00001,0.59122,0.13794,0.78125,0.375l2,2.5c0.29199,0.36551,0.29199,0.88449,0,1.25l-2,2.5C16.59113,11.86248,16.30374,12.00043,15.99992,12.00043z"
        ></path>
        <path
          className="uim-primary"
          d="M10.99994 5.00043V3c0-.55231-.44775-1-1-1-.55231 0-1 .44769-1 1v2.00043H10.99994zM8.99994 12.00043V21c0 .00037 0 .00079 0 .00116.00031.55194.448.99915 1 .99884.00037 0 .00073 0 .0011 0 .552-.00031.99921-.44806.9989-1v-8.99957H8.99994z"
        ></path>
      </svg>
    </Wrapper>
  );
};
