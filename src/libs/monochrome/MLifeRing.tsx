import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLifeRing: React.FC<Props> = ({
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
          d="M16.34,3l-2.43,6.68994c-1.10716-0.91992-2.71278-0.91992-3.81994,0L7.66,3C10.39973,1.66669,13.60027,1.66669,16.34,3z M16.34,21c-2.73973,1.33331-5.94027,1.33331-8.68,0l2.43-6.68994c1.10716,0.91992,2.71278,0.91992,3.81994,0L16.34,21z M22,12c0.00237,1.50404-0.33971,2.98865-1,4.34l-6.69-2.43006c0.92-1.10713,0.92-2.71281,0-3.81994L21,7.65991C21.66028,9.0113,22.00235,10.49593,22,12z M9,12c0.0008,0.69752,0.24481,1.37293,0.69,1.90991L3,16.34c-1.33334-2.73975-1.33334-5.94034,0-8.68009L9.69,10.09C9.24483,10.62703,9.00083,11.30246,9,12z"
        ></path>
        <path
          className="uim-primary"
          d="M9.69 10.09003c-.02808.03381-.0481.07269-.07452.1076.16663-.22003.36163-.41498.5816-.58167-.03485.02643-.07306.04578-.10699.07397L7.6604 3.00122C5.62823 3.98322 3.98334 5.62823 3.00128 7.6604L9.69 10.09003zM13.90997 9.68994c-.03406-.02826-.07239-.04767-.10736-.07422.21985.16663.41467.36139.5813.58124-.02643-.03479-.04578-.07306-.07391-.10693l6.6853-2.42841c-.98254-2.03052-2.62646-3.67444-4.65698-4.65698L13.90997 9.68994zM14.31 13.90991c.03143-.03784.05328-.08044.08258-.11938-.17157.22864-.3736.43079-.60236.60229.03906-.02936.08173-.05121.11969-.08276l2.42969 6.68872c2.03217-.98199 3.67719-2.62701 4.65918-4.65918L14.31 13.90991zM10.09003 14.31006c.034.02826.07233.04767.10724.07416-.21997-.16663-.41486-.36157-.58148-.58154.02637.03479.04626.07355.07422.10724L3.00122 16.3396c.98199 2.03217 2.62701 3.67719 4.65918 4.65918L10.09003 14.31006z"
        ></path>
      </svg>
    </Wrapper>
  );
};