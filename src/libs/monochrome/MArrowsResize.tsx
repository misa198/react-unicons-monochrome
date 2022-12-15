import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsResize: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M5.5,15.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39027-0.39065-1.02319-0.00038-1.41368c0.00013-0.00013,0.00026-0.00026,0.00038-0.00038l2.5-2.5c0.39296-0.38799,1.02604-0.38396,1.41403,0.009C6.59154,9.19138,6.59153,9.81758,6.207,10.207L4.41406,12l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C6.01936,15.39465,5.76511,15.49996,5.5,15.5z M18.5,15.5c-0.55228-0.00012-0.9999-0.44793-0.99979-1.00021c0.00006-0.26509,0.10537-0.51931,0.29279-0.70679L19.58594,12l-1.793-1.793c-0.38801-0.39294-0.38402-1.02602,0.00892-1.41403C18.19131,8.40841,18.81757,8.40842,19.207,8.793l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368c-0.00013,0.00013-0.00026,0.00026-0.00038,0.00038l-2.5,2.5C19.0197,15.39489,18.76526,15.50032,18.5,15.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M12,17c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V8c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v8c0.00031,0.55197-0.44689,0.99969-0.99886,1C12.00076,17,12.00038,17,12,17z"
      ></path>
      <path
        className="uim-primary"
        d="M11 11H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h8V11zM21 11h-8v2h8c.55231 0 1-.44769 1-1S21.55231 11 21 11z"
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

export default MArrowsResize;
