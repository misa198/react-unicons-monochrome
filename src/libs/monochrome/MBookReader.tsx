import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBookReader: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,9.69531c-2.13012-0.00027-3.85671-1.7273-3.85644-3.85742c0.00027-2.13012,1.7273-3.85671,3.85742-3.85644s3.85671,1.7273,3.85644,3.85742C15.85456,7.96792,14.12905,9.69299,12,9.69531z"
      ></path>
      <path
        className="uim-tertiary"
        d="M6,9.98c-0.73157,0.0029-1.46132,0.0732-2.18,0.21C3.34555,10.27524,3.00021,10.68796,3,11.17v8.25c-0.00156,0.29767,0.13059,0.58032,0.36,0.77c0.22763,0.19045,0.52761,0.27094,0.82,0.22c0.5997-0.11681,1.20904-0.17708,1.82-0.18c1.93705-0.00197,3.83207,0.56476,5.45,1.62988C11.61587,21.96114,11.8057,22.0164,12,22.02V11.6001C10.17893,10.53785,8.10824,9.97873,6,9.98z"
      ></path>
      <path
        className="uim-quaternary"
        d="M20.18,10.18994c-2.80746-0.53712-5.71444-0.03598-8.18,1.41016V22.02c0.1943-0.00361,0.38414-0.05889,0.55-0.16016c1.61793-1.06511,3.51295-1.63182,5.45-1.62984c0.61096,0.0029,1.2203,0.06314,1.82,0.17993c0.29239,0.05094,0.59237-0.02954,0.82-0.22c0.22941-0.18968,0.36156-0.47233,0.36-0.77v-8.25C20.99978,10.68789,20.65444,10.27518,20.18,10.18994z"
      ></path>
      <path
        className="uim-primary"
        d="M15.06744,8.53717c-0.0741-0.04419-0.15375-0.0683-0.22888-0.10895C14.13324,9.20068,13.12811,9.69409,12,9.69531C10.87262,9.69519,9.86786,9.20294,9.16272,8.4317c-0.73438,0.39648-1.40228,0.93152-1.93024,1.62927C8.90875,10.23492,10.53613,10.74622,12,11.6001c1.4671-0.86053,3.09161-1.37787,4.75732-1.54956C16.29584,9.44507,15.72467,8.92944,15.06744,8.53717z"
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

export default MBookReader;
