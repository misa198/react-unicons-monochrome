import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MUtensilsAlt: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-tertiary"
        d="M12.69727 11.29785L10.44409 9.04517a4.1639 4.1639 0 0 0-.74292-4.9856C8.25586 2.61426 4.52734 1.03027 2.77148 2.78613 1.0166 4.542 2.59863 8.27051 4.04443 9.71582a4.28472 4.28472 0 0 0 2.896 1.27148c.04541.001.09082.002.13623.002a3.9008 3.9008 0 0 0 1.954-.52954l2.2525 2.25219a.99989.99989 0 0 0 1.41407-1.41406zM21 22.01465a.99676.99676 0 0 1-.707-.293L14.11279 15.542a.99989.99989 0 1 1 1.41407-1.41406L21.707 20.30762a1 1 0 0 1-.707 1.707z"
      ></path>
      <path
        className="uim-primary"
        d="M21.707,6.52051a.99962.99962,0,0,0-1.41406,0l-2.8291,2.82812a1.02088,1.02088,0,0,1-1.41327.00025l3.53534-3.5354a.99989.99989,0,1,0-1.41406-1.41407l-3.53541,3.5354-.00024-.00024a1.00185,1.00185,0,0,1-.00049-1.41406l2.82862-2.82813a.99989.99989,0,1,0-1.41407-1.41406l-2.8291,2.82813a3.00465,3.00465,0,0,0,.00049,4.24218l.00049.00049L2.293,20.27832A.99989.99989,0,1,0,3.707,21.69238l10.92926-10.9292a2.99943,2.99943,0,0,0,4.24213-.00048L21.707,7.93457A.99962.99962,0,0,0,21.707,6.52051Z"
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

export default MUtensilsAlt;
