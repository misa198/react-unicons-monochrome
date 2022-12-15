import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUserSquare: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-quaternary"
        d="M12,13.55566c-2.08644,0.00027-3.77805-1.6909-3.77832-3.77734C8.22141,7.69188,9.91258,6.00027,11.99902,6c2.08644-0.00027,3.77805,1.6909,3.77832,3.77734C15.77519,11.86277,14.08543,13.55297,12,13.55566z"
      ></path>
      <path
        className="uim-tertiary"
        d="M14.81421,12.27264C14.12238,13.05249,13.12427,13.5542,12,13.55566c-1.1297,0.00012-2.13208-0.50574-2.82452-1.29163c-1.68323,0.90082-2.90991,2.58667-3.13641,4.62756c-0.05969,0.54901,0.33679,1.04248,0.88574,1.10254L16.96582,18c0.03656,0,0.07306-0.00201,0.10938-0.00586c0.54895-0.06006,0.94543-0.55353,0.88574-1.10254C17.73743,14.87793,16.51947,13.18268,14.81421,12.27264z"
      ></path>
      <path
        className="uim-primary"
        d="M19,2H5C3.34387,2.00183,2.00183,3.34387,2,5v14c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3V5C21.99817,3.34387,20.65613,2.00183,19,2z M17.0752,17.99414C17.03888,17.99799,17.00238,18,16.96582,18L6.9248,17.99414c-0.54895-0.06006-0.94543-0.55353-0.88574-1.10254c0.2265-2.04089,1.45319-3.72675,3.13641-4.62756c0,0.00006,0.00012,0.00006,0.00012,0.00012c-0.58636-0.66553-0.9538-1.52911-0.95392-2.48584C8.22144,7.69189,9.9126,6.00024,11.99902,6s3.77808,1.69092,3.77832,3.77734c-0.00098,0.96118-0.3717,1.82861-0.9632,2.49536l0.00006-0.00006c1.70526,0.91003,2.92322,2.60529,3.14673,4.61896C18.02063,17.44061,17.62415,17.93408,17.0752,17.99414z"
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

export default MUserSquare;
