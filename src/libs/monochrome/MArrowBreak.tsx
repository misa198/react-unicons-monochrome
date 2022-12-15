import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MArrowBreak: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01227-0.38202,1.40125,0L12,19.58594l1.793-1.793c0.39294-0.38801,1.02602-0.38402,1.41403,0.00892c0.38456,0.38945,0.38455,1.01571-0.00003,1.40514l-2.5,2.5C12.51971,21.89485,12.26527,22.0003,12,22z M14.5,6.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L12,4.41406L10.207,6.207C9.81298,6.59391,9.17991,6.58816,8.793,6.19414c-0.38195-0.38896-0.38195-1.01218,0-1.40114l2.5-2.5c0.39027-0.39048,1.02319-0.39065,1.41368-0.00038c0.00013,0.00013,0.00026,0.00026,0.00038,0.00038l2.5,2.5c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C15.01936,6.39465,14.76511,6.49996,14.5,6.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17,15H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h10c0.55228,0,1,0.44771,1,1S17.55228,15,17,15z M17,11H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h10c0.55228,0,1,0.44771,1,1S17.55228,11,17,11z"
      ></path>
      <path
        className="uim-primary"
        d="M13 9V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v6H13zM11 15v6c0 .00037 0 .00073 0 .00116C11.00031 21.5531 11.44806 22.00031 12 22c.00037 0 .00073 0 .00116 0C12.5531 21.99969 13.00031 21.55194 13 21v-6H11z"
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

export default MArrowBreak;
