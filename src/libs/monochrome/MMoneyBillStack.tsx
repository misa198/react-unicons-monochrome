import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoneyBillStack: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M20,15.00021H4c-1.65611-0.00181-2.99819-1.34389-3-3v-8c0.00181-1.65611,1.34389-2.99819,3-3h16c1.65611,0.00181,2.99819,1.34389,3,3v8C22.99819,13.65631,21.65611,14.9984,20,15.00021z"
      ></path>
      <circle cx="6" cy="8" r="1" className="uim-primary"></circle>
      <circle cx="18" cy="8" r="1" className="uim-primary"></circle>
      <path className="uim-primary" d="M16,15.00021H8v-14h8V15.00021z"></path>
      <rect width="8" height="4" x="8" y="15" className="uim-tertiary"></rect>
      <rect width="8" height="4" x="8" y="19" className="uim-secondary"></rect>
      <path
        className="uim-quaternary"
        d="M4 15.00018c-1.65613-.00177-2.99817-1.34387-3-3v4c.00183 1.65613 1.34387 2.99823 3 3h4v-4H4zM20 15.00018h-4v4h4c1.65613-.00177 2.99817-1.34387 3-3v-4C22.99817 13.65631 21.65613 14.99841 20 15.00018z"
      ></path>
      <g>
        <path
          className="uim-tertiary"
          d="M20 19.00018h-4v4h4c1.65613-.00177 2.99817-1.34387 3-3v-4C22.99817 17.65631 21.65613 18.99841 20 19.00018zM4 19.00018c-1.65613-.00177-2.99817-1.34387-3-3v4c.00183 1.65613 1.34387 2.99823 3 3h4v-4H4z"
        ></path>
      </g>
    </svg>,
    'image/svg+xml',
  );
  svgElement.documentElement.classList.add('unicons-monochrome');
  svgElement.documentElement.style.width = size + 'px';
  svgElement.documentElement.style.height = size + 'px';
  svgElement.documentElement.style.color = color;

  return <>{svgElement.documentElement}</>;
};

export default MMoneyBillStack;
