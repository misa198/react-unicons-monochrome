import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFacebook: React.FC<Props> = ({
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
          d="M12.68256,21.99994v-7.745h-2.60633v-3.01843h2.60633v-2.226c-0.20024-1.99861,1.25763-3.78113,3.25624-3.98136c0.20802-0.02084,0.41745-0.02371,0.62596-0.00857c0.77792-0.00274,1.55541,0.03699,2.329,0.119v2.69965L17.29547,7.84c-1.25323,0-1.49591,0.59552-1.49591,1.46942v1.92712h2.989l-0.38922,3.01843h-2.59966v7.745L12.68256,21.99994z"
        ></path>
        <path
          className="uim-primary"
          d="M20.99902,2H2.99799c-0.55225,0-1,0.44769-1,1v18.00098c0,0.55231,0.44775,1,1,1h18.00104c0.55225,0,1-0.44769,1-1V3C21.99902,2.44769,21.55127,2,20.99902,2z M18.89374,7.83923l-1.59827,0.00079c-1.25323,0-1.49591,0.59552-1.49591,1.46942v1.92706h2.98901l-0.38922,3.01843h-2.59967v7.745h-3.11713v-7.745h-2.60632v-3.01843h2.60632V9.0105c-0.20026-1.9986,1.25763-3.78113,3.25623-3.98132c0.20807-0.02087,0.41748-0.02374,0.62598-0.00861c0.77789-0.00275,1.55542,0.03699,2.32898,0.11902V7.83923z"
        ></path>
      </svg>
    </Wrapper>
  );
};
