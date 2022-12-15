import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLockOpenAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M8 11c-.55197.00031-.99969-.44689-1-.99886C7 10.00076 7 10.00038 7 10V7c.00123-2.76266 2.24181-5.00124 5.00447-5.00001 1.32241.00059 2.59079.5248 3.52776 1.45801.63004.63581 1.08081 1.42686 1.30664 2.293.13834.53482-.18307 1.08051-.71789 1.21885-.53482.13834-1.08051-.18307-1.21885-.71789-.00025-.00099-.00051-.00197-.00076-.00296-.13577-.52074-.40662-.9964-.78516-1.3789-1.17766-1.16739-3.07871-1.15906-4.24609.01861C9.31333 5.4504 9.00065 6.2091 9 7v3c.00031.55197-.44689.99969-.99886 1C8.00076 11 8.00038 11 8 11zM13.5 14.5c0-.82843-.67157-1.5-1.5-1.5s-1.5.67157-1.5 1.5c0 .4425.19519.83618.5 1.11072V17c0 .00037 0 .00073 0 .00116C11.00031 17.5531 11.44806 18.00031 12 18c.00037 0 .00073 0 .00116 0C12.5531 17.99969 13.00031 17.55194 13 17v-1.38928C13.30481 15.33618 13.5 14.9425 13.5 14.5z"
      ></path>
      <path
        className="uim-primary"
        d="M17,9H7c-1.65686,0-3,1.34314-3,3v7c0,1.65686,1.34314,3,3,3h10c1.65686,0,3-1.34314,3-3v-7C20,10.34314,18.65686,9,17,9z M13,15.61072V17c0.00031,0.55194-0.4469,0.99969-0.99884,1C12.00073,18,12.00037,18,12,18c-0.55194,0.00031-0.99969-0.4469-1-0.99884c0-0.00043,0-0.00079,0-0.00116v-1.38928c-0.30481-0.27454-0.5-0.66821-0.5-1.11072c0-0.82843,0.67157-1.5,1.5-1.5s1.5,0.67157,1.5,1.5C13.5,14.9425,13.30481,15.33618,13,15.61072z"
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

export default MLockOpenAlt;
