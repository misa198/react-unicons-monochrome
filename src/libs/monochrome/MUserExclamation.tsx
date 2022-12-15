import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUserExclamation: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M19.75,10.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C19.75035,10.5,19.75017,10.5,19.75,10.5z M19.75,13.5c-0.13081-0.00156-0.26004-0.02876-0.38037-0.08008c-0.12103-0.05071-0.23249-0.12173-0.32959-0.21c-0.18819-0.18806-0.29272-0.44397-0.29-0.71c0-0.55229,0.44772-1,1-1s1,0.44771,1,1c0.00341,0.13115-0.02402,0.26127-0.08008,0.37988c-0.051,0.12102-0.12199,0.2326-0.21,0.33008c-0.09727,0.08828-0.2089,0.1593-0.33008,0.21C20.00971,13.47116,19.88065,13.49838,19.75,13.5z"
      ></path>
      <path
        className="uim-quaternary"
        d="M11.25,13.5c-2.76142,0-5-2.23858-5-5s2.23858-5,5-5s5,2.23858,5,5C16.24676,11.26008,14.01008,13.49676,11.25,13.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14.55652,12.22144C13.67371,13.00647,12.52399,13.49854,11.25,13.5c-1.27496,0-2.42566-0.49194-3.30884-1.27747C5.17603,13.48206,3.25,16.26324,3.25,19.5c0,0.00018,0,0.00037,0,0.00055c0.00012,0.55212,0.44788,0.99957,1,0.99945h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C19.25,16.26233,17.32294,13.48047,14.55652,12.22144z"
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

export default MUserExclamation;
