import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeQuestion: React.FC<Props> = ({
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
          d="M21.7,7.21l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,14.79398,9.88198,14.79199,9.88,14.79L2.3,7.21C2.79464,6.16676,3.84544,5.50126,5,5.5h14C20.15456,5.50126,21.20536,6.16676,21.7,7.21z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.70001,7.21002L14.12,14.78998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.88397,14.79401,9.88196,14.79199,9.88,14.78998L2.29999,7.21002C2.10345,7.61169,2.00085,8.0528,2,8.5v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.99915,8.0528,21.89655,7.61169,21.70001,7.21002z"
        ></path>
        <path
          className="uim-primary"
          d="M19,8.5c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1c0.55228-0.00049,0.99961-0.4486,0.99912-1.00088c-0.00049-0.55228-0.4486-0.9996-1.00088-0.99912c-0.35715,0.00031-0.68703,0.19108-0.86543,0.50049c-0.27642,0.47786-0.88788,0.64115-1.36574,0.36474c-0.47786-0.27642-0.64115-0.88788-0.36473-1.36574c0.82871-1.43472,2.66358-1.92598,4.09829-1.09727s1.92598,2.66358,1.09727,4.09829C21.06191,7.92846,20.07163,8.50004,19,8.5z M19,11.5c-0.06713-0.00182-0.13404-0.00851-0.2002-0.02c-0.06251-0.01112-0.12305-0.03135-0.17968-0.06006c-0.06396-0.02196-0.12472-0.05234-0.18067-0.09033C18.38718,11.2929,18.33727,11.25296,18.29,11.21c-0.39982-0.39208-0.4061-1.03404-0.01402-1.43386c0.39208-0.39982,1.03404-0.4061,1.43386-0.01402c0.39982,0.39208,0.4061,1.03404,0.01402,1.43386C19.53319,11.39041,19.27232,11.49998,19,11.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};