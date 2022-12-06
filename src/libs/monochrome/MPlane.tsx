import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlane: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M9.9159,4.08042V8.6655L3.79955,11.72359a1,1,0,0,0-.5528.89447l.00006,1.27363a1,1,0,0,0,1.35112.93629L9.916,12.83369l-.00012,5.11479a1,1,0,0,1-.68379.94866l-1.13345.3778a1,1,0,0,0-.68378.94861l-.00007.78a1,1,0,0,0,1,1.00009l7.17022.00011a1,1,0,0,0,1-1l0-.78032a1,1,0,0,0-.68376-.94865L14.7679,18.897a1,1,0,0,1-.68376-.94869l.00007-5.11473,5.31792,1.99423a1,1,0,0,0,1.35112-.93638l-.00006-1.27353a1,1,0,0,0-.55278-.89438L14.08414,8.66532l.00014-4.58483a2.08418,2.08418,0,0,0-2.08419-2.08426h0A2.08419,2.08419,0,0,0,9.9159,4.08042Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
