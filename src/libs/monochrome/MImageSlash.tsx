import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MImageSlash: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M5.49271,20h14c0.355-0.00278,0.70662-0.06923,1.03815-0.19617L10.6143,9.88672C9.43366,8.74376,7.55977,8.7416,6.3765,9.88184l-3.58984,3.58007c-0.1881,0.18761-0.29386,0.44233-0.29395,0.708V17C2.49452,18.65611,3.83661,19.99819,5.49271,20z"
      ></path>
      <path
        className="uim-quaternary"
        d="M22.19879,15.46191l-3.58447-3.5752c-1.18042-1.14227-3.05328-1.14484-4.23682-0.00586l-0.88733,0.8819l7.04047,7.04083c1.14233-0.42419,1.96069-1.51398,1.9621-2.80359v-0.83008C22.49261,15.90424,22.38684,15.64954,22.19879,15.46191z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19.49274,4h-14c-1.65613,0.00183-2.99823,1.34387-3,3v7.16992c0.00006-0.26569,0.10583-0.52039,0.29395-0.70801l3.58984-3.58008c1.18323-1.14026,3.05713-1.13806,4.23779,0.00488l2.87585,2.87604l0.88733-0.8819c1.18353-1.13898,3.0564-1.13641,4.23682,0.00586l3.58447,3.5752c0.18805,0.18762,0.29382,0.44232,0.29395,0.70801V7C22.49091,5.34387,21.1488,4.00183,19.49274,4z"
      ></path>
      <path
        className="uim-primary"
        d="M20.49316,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18c-0.38763-0.39332-0.38301-1.02639,0.0103-1.41402C2.18574,1.90933,2.81093,1.90934,3.2002,2.293l18,18c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C21.01251,21.89463,20.75829,21.99994,20.4932,22H20.49316z"
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

export default MImageSlash;
