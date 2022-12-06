import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMountainsSun: React.FC<Props> = ({
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
          d="M18 10c-2.20914 0-4-1.79086-4-4s1.79086-4 4-4 4 1.79086 4 4C21.9978 8.20823 20.20823 9.9978 18 10zM21.84766 20.46973l-5-8c-.33207-.46815-.98077-.57847-1.44892-.2464-.09542.06768-.17872.15098-.2464.2464l-5 8L9.19592 22H21c.55214.00017.99987-.4473 1.00004-.99944C22.0001 20.81282 21.94729 20.62886 21.84766 20.46973z"
        ></path>
        <path
          className="uim-primary"
          d="M14.13165,14.10278L14.13165,14.10278L14.13,14.1001L10.85999,8.5C10.5896,8.02502,9.98541,7.85919,9.51044,8.12958C9.3559,8.21753,9.22797,8.34546,9.14001,8.5l-7,12c-0.28088,0.47003-0.12756,1.0788,0.34253,1.35968C2.63885,21.95306,2.81787,22.00165,3,22h6.19592l0.95642-1.53027L14.13165,14.10278z"
        ></path>
      </svg>
    </Wrapper>
  );
};
