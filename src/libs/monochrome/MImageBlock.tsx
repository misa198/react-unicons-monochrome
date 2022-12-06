import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MImageBlock: React.FC<Props> = ({
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
          d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19.82812,8.86163c-1.57996,1.51782-4.07629,1.51782-5.65625,0C13.41852,8.10803,12.99677,7.08521,13,6.01965C12.99841,5.28009,13.21112,4.59564,13.55896,4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999l0.70001-0.70007c1.09961-1.04993,2.83032-1.04993,3.92999,0L20,16.38V8.65002C19.94,8.71918,19.89362,8.79572,19.82812,8.86163z"
        ></path>
        <path
          className="uim-quaternary"
          d="M17,2c-2.21431,0.00601-4.00483,1.80531-4,4.01963c-0.00325,1.06556,0.41852,2.08842,1.17188,2.842c1.57994,1.51783,4.0763,1.51783,5.65624,0l0,0c1.56251-1.57252,1.56251-4.11148,0-5.684C19.08136,2.42189,18.06244,1.99761,17,2z"
        ></path>
        <path
          className="uim-primary"
          d="M17,11c-2.76113,0.00029-4.99971-2.23781-5-4.99894c-0.00014-1.32639,0.5268-2.59847,1.46484-3.53622c1.95241-1.95241,5.1179-1.95241,7.07032,0s1.95242,5.11791,0,7.07032l0,0l0,0C19.59975,10.47606,18.32675,11.00354,17,11z M17,3c-1.65667-0.00019-2.99982,1.34266-3.00001,2.99933c-0.00009,0.79584,0.31608,1.5591,0.87892,2.12176c1.18718,1.13282,3.055,1.13282,4.24218,0l0,0c1.17145-1.1717,1.17124-3.0712-0.00046-4.24264C18.55815,3.31609,17.79538,3.00012,17,3z"
        ></path>
        <path
          className="uim-primary"
          d="M14.17188,9.82812c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l5.65625-5.65625c0.39114-0.38983,1.02424-0.38877,1.41407,0.00237c0.38891,0.39021,0.38891,1.02149,0,1.4117l-5.65629,5.65622C14.6916,9.723,14.43715,9.82844,14.17188,9.82812z"
        ></path>
      </svg>
    </Wrapper>
  );
};
