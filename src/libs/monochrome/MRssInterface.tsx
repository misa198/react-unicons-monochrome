import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MRssInterface: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M8,8h8c1.10457,0,2,0.89543,2,2v4c0,1.10457-0.89543,2-2,2H8c-1.10457,0-2-0.89543-2-2v-4C6,8.89543,6.89543,8,8,8z"
      ></path>
      <path
        className="uim-quaternary"
        d="M19,6H5C4.44788,6.00037,4.00037,6.44788,4,7c0,0.55231-0.44769,1-1,1S2,7.55231,2,7v10c0,1.65686,1.34314,3,3,3h10c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1h4c0.55212-0.00037,0.99963-0.44788,1-1V7C19.99963,6.44788,19.55212,6.00037,19,6z M18,14c0,1.10455-0.89545,2-2,2H8c-1.10455,0-2-0.89545-2-2v-4c0-1.10455,0.89545-2,2-2h8c1.10455,0,2,0.89545,2,2V14z"
      ></path>
      <circle cx="3" cy="19" r="1" className="uim-primary"></circle>
      <path
        className="uim-primary"
        d="M7,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886C6,19.00076,6,19.00038,6,19c-0.00181-1.65611-1.34389-2.99819-3-3c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1c2.76008,0.00324,4.99676,2.23992,5,5c0.00031,0.55197-0.44689,0.99969-0.99886,1C7.00076,20,7.00038,20,7,20z"
      ></path>
      <path
        className="uim-primary"
        d="M11,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114c-0.00467-3.86406-3.13594-6.99533-7-7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1c4.96831,0.00542,8.99458,4.03169,9,9c0.00031,0.55197-0.44689,0.99969-0.99886,1C11.00076,20,11.00038,20,11,20z"
      ></path>
      <path
        className="uim-tertiary"
        d="M19,20h-4c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1h4c0.55213-0.00037,0.99963-0.44787,1-1V7c-0.00037-0.55213-0.44787-0.99963-1-1H5C4.44787,6.00037,4.00037,6.44787,4,7c0,0.55228-0.44772,1-1,1S2,7.55228,2,7c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v10C21.99819,18.65611,20.65611,19.99819,19,20z"
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

export default MRssInterface;
