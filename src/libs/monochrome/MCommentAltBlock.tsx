import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentAltBlock: React.FC<Props> = ({
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
      <circle cx="7" cy="7" r="4" className="uim-quaternary"></circle>
      <path
        className="uim-tertiary"
        d="M19,6h-8.14142C10.94183,6.32141,11,6.65259,11,7c0,2.20917-1.79083,4-4,4c-0.34741,0-0.67859-0.05817-1-0.14142V16c0.00183,1.65613,1.34387,2.99817,3,3h8.35889l2.96289,2.73438C20.50623,21.9054,20.74847,22.00031,21,22c0.55219-0.00018,0.99982-0.44781,1-1V9C21.99817,7.34387,20.65613,6.00183,19,6z"
      ></path>
      <path
        className="uim-primary"
        d="M10.53564,3.46484C8.58323,1.51252,5.41781,1.51259,3.46549,3.46501s-1.95225,5.11783,0.00017,7.07015s5.11783,1.95225,7.07015-0.00017C11.47332,9.59744,12,8.32587,12,7C11.99922,5.6742,11.47259,4.40285,10.53564,3.46484z M4.87842,4.87891c0.89454-0.90179,2.26409-1.13369,3.40564-0.57666L4.3,8.28564C3.74304,7.14341,3.97568,5.77329,4.87843,4.87891H4.87842z M9.12158,9.12109c-0.89915,0.8929-2.26272,1.12378-3.4057,0.57666L9.7,5.71436c0.55696,1.14223,0.32432,2.51235-0.57843,3.40673H9.12158z"
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

export default MCommentAltBlock;
