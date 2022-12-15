import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentBlock: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M17,11c-2.20917,0-4-1.79083-4-4c0-0.9563,0.34943-1.82233,0.90924-2.5105c-2.81195-0.95862-6.03625-0.51385-8.52917,1.47827C1.4967,9.07104,0.86432,14.73486,3.96759,18.61816l-1.6748,1.6748c-0.18756,0.18756-0.29291,0.44189-0.29291,0.70715C1.99988,21.55231,2.44757,22,2.99976,22h8c2.04193-0.00018,4.02307-0.69464,5.61823-1.9693c3.04816-2.43585,4.08289-6.44678,2.89069-9.93842C18.82074,10.65118,17.95544,11,17,11z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20.54,10.54c-1.67996,1.67724-4.3067,1.94446-6.29,0.63989h-0.01c-0.56209-0.37532-1.04463-0.85783-1.42-1.41989c-1.52301-2.30983-0.88516-5.41696,1.42467-6.93996c1.67298-1.10309,3.84236-1.10308,5.51533,0.00002C20.3221,3.1954,20.80464,3.67792,21.18,4.24v0.01C22.48452,6.23333,22.21726,8.86006,20.54,10.54z"
      ></path>
      <path
        className="uim-primary"
        d="M20.53516,3.46484c-1.95242-1.95241-5.1179-1.95241-7.07032,0s-1.95241,5.1179,0,7.07032s5.1179,1.95241,7.07032,0S22.48758,5.41725,20.53516,3.46484z M14.87891,4.87891c0.89303-0.90208,2.26124-1.13556,3.40289-0.58069l-3.98358,3.98352C13.74335,7.14011,13.97684,5.77191,14.87891,4.87891z M19.12109,9.12109c-0.90692,0.8619-2.24551,1.08864-3.38568,0.57349l3.96985-3.96985C20.25576,6.86544,20.02108,8.22986,19.12109,9.12109z"
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

export default MCommentBlock;
