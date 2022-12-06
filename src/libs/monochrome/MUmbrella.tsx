import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUmbrella: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M15.97687,13H8.02313C7.80161,8.22938,9.17776,3,12,3S16.19839,8.22938,15.97687,13z"
        ></path>
        <path
          className="uim-tertiary"
          d="M3 12c0 .00018 0 .00037 0 .00055C3.00012 12.55267 3.44788 13.00012 4 13h4.02313C7.80164 8.22937 9.17773 3 12 3 7.02942 3 3 7.02942 3 12zM12 3c2.82227 0 4.19836 5.22937 3.97687 10H20c.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1C21 7.02942 16.97058 3 12 3z"
        ></path>
        <g>
          <path
            className="uim-primary"
            d="M12 3c.33838 0 .67133.02228 1 .05865V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v.05865C11.32867 3.02228 11.66162 3 12 3zM11 13v6c0 .55231-.44769 1-1 1s-1-.44769-1-1-.44769-1-1-1-1 .44769-1 1c.00183 1.65613 1.34387 2.99817 3 3 1.65613-.00183 2.99817-1.34387 3-3v-6H11z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};
