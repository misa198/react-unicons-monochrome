import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MScalingLeft: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21,22h-4c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h3v-3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,22,21.00017,22,21,22z M3,8C2.44786,8.00014,2.00014,7.55266,2,7.00052C2,7.00035,2,7.00017,2,7V3C1.99986,2.44786,2.44734,2.00014,2.99948,2C2.99965,2,2.99983,2,3,2h4c0.55228,0,1,0.44772,1,1S7.55228,4,7,4H4v3c0.00014,0.55214-0.44734,0.99986-0.99948,1C3.00035,8,3.00017,8,3,8z"
      ></path>
      <path
        className="uim-tertiary"
        d="M9.17139,15.82812C8.6191,15.828,8.17148,15.38019,8.1716,14.82791c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l5.65722-5.65625c0.39048-0.39048,1.02358-0.39048,1.41406,0.00001c0.39048,0.39048,0.39048,1.02358,0,1.41406l-5.65725,5.65622C9.69112,15.72301,9.43666,15.82844,9.17139,15.82812z"
      ></path>
      <path
        className="uim-primary"
        d="M12.00006 10.58606L3.70697 2.29303c-.38892-.38208-1.01227-.38208-1.40125 0-.39398.3869-.39966 1.02002-.0127 1.41394l8.29291 8.29291L12.00006 10.58606zM21.70703 20.29297l-8.29291-8.29285L12 13.41394l8.29303 8.29303C20.48029 21.89484 20.73474 22.00031 21 22c.26508-.00006.51929-.10535.70679-.29279C22.09735 21.31677 22.09747 20.68359 21.70703 20.29297z"
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

export default MScalingLeft;
