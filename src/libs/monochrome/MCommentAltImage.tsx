import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltImage: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M5,18h1.57745l0.28876-0.27246c0.00684-0.00684,0.01465-0.01367,0.02149-0.02149L11.708,12.876c0.38993-0.39084,0.3892-1.02378-0.00164-1.41372c-0.00043-0.00043-0.00086-0.00086-0.00129-0.00128l-1.583-1.57422C8.94125,8.74382,7.06724,8.74166,5.88379,9.8819L2,13.75513V15C2.00181,16.65611,3.34389,17.99819,5,18z"
      ></path>
      <path
        className="uim-primary"
        d="M18.12207,7.88672c-1.1796-1.13943-3.04855-1.14374-4.2334-0.00977L3.843,17.76685C4.20929,17.92086,4.60265,18.00013,5,18h11.58594l3.707,3.707c0.39043,0.39055,1.02354,0.39064,1.41409,0.00021C21.89463,21.51967,22.00002,21.26527,22,21v-8.83008c0.00014-0.26571-0.10566-0.52052-0.29395-0.708L18.12207,7.88672z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,2H5C3.34387,2.00183,2.00183,3.34387,2,5v8.75513L5.88379,9.8819c1.18347-1.14026,3.05743-1.13806,4.23828,0.00488l0.85822,0.85345l2.90839-2.86328c1.18481-1.13397,3.05377-1.12964,4.2334,0.00977l3.58398,3.5752c0.18829,0.1875,0.29407,0.44232,0.29395,0.70801V5C21.99817,3.34387,20.65613,2.00183,19,2z"
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

export default MCommentAltImage;
