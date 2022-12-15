import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MHindiToChinese: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M11,2H9A1,1,0,0,0,9,4V6H7.81573A2.96457,2.96457,0,0,0,8,5,2.99992,2.99992,0,0,0,2.40234,3.49951a.99956.99956,0,1,0,1.73047,1.001A1.00032,1.00032,0,1,1,5,6,1,1,0,0,0,5,8a1,1,0,1,1-.86719,1.49951.99956.99956,0,1,0-1.73047,1.001A2.99992,2.99992,0,0,0,8,9a2.96457,2.96457,0,0,0-.18427-1H9v3a1,1,0,0,0,2,0V4a1,1,0,0,0,0-2Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17 10a.99974.99974 0 0 1-1-1V8a1.001 1.001 0 0 0-1-1H14a1 1 0 0 1 0-2h1a3.00328 3.00328 0 0 1 3 3V9A.99974.99974 0 0 1 17 10zM10 18H9a3.00328 3.00328 0 0 1-3-3V14a1 1 0 0 1 2 0v1a1.001 1.001 0 0 0 1 1h1a1 1 0 0 1 0 2z"
      ></path>
      <path
        className="uim-primary"
        d="M21,15a1,1,0,0,0,0-2H18v-.5a1,1,0,0,0-2,0V13H13a1,1,0,0,0,0,2h5.18469a6.72743,6.72743,0,0,1-1.22583,2.52661,6.663,6.663,0,0,1-.62878-.98266.99973.99973,0,1,0-1.7793.9121,8.66966,8.66966,0,0,0,.95856,1.46784A6.62132,6.62132,0,0,1,13.084,20.023,1.00015,1.00015,0,0,0,13.29688,22a1.01756,1.01756,0,0,0,.21484-.023,8.63138,8.63138,0,0,0,3.44452-1.62122,8.71987,8.71987,0,0,0,3.46856,1.62073A.98973.98973,0,0,0,20.64062,22a.99995.99995,0,0,0,.21387-1.97656,6.72172,6.72172,0,0,1-2.445-1.08985A8.73435,8.73435,0,0,0,20.2215,15Z"
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

export default MHindiToChinese;
