import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MForecastcloudMoonTear: React.FC<Props> = ({
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
        d="M14.6665,18.5H5.5c-1.93321-0.0003-3.50014-1.56772-3.49983-3.50093c0.00025-1.57211,1.04858-2.95121,2.56331-3.37207c0.48096-3.2774,3.52771-5.54437,6.80511-5.06342c2.02716,0.29748,3.76222,1.60917,4.60114,3.47842c2.28057,0.71708,3.54803,3.14716,2.83095,5.42774C18.23309,17.27487,16.55877,18.50212,14.6665,18.5z"
      ></path>
      <path
        className="uim-primary"
        d="M21.97278 8.04852c-.12823-.53735-.66779-.86902-1.20514-.74084-.21521.05353-.43604.08105-.65778.08203-1.65607-.00183-2.99817-1.34393-3-3 .00085-.22064.02838-.44031.08203-.6543.03662-.15106.03748-.30853.00262-.45996-.12396-.53815-.66071-.87402-1.19891-.75006-2.0592.46259-3.56458 2.16656-3.83081 4.21417 1.67847.48584 3.07837 1.68353 3.80493 3.30243 1.14227.35919 2.02991 1.14838 2.54181 2.133 1.70166-.49792 3.05823-1.86987 3.46307-3.67004C22.00916 8.35468 22.00854 8.19849 21.97278 8.04852zM10.5 21.5c-1.65611-.00181-2.99819-1.34389-3-3 0-2.47461 2.33838-4.09277 2.438-4.16016.33695-.22803.77826-.22996 1.11719-.00488C11.15479 14.40234 13.5 15.99609 13.5 18.5 13.49819 20.15611 12.15611 21.49819 10.5 21.5z"
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

export default MForecastcloudMoonTear;
