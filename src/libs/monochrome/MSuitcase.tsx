import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSuitcase: React.FC<Props> = ({
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
          d="M21,13.45215L21,13.45215l-18-0.001c-0.55214,0.00015-0.99985-0.44732-1-0.99946c0-0.00018,0-0.00036,0-0.00054V9.5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v2.95215C21.99986,13.00438,21.55223,13.45201,21,13.45215z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21,13.45215L3,13.45117c-0.55212,0.00012-0.99988-0.44733-1-0.99951V18.5c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-6.04785C21.99988,13.00439,21.55225,13.45203,21,13.45215z"
        ></path>
        <path
          className="uim-primary"
          d="M15 13.45184V14.5c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1.0481L15 13.45184zM10 6.5v-1c.00055-.55206.44794-.99945 1-1h2c.55206.00055.99945.44794 1 1v1h2v-1c-.00183-1.65613-1.34387-2.99817-3-3h-2c-1.65613.00183-2.99817 1.34387-3 3v1H10zM7 13.45142V14.5c0 .00018 0 .00037 0 .00055C7.00012 15.05267 7.44788 15.50012 8 15.5c.00018 0 .00037 0 .00055 0C8.55267 15.49988 9.00012 15.05212 9 14.5v-1.04852L7 13.45142z"
        ></path>
      </svg>
    </Wrapper>
  );
};
