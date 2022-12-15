import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MLocation: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M18.01074,4.4425C14.69116,1.12286,9.30896,1.12286,5.98932,4.44244s-3.31964,8.70178-0.00006,12.02142l5.30377,5.30267c0.18726,0.18787,0.44171,0.29333,0.70697,0.29303c0.26526,0.00031,0.51971-0.1051,0.70697-0.29297l5.30377-5.30273C21.33032,13.14423,21.33032,7.76215,18.01074,4.4425z M12,12.04401c-1.65686,0-3-1.34314-3-3s1.34314-3,3-3s3,1.34314,3,3C14.99799,10.70001,13.65601,12.04199,12,12.04401z"
      ></path>
      <path
        className="uim-quaternary"
        d="M12,12.044c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C14.998,10.70002,13.65602,12.042,12,12.044z"
      ></path>
      <path
        className="uim-primary"
        d="M15.6123,11.87109c-0.21417-0.26801-0.45752-0.51135-0.72546-0.72546c-0.15533-0.12408-0.32458-0.2157-0.48993-0.31665c-0.547,0.7326-1.41254,1.21381-2.39691,1.21503c-0.987,0-1.8551-0.48297-2.40179-1.21863c-0.44769,0.27319-0.86414,0.61224-1.21051,1.04572c-0.14075,0.17688-0.21741,0.3963-0.21741,0.62238c0,0.55206,0.44751,0.99969,0.99963,0.99969h5.66016c0.22607,0,0.4455-0.07666,0.62238-0.21741C15.88446,12.93201,15.95605,12.3031,15.6123,11.87109z"
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

export default MLocation;
