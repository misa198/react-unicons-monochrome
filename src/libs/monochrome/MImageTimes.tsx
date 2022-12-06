import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MImageTimes: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M16.52,12.90991c-1.09963-1.04992-2.83037-1.04992-3.93,0l-1.41,1.41016c-0.18789,0.18415-0.29262,0.43692-0.29,0.7c-0.00271,0.26603,0.10182,0.52194,0.29,0.71l6.23,6.23c0.7152-0.08939,1.37132-0.44242,1.84-0.99C19.7334,20.42773,20.00035,19.7265,20,19v-2.62L16.52,12.90991z"
        ></path>
        <path
          className="uim-primary"
          d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M20.41406,5.00391l1.293-1.293c0.39213-0.38883,0.3948-1.02192,0.00598-1.41405c-0.38883-0.39213-1.02192-0.3948-1.41405-0.00598c-0.00201,0.00199-0.004,0.00399-0.00599,0.00599L19,3.58984l-1.293-1.293c-0.39175-0.38921-1.02484-0.38715-1.41405,0.0046C15.90551,2.69141,15.90554,3.321,16.293,3.71094l1.293,1.293l-1.293,1.293c-0.39398,0.38695-0.39968,1.02002-0.01273,1.414c0.38695,0.39398,1.02002,0.39968,1.414,0.01273c0.00428-0.0042,0.00852-0.00845,0.01273-0.01273L19,6.418l1.293,1.293c0.3905,0.39047,1.0236,0.39044,1.41406-0.00006c0.39047-0.3905,0.39044-1.0236-0.00006-1.41406L20.41406,5.00391z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,6.41803l-1.29297,1.29291c-0.00421,0.00427-0.00848,0.00854-0.01276,0.01276c-0.39398,0.3869-1.02704,0.38123-1.414-0.01276s-0.38123-1.02704,0.01276-1.414L17.586,5.00397L16.58209,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V7.41797L19,6.41803z"
        ></path>
      </svg>
    </Wrapper>
  );
};
