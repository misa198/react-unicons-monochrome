import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUserTimes: React.FC<Props> = ({
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
        <circle cx="10" cy="8.5" r="5" className="uim-quaternary"></circle>
        <path
          className="uim-tertiary"
          d="M13.30634,12.22461C12.42346,13.00885,11.2738,13.5,10,13.5s-2.42346-0.49115-3.30634-1.27539C3.92944,13.48499,2.00372,16.26447,2,19.5c-0.00031,0.55194,0.4469,0.99969,0.99884,1c0.00043,0,0.00079,0,0.00116,0h14c0.55194,0.00031,0.99969-0.4469,1-0.99884c0-0.00043,0-0.00079,0-0.00116C17.99628,16.26447,16.07056,13.48499,13.30634,12.22461z"
        ></path>
        <path
          className="uim-primary"
          d="M18,14.5c-0.55228-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l3-3c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-3,3C18.51971,14.39485,18.26527,14.5003,18,14.5z"
        ></path>
        <path
          className="uim-primary"
          d="M21,14.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-3-3c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l3,3c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.51931,14.39463,21.26509,14.49994,21,14.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
