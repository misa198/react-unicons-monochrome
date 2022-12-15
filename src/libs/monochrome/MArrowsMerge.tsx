import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowsMerge: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M7.5,15.5c-0.55228-0.00012-0.9999-0.44793-0.99979-1.00021C6.50027,14.2347,6.60558,13.98048,6.793,13.793L8.58594,12L6.793,10.207C6.40609,9.81298,6.41184,9.17991,6.80586,8.793c0.38896-0.38195,1.01218-0.38195,1.40114,0l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368c-0.00013,0.00013-0.00026,0.00026-0.00038,0.00038l-2.5,2.5C8.0197,15.39489,7.76526,15.50032,7.5,15.5z M16.5,15.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39027-0.39065-1.02319-0.00038-1.41368c0.00013-0.00013,0.00026-0.00026,0.00038-0.00038l2.5-2.5c0.39294-0.38801,1.02602-0.38402,1.41403,0.00892c0.38457,0.38945,0.38455,1.01571-0.00003,1.40514L15.41406,12l1.793,1.793c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C17.01936,15.39465,16.76511,15.49996,16.5,15.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M3,18c-0.55197,0.00031-0.99969-0.44689-1-0.99886C2,17.00076,2,17.00038,2,17V7c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v10c0.00031,0.55197-0.44689,0.99969-0.99886,1C3.00076,18,3.00038,18,3,18z M21,18c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114V7c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v10c0.00031,0.55197-0.44689,0.99969-0.99886,1C21.00076,18,21.00038,18,21,18z"
      ></path>
      <path
        className="uim-primary"
        d="M10 11H4v2h6c.55231 0 1-.44769 1-1S10.55231 11 10 11zM20 11h-6c-.55231 0-1 .44769-1 1s.44769 1 1 1h6V11z"
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

export default MArrowsMerge;
