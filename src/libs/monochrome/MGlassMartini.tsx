import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGlassMartini: React.FC<Props> = ({
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
          className="uim-primary"
          d="M18,22H6c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h12c0.55228,0,1,0.44772,1,1S18.55228,22,18,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,15c-4.96831-0.00542-8.99458-4.03169-9-9C2.99275,4.83662,3.22029,3.68374,3.669,2.61035C3.82545,2.24038,4.18815,1.99998,4.58984,2h14.82032c0.40171-0.00004,0.76443,0.24036,0.92089,0.61035C20.77974,3.68374,21.00726,4.83663,21,6C20.99458,10.96831,16.96832,14.99458,12,15z"
        ></path>
        <path
          className="uim-primary"
          d="M12,15c-0.33844-0.00037-0.67126-0.02301-1-0.05969V21c0,0.00037,0,0.00073,0,0.00116C11.00031,21.5531,11.44806,22.00031,12,22c0.00037,0,0.00073,0,0.00116,0C12.5531,21.99969,13.00031,21.55194,13,21v-6.05969C12.67126,14.97699,12.33844,14.99963,12,15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
