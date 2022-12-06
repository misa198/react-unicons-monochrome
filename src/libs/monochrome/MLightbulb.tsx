import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLightbulb: React.FC<Props> = ({
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
          d="M15,20.92871H9c-1.10405-0.00126-1.99874-0.89595-2-2v-2c0.00126-1.10405,0.89595-1.99874,2-2h6c1.10405,0.00126,1.99874,0.89595,2,2v2C16.99874,20.03276,16.10405,20.92745,15,20.92871z"
        ></path>
        <path
          className="uim-quaternary"
          d="M16.40723,2.63232C13.8728,0.5741,10.25195,0.54181,7.68127,2.55457c-3.04315,2.38269-3.57861,6.78119-1.19592,9.82434c0.66895,0.80865,1.05084,1.81635,1.08594,2.86523v0.28943C7.93439,15.16174,8.43939,14.92938,9,14.92871h6c0.56061,0.00067,1.06561,0.23303,1.42871,0.6048v-0.43738c0.03064-0.96735,0.38947-1.89545,1.01758-2.63184C19.87189,9.46161,19.40692,5.06165,16.40723,2.63232z"
        ></path>
        <path
          className="uim-primary"
          d="M9 20.92871v1c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1H9zM13 21.92871c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-1h-2V21.92871z"
        ></path>
      </svg>
    </Wrapper>
  );
};
