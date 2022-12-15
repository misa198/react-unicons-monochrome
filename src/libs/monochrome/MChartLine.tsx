import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MChartLine: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="7" cy="14.5" r="1.5" className="uim-tertiary"></circle>
      <circle cx="11.5" cy="10.083" r="1.5" className="uim-tertiary"></circle>
      <circle cx="14.833" cy="13.25" r="1.5" className="uim-tertiary"></circle>
      <path
        className="uim-quaternary"
        d="M14.75482,11.75787l-1.76379-1.76379C12.9928,10.02411,13,10.05255,13,10.08301c0,0.75-0.55212,1.36597-1.27106,1.47693l1.61194,1.61194C13.38092,12.40698,13.98993,11.79791,14.75482,11.75787z"
      ></path>
      <circle cx="20" cy="8" r="1.5" className="uim-tertiary"></circle>
      <g>
        <path
          className="uim-quaternary"
          d="M18.51544 8.15356l-3.60431 3.60431c.76489.04004 1.37396.64905 1.414 1.41394l3.67212-3.67206C19.22266 9.49841 18.59326 8.9079 18.51544 8.15356zM10 10.08301c0-.03046.0072-.0589.00897-.08893l-3.00623 3.00623c.77454.00146 1.40399.5918 1.48181 1.34613l2.7865-2.7865C10.55212 11.44897 10 10.83301 10 10.08301z"
        ></path>
      </g>
      <path
        className="uim-primary"
        d="M20.5,22h-18c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v17h17c0.55228,0,1,0.44772,1,1S21.05228,22,20.5,22z"
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

export default MChartLine;
