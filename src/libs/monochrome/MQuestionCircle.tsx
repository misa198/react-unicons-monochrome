import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MQuestionCircle: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M15 10A3.0001 3.0001 0 0 0 9.40234 8.499a.99981.99981 0 0 0 1.73047 1.002A1.00022 1.00022 0 1 1 12 11a.99943.99943 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18433A2.99487 2.99487 0 0 0 15 10zM12 17a.9994.9994 0 0 1-.37988-.08008 1.14718 1.14718 0 0 1-.33008-.21 1.16044 1.16044 0 0 1-.21-.33008A.83154.83154 0 0 1 11 16a1.39038 1.39038 0 0 1 .01953-.2002.65026.65026 0 0 1 .06055-.17968.74157.74157 0 0 1 .08984-.18067A1.61105 1.61105 0 0 1 11.29 15.29a1.04667 1.04667 0 0 1 1.41992 0A1.0321 1.0321 0 0 1 13 16a.9994.9994 0 0 1-.08008.37988.90087.90087 0 0 1-.54.54A.9994.9994 0 0 1 12 17z"
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

export default MQuestionCircle;
