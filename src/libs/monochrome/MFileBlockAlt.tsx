import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFileBlockAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="18" cy="18" r="3" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M15,18c0-1.65686,1.34314-3,3-3V8.99969l-7-7H5c-1.65686,0-3,1.34314-3,3v14c0,1.65686,1.34314,3,3,3h10c0.92761,0,1.74646-0.42999,2.29675-1.09131C15.98083,20.5907,15,19.41345,15,18z"
      ></path>
      <path
        className="uim-primary"
        d="M18,8.99969h-5c-1.10457,0-2-0.89543-2-2v-5L18,8.99969z M18,22c-2.2089,0.00023-3.99976-1.79024-3.99999-3.99915c-0.00011-1.06111,0.42144-2.07877,1.17187-2.82897c1.58239-1.51172,4.07385-1.51172,5.65624,0c1.56193,1.56111,1.56259,4.09283,0.00148,5.65476c-0.00049,0.00049-0.00099,0.00099-0.00148,0.00148l0,0C20.07992,21.58102,19.06144,22.00305,18,22z M18,16c-1.10445-0.00012-1.99988,0.89511-2,1.99956c-0.00006,0.53056,0.21072,1.0394,0.58594,1.41451c0.79119,0.75586,2.03692,0.75586,2.82812,0l0,0c0.78096-0.78113,0.78083-2.04746-0.00031-2.82843C19.03877,16.21073,18.53025,16.00008,18,16z"
      ></path>
      <path
        className="uim-primary"
        d="M15.87891,21.12109c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l4.24218-4.24218c0.39048-0.39048,1.02358-0.39048,1.41406,0s0.39048,1.02358,0,1.41406l0,0l-4.24218,4.24218C16.39866,21.016,16.14419,21.12142,15.87891,21.12109z M11,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h4c0.55229,0,1,0.44772,1,1S11.55229,18,11,18z M13,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h6c0.55229,0,1,0.44771,1,1S13.55229,14,13,14z M8,10H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h1c0.55229,0,1,0.44771,1,1S8.55229,10,8,10z"
      ></path>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MFileBlockAlt;
