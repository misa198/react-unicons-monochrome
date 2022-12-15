import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMegaphone: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.00031,18.00069C20.99972,18.55318,20.55137,19.00058,19.99888,19c-0.31417-0.00033-0.60994-0.14824-0.79868-0.39941C17.4961,16.33945,14.83137,15.0069,12,15H8c-0.55197,0.00031-0.99969-0.44689-1-0.99886C7,14.00076,7,14.00038,7,14V8C6.99969,7.44803,7.44689,7.00031,7.99886,7C7.99924,7,7.99962,7,8,7h4c2.83137-0.0069,5.4961-1.33945,7.2002-3.60059c0.33177-0.44173,0.95882-0.53086,1.40055-0.19909c0.25065,0.18826,0.39855,0.48313,0.39956,0.79661C21.00106,4.2071,21.00057,17.79129,21.00031,18.00069z"
      ></path>
      <path
        className="uim-primary"
        d="M9,15H6c-1.65685,0-3-1.34315-3-3v-2c0-1.65685,1.34315-3,3-3h3V15z M20,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v16c0.00031,0.55197-0.44689,0.99969-0.99886,1C20.00076,20,20.00038,20,20,20z"
      ></path>
      <path
        className="uim-quaternary"
        d="M9,15H8H6.48383l-2.40277,5.60645C4.02747,20.7312,3.99994,20.8656,4,21.00134C4.00037,21.55328,4.44812,22.00037,5,22h4c0.40021,0.00024,0.76184-0.2384,0.91901-0.60645l2.72339-6.35449C12.42865,15.02325,12.216,15.00055,12,15H9z"
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

export default MMegaphone;
