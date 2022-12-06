import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSlidersV: React.FC<Props> = ({
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
          d="M7,8H3C2.44772,8,2,7.55228,2,7s0.44772-1,1-1h4c0.55228,0,1,0.44772,1,1S7.55228,8,7,8z M14,16h-4c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h4c0.55229,0,1,0.44771,1,1S14.55229,16,14,16z M21,12h-4c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55228,0,1,0.44771,1,1S21.55228,12,21,12z"
        ></path>
        <path
          className="uim-primary"
          d="M20 10V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v7H20zM6 6V3c0-.55231-.44769-1-1-1S4 2.44769 4 3v3H6zM13 14V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v11H13zM19 14c-.55231 0-1 .44769-1 1v6c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-6C20 14.44769 19.55231 14 19 14zM12 18c-.55231 0-1 .44769-1 1v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2C13 18.44769 12.55231 18 12 18zM5 10c-.55231 0-1 .44769-1 1v10c0 .00018 0 .00037 0 .00055C4.00012 21.55267 4.44788 22.00012 5 22c.00018 0 .00037 0 .00055 0C5.55267 21.99988 6.00012 21.55212 6 21V11C6 10.44769 5.55231 10 5 10z"
        ></path>
      </svg>
    </Wrapper>
  );
};