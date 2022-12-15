import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MMoneyWithdrawal: React.FC<Props> = ({
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
        d="M5,6v12.17993c0.51947-0.19165,1.08258-0.23236,1.62427-0.11743c1.24323,0.26715,2.18445,1.28693,2.35132,2.54755C9.03888,21.0791,8.98541,21.55652,8.82001,22h6.35999c-0.16541-0.44342-0.21887-0.9209-0.15558-1.38995c0.16687-1.26062,1.10803-2.2804,2.35132-2.54755c0.54169-0.11493,1.1048-0.07422,1.62427,0.11743V6H5z"
      ></path>
      <path
        className="uim-primary"
        d="M21,2H3C1.89545,2,1,2.89545,1,4v6c0,1.10455,0.89545,2,2,2h2V6h14v6h2c1.10455,0,2-0.89545,2-2V4C23,2.89545,22.10455,2,21,2z"
      ></path>
      <path
        className="uim-primary"
        d="M12,15c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C14.99819,13.65611,13.65611,14.99819,12,15z"
      ></path>
      <path
        className="uim-quaternary"
        d="M6.62425,18.06248C6.0826,17.94756,5.51948,17.98828,5,18.17993V20c0.00323,1.10323,0.89677,1.99677,2,2h1.82c0.16544-0.44345,0.21888-0.92088,0.15559-1.38993C8.80871,19.34941,7.86752,18.32967,6.62425,18.06248z M17.37575,18.06248c-1.24328,0.26718-2.18447,1.28693-2.35135,2.54759C14.96111,21.07913,15.01456,21.55655,15.18,22H17c1.10323-0.00323,1.99677-0.89677,2-2v-1.82007C18.48052,17.98828,17.9174,17.94756,17.37575,18.06248z"
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

export default MMoneyWithdrawal;
