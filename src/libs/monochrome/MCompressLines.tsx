import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCompressLines: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-primary"
        d="M12,11c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5C8.40609,7.81298,8.41184,7.17991,8.80586,6.793c0.38896-0.38195,1.01218-0.38195,1.40114,0L12,8.58594l1.793-1.793c0.39296-0.38799,1.02604-0.38396,1.41403,0.009c0.38451,0.38944,0.3845,1.01564-0.00003,1.40506l-2.5,2.5C12.51971,10.89485,12.26527,11.0003,12,11z M14.5,17.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293L12,15.41406l-1.793,1.793c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C8.40846,16.80862,8.40847,16.18242,8.793,15.793l2.5-2.5c0.39027-0.39048,1.02319-0.39065,1.41368-0.00038c0.00013,0.00013,0.00026,0.00026,0.00038,0.00038l2.5,2.5c0.39046,0.39058,0.39037,1.02375-0.00021,1.41421C15.01936,17.39465,14.76511,17.49996,14.5,17.5z"
      ></path>
      <path
        className="uim-tertiary"
        d="M17,4H7C6.44772,4,6,3.55228,6,3s0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1S17.55228,4,17,4z M17,22H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1S17.55228,22,17,22z"
      ></path>
      <path
        className="uim-primary"
        d="M12 13c-.55231 0-1 .44769-1 1v6h2v-6C13 13.44769 12.55231 13 12 13zM11 10.00116C11.00031 10.5531 11.44806 11.00031 12 11c.00037 0 .00073 0 .00116 0C12.5531 10.99969 13.00031 10.55194 13 10V4h-2v6C11 10.00037 11 10.00073 11 10.00116z"
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

export default MCompressLines;
