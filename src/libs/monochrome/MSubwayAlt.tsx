import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSubwayAlt: React.FC<Props> = ({
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
          d="M19.79932 19.38525C19.29688 19.7652 18.67834 19.99927 18 20h-.41394l1.70697 1.70697C19.48029 21.89484 19.73474 22.00031 20 22c.26508-.00006.51929-.10535.70679-.29279.39056-.39044.39069-1.02362.00024-1.41425L19.79932 19.38525zM6 20c-.67834-.00073-1.29688-.2348-1.79932-.61469l-.90765.90765c-.18744.1875-.29279.44171-.29285.70679C3.00012 21.55206 3.44769 21.99988 4 22c.26526.00031.51971-.10516.70697-.29303L6.41394 20H6z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,13V6H6C4.34389,6.00181,3.00181,7.34389,3,9v4H12z M12,13V6h6c1.65611,0.00181,2.99819,1.34389,3,3v4H12z"
        ></path>
        <path
          className="uim-quaternary"
          d="M3,13v4c0.00183,1.65613,1.34387,2.99817,3,3h12c1.65613-0.00183,2.99817-1.34387,3-3v-4h-9H3z"
        ></path>
        <g>
          <path
            className="uim-primary"
            d="M9 15H8c-.55231 0-1 .44769-1 1s.44769 1 1 1h1c.55231 0 1-.44769 1-1S9.55231 15 9 15zM16 15h-1c-.55231 0-1 .44769-1 1s.44769 1 1 1h1c.55231 0 1-.44769 1-1S16.55231 15 16 15zM13 12V6 4h4c.55231 0 1-.44769 1-1s-.44769-1-1-1H7C6.44769 2 6 2.44769 6 3s.44769 1 1 1h4v2 6H3v2h18v-2H13z"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
};
