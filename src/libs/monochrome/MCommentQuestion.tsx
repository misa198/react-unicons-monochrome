import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCommentQuestion: React.FC<Props> = ({
  size = 24,
  color = 'inherit',
}) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M10.99978,22h-8a.99991.99991,0,0,1-.707-1.707l1.67481-1.67481A9.00076,9.00076,0,1,1,10.99978,22Z"
      ></path>
      <path
        className="uim-primary"
        d="M17 9.00391a1 1 0 0 1 0-2 1 1 0 1 0-.86719-1.499.9998.9998 0 0 1-1.73047-1.00195A3.00005 3.00005 0 1 1 17 9.00391zM17 12a.99018.99018 0 0 1-.71-.29 1.03134 1.03134 0 0 1-.2207-.32031A1.00469 1.00469 0 0 1 16 11a.83154.83154 0 0 1 .08008-.37988.98568.98568 0 0 1 .21-.32032 1.77391 1.77391 0 0 1 .14941-.12988c.06055-.03027.12012-.06054.18067-.08984.05957-.02051.12011-.04.17968-.06055a.95515.95515 0 0 1 .58008.06055 1.06053 1.06053 0 0 1 .54.54A.8444.8444 0 0 1 18 11a1.00694 1.00694 0 0 1-1 1z"
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

export default MCommentQuestion;
