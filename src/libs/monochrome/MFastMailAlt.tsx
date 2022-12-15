import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFastMailAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M21.20508,8.5h-3c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h3c0.55228,0,1,0.44772,1,1S21.75736,8.5,21.20508,8.5z M21.20508,12.5h-2c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55228,0,1,0.44771,1,1S21.75736,12.5,21.20508,12.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M2.49684,7.57129C3.06651,6.89146,3.90822,6.49912,4.79518,6.5h7.938c1.08858-0.00034,2.09142,0.59067,2.61847,1.54315L11.447,12.459c-1.05798,1.21953-2.89511,1.37375-4.1416,0.34766l-5.32049-4.311C2.09922,8.15954,2.27258,7.84651,2.49684,7.57129z"
      ></path>
      <path
        className="uim-quaternary"
        d="M15.30829 7.98492c-.11719-.1955-.24945-.38049-.40497-.54431C15.0575 7.60364 15.19147 7.78754 15.30829 7.98492zM15.30829 7.98492c.01276.02124.02667.04169.03888.06329l.00446-.00507C15.33972 8.02161 15.3208 8.00604 15.30829 7.98492zM15.68774 8.979c-.05902-.3371-.17993-.64709-.34058-.93079l-2.13873 2.41876c-.00006.00006-.00006.00006-.00012.00012l-1.76129 1.99188c-1.05798 1.21954-2.89514 1.37378-4.1416.34766l-5.3205-4.31097c.00024-.00079.00079-.00153.00104-.00232l-.00275-.0022c-.17493.47418-.23682.9953-.14264 1.52936L2.72241 15.021c.25098 1.43469 1.49762 2.4809 2.9541 2.479h7.93848c.17493.00006.34955-.0152.52185-.04559 1.63135-.28778 2.72052-1.84357 2.43274-3.47491L15.68774 8.979z"
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

export default MFastMailAlt;
