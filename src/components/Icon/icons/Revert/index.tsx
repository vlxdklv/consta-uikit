import React from 'react';

import Icon from '../../../Icon';

const SVG_XS = (
  <path d="M2.65666 2.28224C3.09204 1.89071 3.59583 1.57595 4.14726 1.35595C5.1904 0.939782 6.34328 0.886926 7.42013 1.2059C8.49697 1.52488 9.43507 2.19711 10.0833 3.11428C10.7314 4.03144 11.052 5.14013 10.9932 6.26168C10.9344 7.38324 10.4998 8.45234 9.75925 9.29673C9.01874 10.1411 8.01551 10.7116 6.91122 10.9163C5.80694 11.1209 4.6659 10.9479 3.67197 10.4249C2.67805 9.90201 1.88912 9.05968 1.43232 8.03368L2.34496 7.62735C2.96837 9.02545 4.3704 10 6.00005 10C8.20919 10 10 8.20914 10 6C10 3.79086 8.20919 2 6.00005 2C4.95766 2 4.00839 2.39873 3.29646 3.05199L4.5 4.5L0.5 5L1.59091 1L2.65666 2.28224Z" />
);

const SVG_S = (
  <path d="M3.85314 2.36057L2.5 0.5L1 6H6.5L5.02931 3.97781C5.8599 3.36333 6.88754 2.99999 8.00004 2.99999C10.7615 2.99999 13 5.23857 13 7.99999C13 10.7614 10.7615 13 8.00004 13C5.96299 13 4.21045 11.7818 3.43118 10.0342L1.60522 10.8472C2.24475 12.2836 3.34925 13.4628 4.74074 14.1949C6.13223 14.927 7.72969 15.1693 9.27569 14.8828C10.8217 14.5963 12.2262 13.7976 13.2629 12.6154C14.2996 11.4333 14.9082 9.93653 14.9905 8.36636C15.0727 6.79618 14.624 5.24402 13.7165 3.95999C12.8091 2.67595 11.4957 1.73483 9.98815 1.28826C8.48057 0.841697 6.86654 0.915695 5.40614 1.49833C4.85028 1.7201 4.32899 2.01064 3.85314 2.36057Z" />
);

const SVG_M = (
  <path d="M5.10956 4.75282L2.75 2L1.75 9H8.75L6.41332 6.27387C7.85516 4.86692 9.82636 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C8.74074 20 5.93668 18.0509 4.68986 15.2547L2.86455 16.0674C3.77816 18.1194 5.35601 19.804 7.34386 20.8499C9.33171 21.8957 11.6138 22.2419 13.8224 21.8326C16.0309 21.4232 18.0374 20.2822 19.5184 18.5935C20.9994 16.9047 21.8687 14.7665 21.9863 12.5234C22.1039 10.2803 21.4628 8.06288 20.1664 6.22855C18.87 4.39422 16.9939 3.04976 14.8402 2.41181C12.6865 1.77385 10.3807 1.87956 8.29444 2.71191C7.10449 3.18665 6.02547 3.882 5.10956 4.75282Z" />
);

const Revert = props => {
  let svg;

  if (props.size === 'xs') svg = SVG_XS;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Revert;
