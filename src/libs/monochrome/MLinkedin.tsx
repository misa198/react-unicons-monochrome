import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLinkedin: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <rect
        width="3.002"
        height="9.031"
        x="5.086"
        y="9.711"
        className="uim-tertiary"
      ></rect>
      <path
        className="uim-tertiary"
        d="M6.58716,8.478H6.56744C5.70491,8.53002,4.96352,7.87297,4.9115,7.01043C4.85948,6.1479,5.51653,5.40651,6.37907,5.35449c0.07597-0.00458,0.15217-0.00361,0.22799,0.00289C7.46923,5.29494,8.21878,5.94323,8.28123,6.8054S7.69539,8.41712,6.83322,8.47957C6.75129,8.4855,6.66901,8.48498,6.58716,8.478z M18.91168,18.74194h-3.00152v-4.83081c0-1.21423-0.43464-2.04229-1.52057-2.04229c-0.69377,0.00404-1.31022,0.44347-1.54029,1.098c-0.07687,0.23614-0.11037,0.48423-0.09887,0.7323v5.04278H9.7489c0-0.00268,0.03937-8.18371,0.00031-9.03082h3.00152v1.28c0.55314-0.96274,1.59594-1.5378,2.70532-1.49188c1.97492,0,3.45563,1.29077,3.45563,4.06463V18.74194z"
      ></path>
      <path
        className="uim-primary"
        d="M20.46814,2H3.53186C2.73077,1.99036,2.0733,2.63159,2.06293,3.43268v17.13513C2.07336,21.36884,2.73083,22.00989,3.53186,22h16.93628c0.80115,0.00995,1.45874-0.63129,1.46893-1.43243V3.43268C21.92682,2.63153,21.26929,1.99023,20.46814,2z M8.08801,18.742H5.086V9.711h3.00201V18.742z M6.83325,8.47955C6.75128,8.48547,6.66901,8.48499,6.58716,8.47803H6.56744C5.7049,8.53003,4.9635,7.87299,4.9115,7.01044s0.60504-1.60394,1.46759-1.65594c0.07593-0.00458,0.15216-0.0036,0.22797,0.00287c0.86218-0.06244,1.61169,0.58588,1.67419,1.44806C8.34369,7.66754,7.69537,8.41711,6.83325,8.47955z M18.91168,18.74194h-3.00153v-4.83081c0-1.21423-0.43463-2.0423-1.52057-2.0423c-0.69379,0.00403-1.31024,0.44348-1.54028,1.09802c-0.07684,0.23615-0.11035,0.48419-0.09888,0.7323v5.04279H9.7489c0-0.00269,0.03937-8.18372,0.00031-9.03082h3.00153v1.27997c0.55316-0.96271,1.59595-1.53778,2.70532-1.49188c1.97491,0,3.45563,1.29077,3.45563,4.06464V18.74194z"
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

export default MLinkedin;
