import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeInfo: React.FC<Props> = ({
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
          d="M21,11.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-4c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,11.5,21.00017,11.5,21,11.5z M21,4.5c-0.26472-0.00391-0.51824-0.10746-0.71-0.29c-0.38672-0.39431-0.38672-1.02561,0-1.41992c0.40095-0.37012,1.01897-0.37012,1.41992,0C21.89247,2.98181,21.99604,3.2353,22,3.5c-0.00151,0.06701-0.00837,0.13379-0.02051,0.19971c-0.01048,0.06276-0.03058,0.12353-0.05957,0.18017c-0.01997,0.06138-0.05036,0.11886-0.08984,0.16992c-0.04,0.06006-0.08008,0.10987-0.12012,0.16016C21.51811,4.39234,21.26468,4.49588,21,4.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
