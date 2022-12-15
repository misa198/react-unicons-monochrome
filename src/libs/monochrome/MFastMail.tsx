import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MFastMail: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5.79492,8.5h-3c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h3c0.55228,0,1,0.44772,1,1S6.3472,8.5,5.79492,8.5z M4.79492,12.5h-2c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55228,0,1,0.44771,1,1S5.3472,12.5,4.79492,12.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M21.50293,7.57129C20.93326,6.89146,20.09155,6.49912,19.20459,6.5h-7.938c-1.08858-0.00034-2.09141,0.59067-2.61846,1.54315l3.9046,4.41583c1.05799,1.21953,2.89512,1.37374,4.14161,0.34766l5.32049-4.311C21.90053,8.15953,21.72718,7.84651,21.50293,7.57129z"
      ></path>
      <polygon
        className="uim-quaternary"
        points="8.651 8.04 8.648 8.043 8.653 8.048 8.655 8.044"
      ></polygon>
      <path
        className="uim-quaternary"
        d="M21.82397 8.06458c.07587.13806.12445.29089.17981.44006l.01105-.00897C21.96405 8.34631 21.8974 8.20355 21.82397 8.06458zM16.69434 12.80664c-1.24646 1.02606-3.08362.87189-4.1416-.34766L8.65259 8.04822C8.49194 8.33191 8.37103 8.64191 8.31201 8.979l-.88184 5.00049c-.0304.1723-.04565.34686-.04559.52185.00043 1.65649 1.34363 2.99908 3.00018 2.99866h7.93848c1.45648.00189 2.70312-1.04431 2.9541-2.479l.88184-5.00049c.0304-.1723.04565-.34686.04559-.52185-.00006-.35382-.0849-.68103-.20099-.99402L16.69434 12.80664z"
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

export default MFastMail;
