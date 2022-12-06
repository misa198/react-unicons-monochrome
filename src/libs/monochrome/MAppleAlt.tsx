import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAppleAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <g data-name="Brand Logos">
          <path
            className="uim-primary"
            d="M17.59413,12.62537a4.523,4.523,0,0,1,2.16138-3.80548,4.67188,4.67188,0,0,0-3.658-1.98383c-1.55768-.1579-3.03937.91693-3.82861.91693-.78974,0-2.009-.89374-3.30084-.86908A4.89591,4.89591,0,0,0,4.82973,9.39056c-1.76239,3.06018-.44989,7.59369,1.26764,10.07673.84045,1.21392,1.84228,2.58117,3.15777,2.53137,1.26771-.04981,1.74616-.81879,3.27674-.81879,1.531,0,1.96161.81879,3.30078.79407,1.36291-.02515,2.228-1.23895,3.06165-2.4574a10.94625,10.94625,0,0,0,1.38409-2.84448A4.42049,4.42049,0,0,1,17.59413,12.62537Z"
          ></path>
          <path
            className="uim-primary"
            d="M15.21588,5.04a5.56073,5.56073,0,0,0,1.32-4.04,5.67156,5.67156,0,0,0-3.73,1.92l-.02033.04688a5.56073,5.56073,0,0,0-1.32,4.04,5.67156,5.67156,0,0,0,3.73-1.92Z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};
