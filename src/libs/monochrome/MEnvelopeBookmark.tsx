import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeBookmark: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M21.7,7.96774l-7.58,7.58008c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,15.5518,9.88199,15.54981,9.88,15.54782L2.3,7.96774C2.79464,6.9245,3.84544,6.259,5,6.25774h14C20.15456,6.259,21.20536,6.9245,21.7,7.96774z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.70001,7.96771L14.12,15.54779c-1.16754,1.1709-3.06317,1.17352-4.23401,0.00598C9.88397,15.55182,9.88196,15.5498,9.88,15.54779L2.29999,7.96771C2.10345,8.36945,2.00085,8.81055,2,9.25775v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.99915,8.81055,21.89655,8.36945,21.70001,7.96771z"
      ></path>
      <path
        className="uim-primary"
        d="M21,13.25781c-0.21083,0.00004-0.41627-0.06661-0.58691-0.19043L18.5,11.78516l-1.93164,1.29492c-0.4564,0.31285-1.08,0.19648-1.39286-0.25992c-0.11353-0.16563-0.17468-0.36155-0.1755-0.56235v-8c-0.00014-0.55214,0.44734-0.99986,0.99948-1c0.00017,0,0.00035,0,0.00052,0h5c0.55214-0.00014,0.99986,0.44734,1,0.99948c0,0.00017,0,0.00035,0,0.00052v8C21.99994,12.81007,21.55226,13.25775,21,13.25781z"
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

export default MEnvelopeBookmark;
