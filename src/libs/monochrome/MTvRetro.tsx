import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTvRetro: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M18,20H6c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v8C20.99819,18.65611,19.65611,19.99819,18,20z"
        ></path>
        <path
          className="uim-primary"
          d="M9.99884 6h2.30908l-1.44171-2.5c-.27618-.47797-.88733-.64178-1.36554-.36603C9.02216 3.40985 8.85791 4.02148 9.13379 4.5L9.99884 6zM6 20v1c0 .00018 0 .00037 0 .00055C6.00012 21.55267 6.44788 22.00012 7 22c.00018 0 .00037 0 .00055 0C7.55267 21.99988 8.00012 21.55212 8 21v-1H6z"
        ></path>
        <path
          className="uim-primary"
          d="M14.414 6l2.29303-2.29303c.00427-.00421.00854-.00848.01276-.01276.38696-.39398.38123-1.0271-.01276-1.414-.39404-.38696-1.0271-.38123-1.414.01282L11.58606 6H14.414zM16 21c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1h-2V21z"
        ></path>
      </svg>
    </Wrapper>
  );
};
