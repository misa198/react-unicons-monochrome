import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlaneDeparture: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17.235,3.81757,13.99287,7.05971,7.50556,4.89719a1,1,0,0,0-1.02338.2416l-.90055.90063A1,1,0,0,0,5.875,7.65687l5.17066,2.35029-3.6168,3.61662a1,1,0,0,1-1.15431.1873l-1.06862-.53433a1,1,0,0,0-1.15427.18726L3.5,14.01552a1,1,0,0,0-.00007,1.41426L8.57,20.5a1,1,0,0,0,1.41424,0l.55176-.55178a1,1,0,0,0,.18731-1.15428L10.189,17.72532a1,1,0,0,1,.18734-1.15431l3.6167-3.61662,2.35021,5.17047a1,1,0,0,0,1.6175.29327l.90049-.90056a1,1,0,0,0,.24154-1.0233L16.94038,10.007l3.24207-3.24186a2.08419,2.08419,0,0,0,.00005-2.94754h0A2.08418,2.08418,0,0,0,17.235,3.81757Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
