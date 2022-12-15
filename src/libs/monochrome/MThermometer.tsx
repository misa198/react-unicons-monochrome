import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MThermometer: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M19.11578,4.87842c-1.17102-1.16785-3.06628-1.16785-4.23737,0l-7.8764,7.9248l-0.00006,4.19482h4.19482l7.9248-7.87646C20.29169,7.94824,20.28912,6.04852,19.11578,4.87842z"
      ></path>
      <path
        className="uim-primary"
        d="M10,15c-0.55229-0.00012-0.9999-0.44793-0.99979-1.00021C9.00027,13.7347,9.10558,13.48048,9.293,13.293l7-7c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-7,7C10.51971,14.89485,10.26527,15.0003,10,15z"
      ></path>
      <path
        className="uim-tertiary"
        d="M20.53564,3.46661c-1.95203-1.95331-5.11798-1.95428-7.07129-0.00226l-8.17236,8.22266c-0.18567,0.18732-0.28992,0.44037-0.28998,0.7041v5.19287l-2.70898,2.70898c-0.18744,0.1875-0.29279,0.44171-0.29285,0.70679C2.00012,21.55206,2.44769,21.99988,3,22c0.26526,0.00031,0.51971-0.10516,0.70697-0.29303l2.70892-2.70892h5.19299c0.26379-0.00006,0.51685-0.10431,0.7041-0.29004l8.22266-8.17236C22.48682,8.58319,22.48682,5.41907,20.53564,3.46661z M19.12158,9.12158l-7.9248,7.87646H7.00195l0.00006-4.19482l7.8764-7.9248c1.17108-1.16785,3.06635-1.16785,4.23737,0C20.28912,6.04852,20.29169,7.94824,19.12158,9.12158z"
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

export default MThermometer;
