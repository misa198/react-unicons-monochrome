import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MBellSchool: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M14.44574,14.388C13.16272,15.97784,11.2016,16.99744,9,17c-2.20288,0-4.16547-1.01965-5.44867-2.61041C2.63123,14.90204,2.00122,15.87231,2,17v1c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3v-1C15.99878,15.87115,15.36737,14.90002,14.44574,14.388z"
      ></path>
      <circle cx="9" cy="10" r="1" className="uim-tertiary"></circle>
      <path
        className="uim-quaternary"
        d="M9,3c-3.86597,0-7,3.13403-7,7s3.13403,7,7,7c3.86414-0.00452,6.99548-3.13586,7-7C16,6.13403,12.86597,3,9,3z M9,11c-0.55231,0-1-0.44769-1-1s0.44769-1,1-1s1,0.44769,1,1S9.55231,11,9,11z"
      ></path>
      <circle cx="19" cy="8" r="2" className="uim-tertiary"></circle>
      <path
        className="uim-primary"
        d="M20.57904,9.21448C20.21338,9.68903,19.64545,10,19,10c-0.0954,0-0.18671-0.01514-0.27856-0.02808c0.13104,0.36145,0.22546,0.73676,0.26038,1.12396c0.19678,2.18048-1.20099,4.13263-3.22974,4.71613C15.90997,16.17657,15.99951,16.57751,16,17v0.81451c0.9679-0.22864,1.87549-0.67395,2.64795-1.31342C20.83978,14.68658,21.52844,11.73621,20.57904,9.21448z"
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

export default MBellSchool;
