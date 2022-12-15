import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudBlock: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="16.5" r="3" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M18.42926,7.75421c-1.52637-3.54962-5.64124-5.18976-9.1908-3.66339c-2.2785,0.97974-3.86798,3.09265-4.17767,5.55353c-2.14478,0.51538-3.46564,2.67188-2.95026,4.81665C2.54248,16.25842,4.15143,17.52454,6,17.52179h3.19049C9.07391,17.20154,9,16.86053,9,16.5c0-1.65686,1.34314-3,3-3s3,1.34314,3,3c0,0.36053-0.07391,0.70154-0.19049,1.02179H17c2.75391,0.00751,4.99243-2.21887,5-4.97278C22.00604,10.33533,20.55188,8.38269,18.42926,7.75421z"
      ></path>
      <path
        className="uim-primary"
        d="M12,20.5c-2.2089,0.00023-3.99976-1.79024-3.99999-3.99915c-0.00011-1.06111,0.42144-2.07877,1.17187-2.82897c1.58239-1.51172,4.07385-1.51172,5.65624,0c1.56193,1.56111,1.56259,4.09283,0.00148,5.65476c-0.00049,0.00049-0.00099,0.00099-0.00148,0.00148l0,0C14.07987,20.08095,13.06142,20.50296,12,20.5z M12,14.5c-1.10445-0.00012-1.99988,0.89511-2,1.99956c-0.00006,0.53056,0.21072,1.0394,0.58594,1.41451c0.79119,0.75586,2.03693,0.75586,2.82812,0l0,0c0.78096-0.78113,0.78083-2.04746-0.00031-2.82843C13.03877,14.71073,12.53025,14.50008,12,14.5z"
      ></path>
      <path
        className="uim-primary"
        d="M9.87891,19.62109c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679l4.24218-4.24218c0.39048-0.39048,1.02358-0.39048,1.41406,0s0.39048,1.02358,0,1.41406l-4.24218,4.24218C10.39866,19.516,10.14419,19.62142,9.87891,19.62109z"
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

export default MCloudBlock;
