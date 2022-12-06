import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudSunRain: React.FC<Props> = ({
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
          d="M16 5c-.55214.00014-.99986-.44734-1-.99948C15 4.00035 15 4.00017 15 4V2c0-.55228.44771-1 1-1 .55228 0 1 .44772 1 1v2c.00014.55214-.44734.99986-.99948 1C16.00035 5 16.00017 5 16 5zM22 9h-2c-.55228 0-1-.44771-1-1s.44772-1 1-1h2c.55228 0 1 .44772 1 1S22.55228 9 22 9zM18.83008 6.16992c-.55228-.00012-.9999-.44793-.99979-1.00021.00006-.26509.10537-.51931.29279-.70679l1.41012-1.41019c.39114-.38983 1.02424-.38877 1.41407.00237.38891.39021.38891 1.02149 0 1.4117L19.53711 5.877C19.3498 6.06483 19.09534 6.17025 18.83008 6.16992zM13.16992 6.16992c-.26527.0003-.51971-.10514-.707-.293L11.05273 4.4668c-.39114-.38983-.3922-1.02293-.00237-1.41407s1.02293-.3922 1.41407-.00237c.00079.00079.00158.00158.00237.00237l1.4102 1.41016c.39047.39058.39037 1.02375-.00021 1.41421-.18748.18742-.4417.29273-.70679.29279L13.16992 6.16992zM20.24023 13.23926c-.26526.0003-.51971-.10515-.707-.293l-1.41015-1.41016c-.39048-.39048-.39048-1.02358 0-1.41406s1.02358-.39048 1.41406 0l1.41016 1.41016c.39046.39058.39037 1.02375-.00021 1.41421-.18748.18742-.4417.29273-.70679.29279L20.24023 13.23926zM13.6665 19H4.5c-1.93321-.0003-3.50014-1.56772-3.49983-3.50093.00025-1.57211 1.04858-2.95121 2.56331-3.37207.48096-3.2774 3.52771-5.54437 6.80511-5.06342 2.02716.29748 3.76222 1.60917 4.60114 3.47842 2.28057.71708 3.54803 3.14716 2.83095 5.42774C17.23309 17.77487 15.55877 19.00212 13.6665 19z"
        ></path>
        <path
          className="uim-primary"
          d="M16.00897 3.00403c-2.49103 0-4.53918 1.82843-4.91705 4.21313 1.71112.47168 3.14062 1.68231 3.87781 3.32483 1.16388.36597 2.05841 1.1806 2.56543 2.19128C19.54285 12.08527 21.005 10.22333 21.005 8 21.005 5.24078 18.76819 3.00403 16.00897 3.00403zM7.5 23c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55228.44772-1 1-1s1 .44772 1 1v1c.00014.55214-.44734.99986-.99948 1C7.50035 23 7.50017 23 7.5 23zM11.5 22c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55228.44771-1 1-1s1 .44772 1 1v1c.00014.55214-.44734.99986-.99948 1C11.50035 22 11.50017 22 11.5 22zM11.5 17c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55229.44771-1 1-1s1 .44771 1 1v1c.00014.55214-.44734.99986-.99948 1C11.50035 17 11.50017 17 11.5 17zM7.5 18c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-1c0-.55229.44772-1 1-1s1 .44771 1 1v1c.00014.55214-.44734.99986-.99948 1C7.50035 18 7.50017 18 7.5 18z"
        ></path>
      </svg>
    </Wrapper>
  );
};