import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MKayak: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M3.58579,3.58579L3.58579,3.58579c0.78105-0.78105,2.04738-0.78105,2.82843,0l0,0c0.78105,0.78105,0.78105,2.04738,0,2.82843l0,0c-0.78105,0.78105-2.04738,0.78105-2.82843,0l0,0C2.80474,5.63316,2.80474,4.36684,3.58579,3.58579z"
        ></path>
        <path
          className="uim-primary"
          d="M5 7.99805C3.34422 7.9968 2.00296 6.65352 2.00421 4.99774s1.34453-2.99704 3.00031-2.99579 2.99704 1.34453 2.99579 3.00031c-.0006.79489-.31685 1.55701-.87922 2.11879C6.55895 7.68402 5.79557 7.99965 5 7.99805zM5 4.001C4.44827 4.00166 4.00154 4.44947 4.0022 5.0012S4.45067 5.99966 5.0024 5.999c.55173-.00066.99846-.44847.9978-1.0002C5.99988 4.73397 5.89442 4.4801 5.707 4.293 5.51961 4.10542 5.26514 4.00032 5 4.001zM17.58578 17.58579L17.58578 17.58579c.78105-.78105 2.04738-.78105 2.82843 0l0 0c.78105.78105.78105 2.04738 0 2.82843l0 0c-.78105.78105-2.04738.78105-2.82843 0l0 0C16.80474 19.63316 16.80474 18.36684 17.58578 17.58579z"
        ></path>
        <path
          className="uim-primary"
          d="M19,21.99805c-1.65578-0.00125-2.99704-1.34453-2.99579-3.00031c0.00125-1.65578,1.34453-2.99704,3.00031-2.99579c1.65578,0.00125,2.99704,1.34453,2.99579,3.00031c-0.0006,0.79489-0.31685,1.55701-0.87922,2.11879C20.55895,21.68402,19.79557,21.99965,19,21.99805z M19,18.001c-0.55173,0.00066-0.99846,0.44847-0.9978,1.0002c0.00066,0.55173,0.44847,0.99846,1.0002,0.9978c0.55173-0.00066,0.99846-0.44847,0.9978-1.0002c-0.00032-0.26483-0.10578-0.51869-0.2932-0.7058C19.51961,18.10542,19.26514,18.00032,19,18.001z"
        ></path>
        <path
          className="uim-tertiary"
          d="M17.18237,11.18237l-4.36206-4.36206C10.453,8.41602,8.41614,10.453,6.82043,12.82043l4.36194,4.36194c1.17712-0.79382,2.28302-1.69556,3.29224-2.70776C15.48682,13.46539,16.38855,12.3595,17.18237,11.18237z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.77808,4.16461c-0.58929-1.66229-2.41455-2.53223-4.0769-1.94293C10.36902,4.61987,4.61945,10.36987,2.22168,17.70215c-0.40472,1.16077-0.11298,2.45068,0.75195,3.32422c0.5932,0.59644,1.401,0.92963,2.24219,0.9248c0.3678-0.00104,0.73315-0.05939,1.08301-0.17285c3.61713-1.1778,6.90356-3.19617,9.58984-5.88965c2.69366-2.68646,4.7121-5.97333,5.88965-9.59082C22.02277,5.60779,22.02264,4.85468,21.77808,4.16461z M14.47461,14.47461c-1.00922,1.01221-2.11511,1.91394-3.29224,2.70776l-4.36194-4.36194c1.5957-2.36743,3.63257-4.40442,5.99988-6.00012l4.36206,4.36206C16.38855,12.3595,15.48682,13.46539,14.47461,14.47461z"
        ></path>
        <path
          className="uim-primary"
          d="M17.58984,18.58984c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L5.70312,7.11719C5.31191,6.72743,5.31073,6.09433,5.70048,5.70312c0.38976-0.39121,1.02286-0.39239,1.41407-0.00264c0.00088,0.00088,0.00176,0.00176,0.00264,0.00264l11.17969,11.17969c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421c-0.18748,0.18742-0.4417,0.29273-0.70679,0.29279L17.58984,18.58984z"
        ></path>
      </svg>
    </Wrapper>
  );
};