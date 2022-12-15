import React from 'react';
import '../../assets/styles/monochrome.css';

interface Props {
  size?: number;
  color?: string;
}

const MCloudMoonShowers: React.FC<Props> = ({
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
        d="M14.6665,18H5.5c-1.93321-0.0003-3.50014-1.56772-3.49983-3.50093c0.00025-1.57211,1.04858-2.95121,2.56331-3.37207c0.48096-3.2774,3.52771-5.54437,6.80511-5.06342c2.02716,0.29748,3.76222,1.60917,4.60114,3.47842c2.28057,0.71708,3.54803,3.14716,2.83095,5.42774C18.23309,16.77487,16.55877,18.00212,14.6665,18z"
      ></path>
      <path
        className="uim-primary"
        d="M21.97205 7.54395c-.13007-.53674-.67059-.86646-1.20734-.73639-.21405.05365-.43372.08118-.65436.08203-1.65607-.00183-2.99817-1.34387-3-3 .00104-.22156.02856-.4422.08203-.65723.03577-.14978.03644-.30573.00201-.45575-.12347-.53839-.65997-.87469-1.1983-.75128-2.05963.46198-3.56531 2.16632-3.83099 4.21429 1.67828.4859 3.07812 1.68359 3.80463 3.30237 1.14233.35919 2.02997 1.14838 2.54181 2.13306 1.70203-.49805 3.05884-1.87048 3.46313-3.6712C22.00952 7.85242 22.00867 7.69495 21.97205 7.54395zM8.5 22c-.55197.00031-.99969-.44689-1-.99886 0-.00038 0-.00076 0-.00114v-6c0-.55229.44772-1 1-1s1 .44771 1 1v6c.00031.55197-.44689.99969-.99886 1C8.50076 22 8.50038 22 8.5 22zM12.5 21c-.55197.00031-.99969-.44689-1-.99886 0-.00038 0-.00076 0-.00114v-6c0-.55229.44771-1 1-1s1 .44771 1 1v6c.00031.55197-.44689.99969-.99886 1C12.50076 21 12.50038 21 12.5 21z"
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

export default MCloudMoonShowers;
