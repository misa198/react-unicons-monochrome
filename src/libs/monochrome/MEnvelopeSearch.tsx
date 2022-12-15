import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MEnvelopeSearch: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M21.2,7.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,15.29398,9.38198,15.29199,9.38,15.29L1.8,7.71C2.29464,6.66676,3.34544,6.00126,4.5,6h14C19.65456,6.00126,20.70536,6.66676,21.2,7.71z"
      ></path>
      <path
        className="uim-quaternary"
        d="M21.20001,7.71002L13.62,15.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,15.29401,9.38196,15.29199,9.38,15.28998L1.79999,7.71002C1.60345,8.11169,1.50085,8.5528,1.5,9v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V9C21.49915,8.5528,21.39655,8.11169,21.20001,7.71002z"
      ></path>
      <path
        className="uim-primary"
        d="M16.81348,10.62744c-1.14458,0.00302-2.24279-0.45201-3.04981-1.26367l0,0c-1.68393-1.6845-1.68348-4.41515,0.00102-6.09908s4.41515-1.68348,6.09908,0.00102c1.68393,1.6845,1.68348,4.41515-0.00102,6.09908C19.05394,10.17332,17.95711,10.6275,16.81348,10.62744z M16.81348,4C15.53569,4.00009,14.49991,5.03601,14.5,6.3138c0.00004,0.6136,0.24383,1.20205,0.67773,1.63591l0,0c0.91536,0.87452,2.35664,0.87452,3.272,0c0.90353-0.90359,0.90348-2.36856-0.00011-3.27209C18.01568,4.24371,17.42714,3.99996,16.81348,4z"
      ></path>
      <path
        className="uim-primary"
        d="M21.5,12c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.34329-2.34323c-0.39048-0.39048-0.39048-1.02358,0-1.41406s1.02358-0.39048,1.41406,0L22.207,10.293c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C22.01931,11.89463,21.76509,11.99994,21.5,12z"
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

export default MEnvelopeSearch;
