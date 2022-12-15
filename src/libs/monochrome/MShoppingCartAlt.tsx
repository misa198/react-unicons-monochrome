import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MShoppingCartAlt: React.FC<Props> = ({
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
        className="uim-tertiary"
        d="M9.5,22c-1.10457,0-2-0.89543-2-2s0.89543-2,2-2s2,0.89543,2,2C11.49879,21.10407,10.60407,21.99879,9.5,22z M17.5,22c-1.10457,0-2-0.89543-2-2s0.89543-2,2-2s2,0.89543,2,2C19.49879,21.10407,18.60407,21.99879,17.5,22z"
      ></path>
      <path
        className="uim-primary"
        d="M8.18018,14c-0.45252,0.00001-0.84862-0.30391-0.96577-0.741L4.73291,4L3.50046,4.00054C2.94829,4.00078,2.50048,3.55335,2.50024,3.00118c0-0.00006,0-0.00012,0-0.00018l0,0c-0.00012-0.55216,0.4474-0.99988,0.99956-1c0.00007,0,0.00015,0,0.00022,0h2c0.45251,0,0.84861,0.30392,0.96576,0.741L8.94727,12H18.5c1.65685,0,3,1.34315,3,3s-1.34315,3-3,3h-13c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h13c0.55228,0,1-0.44771,1-1s-0.44772-1-1-1H8.18018z"
      ></path>
      <path
        className="uim-quaternary"
        d="M8.94727,12H18.5c0.37858,0.00134,0.75343,0.07492,1.10443,0.2168l1.86139-6.958c0.14341-0.53285-0.1723-1.08106-0.70515-1.22447C20.67567,4.01145,20.58802,3.99991,20.5,4H6.803L8.94727,12z"
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

export default MShoppingCartAlt;
