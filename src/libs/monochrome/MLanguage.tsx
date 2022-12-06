import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLanguage: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M21.05566 12h-2a1 1 0 0 0 0 2v2H17.8714a2.96481 2.96481 0 0 0 .18426-1A2.99955 2.99955 0 0 0 12.458 13.50049a.99992.99992 0 1 0 1.73242.999A1.0009 1.0009 0 0 1 15.05566 14a1 1 0 0 1 0 2 1 1 0 0 0 0 2 1 1 0 1 1 0 2 1.0009 1.0009 0 0 1-.86523-.49951.99992.99992 0 1 0-1.73242.999A2.99955 2.99955 0 0 0 18.05566 19a2.96481 2.96481 0 0 0-.18426-1h1.18426v3a1 1 0 0 0 2 0V14a1 1 0 1 0 0-2zM11.02539 10.75732L9.26855 3.72754a2.28044 2.28044 0 0 0-4.4248 0L3.08594 10.75732a.99963.99963 0 1 0 1.93945.48536L5.58618 9H8.52545l.56049 2.24268a.99963.99963 0 1 0 1.93945-.48536zM6.0863 7l.6969-2.78711a.29222.29222 0 0 1 .5459 0L8.02563 7z"
        ></path>
        <path
          className="uim-tertiary"
          d="M17.05566 10a.99974.99974 0 0 1-1-1V8a1.001 1.001 0 0 0-1-1h-1a1 1 0 0 1 0-2h1a3.00328 3.00328 0 0 1 3 3V9A.99973.99973 0 0 1 17.05566 10zM10.05566 18h-1a3.00328 3.00328 0 0 1-3-3V14a1 1 0 0 1 2 0v1a1.001 1.001 0 0 0 1 1h1a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
