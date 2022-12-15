import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MStore: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18,12c-1.14877,0.00044-2.242-0.49422-3-1.35742c-1.45604,1.65685-3.97954,1.81964-5.6364,0.3636C9.23472,10.89292,9.11326,10.77147,9,10.64258c-1.4584,1.65792-3.98467,1.81965-5.64259,0.36125C2.49403,10.24435,1.99945,9.14989,2,8c0.00013-0.12709,0.02432-0.253,0.07129-0.37109l2-5C4.2233,2.24923,4.59102,2.00021,5,2h14c0.40899,0.00021,0.7767,0.24922,0.92871,0.62891l2,5C21.97568,7.747,21.99987,7.87291,22,8C21.99765,10.20816,20.20816,11.99765,18,12z"
      ></path>
      <path
        className="uim-quaternary"
        d="M18,12c-1.14874,0.00043-2.242-0.4942-3-1.35742c-1.45605,1.65686-3.97955,1.81964-5.63641,0.36359C9.23474,10.89294,9.11328,10.77148,9,10.64258c-1.28052,1.45569-3.38354,1.75616-5,0.82098V21c0,0.00018,0,0.00037,0,0.00055C4.00012,21.55267,4.44788,22.00012,5,22h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1v-9.55658C19.40967,11.78748,18.73242,11.99921,18,12z"
      ></path>
      <path
        className="uim-primary"
        d="M15,22H9v-7c0-0.55229,0.44771-1,1-1h4c0.55229,0,1,0.44771,1,1V22z"
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

export default MStore;
