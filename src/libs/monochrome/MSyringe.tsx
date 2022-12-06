import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSyringe: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M20.29333,6.53601c-0.00012-0.00012-0.00024-0.00024-0.00031-0.00037l-2.82819-2.82867c-0.39026-0.39044-1.02325-0.39062-1.4137-0.00031c-0.00012,0.00012-0.00024,0.00024-0.00037,0.00031L14.63605,5.1214l-0.70734-0.70734c-0.39026-0.3905-1.02319-0.39062-1.4137-0.00037c-0.00012,0.00012-0.00024,0.00024-0.00037,0.00037l-7.77832,7.77832L4.0293,11.48535c-0.3905-0.3905-1.02356-0.3905-1.41406,0s-0.3905,1.02356,0,1.41406l1.41364,1.41364l0.00006,0.00006c0.00012,0.00012,0.00024,0.00024,0.00037,0.00037l5.65723,5.65723c0.00006,0.00006,0.00024,0.00012,0.00031,0.00018l1.41382,1.41382c0.18726,0.18787,0.44171,0.29333,0.70697,0.29303l0.00006-0.00006c0.26508-0.00006,0.51929-0.10535,0.70679-0.29279c0.39056-0.39044,0.39062-1.02362,0.00018-1.41418l-0.70703-0.70703l7.77832-7.77832c0.3905-0.39026,0.39062-1.02325,0.00037-1.4137c-0.00012-0.00012-0.00024-0.00024-0.00037-0.00037l-0.70728-0.70728l1.41437-1.41431C20.68347,7.55945,20.68365,6.92645,20.29333,6.53601z M13.22211,15.02106l-4.24298-4.24335l4.24255-4.24255l4.24316,4.24316L13.22211,15.02106z"
        ></path>
        <path
          className="uim-primary"
          d="M21.70703,2.28027c-0.39398-0.38696-1.0271-0.38123-1.414,0.01276l-2.12097,2.12128l1.41388,1.41412l2.12109-2.12146c0.00427-0.00415,0.00848-0.00842,0.0127-0.0127C22.10669,3.30029,22.10095,2.66724,21.70703,2.28027z"
        ></path>
        <path
          className="uim-tertiary"
          d="M16.0498,6.53564l1.415,1.41407l0.707-0.707l-1.41399-1.41459L16.0498,6.53564z"
        ></path>
        <rect
          width="2"
          height="2"
          x="7.98"
          y="14.022"
          className="uim-tertiary"
          transform="rotate(-45.049 8.98 15.022)"
        ></rect>
        <rect
          width="6"
          height="6.001"
          x="10.222"
          y="7.778"
          className="uim-tertiary"
          transform="rotate(-45 13.222 10.778)"
        ></rect>
        <path
          className="uim-primary"
          d="M6.53516,20.29297L5.8327,19.59039l1.73529-1.73822l-1.41455-1.41455l-1.73517,1.7381l-0.7113-0.71136c-0.39288-0.388-1.026-0.38403-1.414,0.00891c-0.38458,0.3894-0.38458,1.01575,0.00006,1.40515l2.82806,2.82855c0.38824,0.3927,1.02136,0.39624,1.41406,0.008c0.39264-0.38831,0.39618-1.02136,0.00793-1.41406C6.54047,20.29828,6.53784,20.29565,6.53516,20.29297z"
        ></path>
      </svg>
    </Wrapper>
  );
};