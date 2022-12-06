import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileNetwork: React.FC<Props> = ({
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
        <circle cx="11.936" cy="21" r="2" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M9.93597 21c0-.36615.10559-.70483.2774-1H2.93555c-.55231 0-1 .44769-1 1s.44769 1 1 1h7.27783C10.04156 21.70483 9.93597 21.36615 9.93597 21zM20.93555 20h-7.27698c.17181.29517.2774.63385.2774 1s-.10559.70483-.2774 1h7.27698c.55231 0 1-.44769 1-1S21.48785 20 20.93555 20z"
        ></path>
        <path
          className="uim-tertiary"
          d="M14,8c-1.10457,0-2-0.89543-2-2V1H8C6.34536,0.99779,5.00221,2.33735,5,3.99199C5,3.99466,5,3.99733,5,4v9c-0.00221,1.65464,1.33735,2.99779,2.99199,3C7.99466,16,7.99733,16,8,16h8c1.65464,0.00221,2.99779-1.33735,3-2.99199c0-0.00267,0-0.00534,0-0.00801V8H14z"
        ></path>
        <path
          className="uim-primary"
          d="M10.93555 16v3.27759C11.23083 19.10565 11.56964 19 11.93597 19c.36603 0 .70447.10553.99957.27716V16H10.93555zM19 8h-5c-1.10457 0-2-.89543-2-2V1L19 8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
