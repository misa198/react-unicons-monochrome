import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MPhoneVolume: React.FC<Props> = ({ size = 24, color = 'inherit' }) => {
  const svgElement = new DOMParser().parseFromString(
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        className="uim-secondary"
        d="M20.94238,11.64258c-.02832,0-.05761-.001-.08691-.00391a.99949.99949,0,0,1-.91016-1.082c.01465-.1748.02246-.34961.02246-.52441a6.00655,6.00655,0,0,0-6-6c-.1748,0-.34961.00781-.52441.02246a.9998.9998,0,0,1-.17188-1.99219c.23145-.02051.46485-.03027.69629-.03027a8.00916,8.00916,0,0,1,8,8c0,.23144-.00976.46484-.03028.69629A.99943.99943,0,0,1,20.94238,11.64258Z"
      ></path>
      <path
        className="uim-primary"
        d="M16.96777,11.03223a.99943.99943,0,0,1-1-1,2.0026,2.0026,0,0,0-2-2,1,1,0,0,1,0-2,4.004,4.004,0,0,1,4,4A.99942.99942,0,0,1,16.96777,11.03223Z"
      ></path>
      <path
        className="uim-tertiary"
        d="M18.88184,21.96777a3.05052,3.05052,0,0,1-.3877-.02441A19.09792,19.09792,0,0,1,7.46875,16.53125,19.09792,19.09792,0,0,1,2.05664,5.50586,3.04054,3.04054,0,0,1,2.78711,3.1123,2.99539,2.99539,0,0,1,5.03418,2.09668H8.06055a2.98117,2.98117,0,0,1,2.95507,2.49023q.04982.33839.125.67383a10.16507,10.16507,0,0,0,.3877,1.31446,1.99243,1.99243,0,0,1-1.03906,2.48046l-.45606.21289a12.50032,12.50032,0,0,0,4.69825,4.69825l.21386-.458a1.98937,1.98937,0,0,1,2.48145-1.03613,10.16509,10.16509,0,0,0,1.31347.38672q.334.0747.67286.125a2.98117,2.98117,0,0,1,2.49023,2.95507v3.02637a2.99539,2.99539,0,0,1-1.01562,2.24707A3.03541,3.03541,0,0,1,18.88184,21.96777Z"
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

export default MPhoneVolume;
