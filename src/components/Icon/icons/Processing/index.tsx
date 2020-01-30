import React from 'react';

import Icon from '../../../Icon';

const SVG_S = (
  <g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.74996 1H5.24996L4.80713 2.18088C4.23589 2.35911 3.71964 2.66197 3.29022 3.05763L2.0448 2.85047L1.2948 4.14951L2.09624 5.12368C2.03321 5.40571 1.99996 5.69897 1.99996 6C1.99996 6.30104 2.03321 6.59432 2.09625 6.87636L1.29484 7.85048L2.04484 9.14952L3.29022 8.94237C3.71964 9.33803 4.23588 9.64089 4.80713 9.81912L5.24996 11H6.74996L7.19279 9.81912C7.76403 9.6409 8.28027 9.33804 8.70968 8.94237L9.95507 9.14953L10.7051 7.85049L9.90366 6.87636C9.9667 6.59432 9.99996 6.30105 9.99996 6C9.99996 5.69897 9.9667 5.4057 9.90367 5.12367L10.7051 4.14952L9.9551 2.85048L8.70969 3.05764C8.28028 2.66197 7.76403 2.35911 7.19279 2.18088L6.74996 1ZM7.99994 6C7.99994 7.10457 7.10451 8 5.99994 8C4.89537 8 3.99994 7.10457 3.99994 6C3.99994 4.89543 4.89537 4 5.99994 4C7.10451 4 7.99994 4.89543 7.99994 6Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8H12.5L12.8767 9.13013C13.3184 9.2649 13.7168 9.49884 14.0461 9.80601L15.2141 9.56699L15.7141 10.433L14.9236 11.3244C14.9736 11.5416 15 11.7677 15 12C15 12.2323 14.9736 12.4584 14.9236 12.6755L15.7141 13.567L15.2141 14.433L14.0461 14.194C13.7168 14.5012 13.3184 14.7351 12.8767 14.8699L12.5 16H11.5L11.1233 14.8699C10.6816 14.7351 10.2831 14.5012 9.95391 14.194L8.78589 14.433L8.28589 13.567L9.07636 12.6756C9.02639 12.4584 8.99999 12.2323 8.99999 12C8.99999 11.7677 9.02639 11.5415 9.07637 11.3244L8.28591 10.433L8.78591 9.56697L9.95393 9.80598C10.2832 9.49883 10.6816 9.26489 11.1233 9.13013L11.5 8ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
    />
  </g>
);

const SVG_M = (
  <g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.56833 2H7.56833L6.9779 3.57448C6.21619 3.81212 5.52783 4.21597 4.95525 4.74356L3.2948 4.46737L2.2948 6.19942L3.36334 7.49825C3.27929 7.87427 3.23496 8.26529 3.23496 8.66666C3.23496 9.06807 3.2793 9.45913 3.36336 9.83519L2.29485 11.134L3.29485 12.866L4.95534 12.5898C5.52789 13.1174 6.21621 13.5212 6.97785 13.7588L7.56831 15.3334H9.56831L10.1588 13.7588C10.9204 13.5212 11.6087 13.1174 12.1812 12.5899L13.8418 12.8661L14.8418 11.1341L13.7732 9.83516C13.8573 9.4591 13.9016 9.06806 13.9016 8.66666C13.9016 8.26524 13.8573 7.87419 13.7732 7.49812L14.8418 6.19926L13.8418 4.46721L12.1812 4.74343C11.6087 4.21592 10.9204 3.81214 10.1588 3.57451L9.56833 2ZM11.2351 8.66676C11.2351 10.1395 10.0412 11.3334 8.56841 11.3334C7.09565 11.3334 5.90174 10.1395 5.90174 8.66676C5.90174 7.194 7.09565 6.00009 8.56841 6.00009C10.0412 6.00009 11.2351 7.194 11.2351 8.66676Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9016 11.3333H17.2349L17.7372 12.8401C18.3262 13.0198 18.8576 13.3317 19.2966 13.7414L20.8537 13.4227L21.5204 14.5774L20.4666 15.7658C20.5332 16.0553 20.5684 16.3568 20.5684 16.6666C20.5684 16.9763 20.5332 17.2778 20.4666 17.5673L21.5206 18.7559L20.8539 19.9106L19.2965 19.5919C18.8575 20.0015 18.3262 20.3135 17.7372 20.4931L17.2349 22H15.9016L15.3993 20.493C14.8104 20.3133 14.2792 20.0014 13.8402 19.5919L12.2828 19.9105L11.6162 18.7558L12.6702 17.5672C12.6036 17.2777 12.5684 16.9763 12.5684 16.6666C12.5684 16.3569 12.6036 16.0553 12.6702 15.7658L11.6163 14.5772L12.283 13.4225L13.8403 13.7412C14.2793 13.3317 14.8105 13.0198 15.3993 12.8402L15.9016 11.3333ZM17.9016 16.6667C17.9016 17.4031 17.3047 18.0001 16.5683 18.0001C15.8319 18.0001 15.235 17.4031 15.235 16.6667C15.235 15.9303 15.8319 15.3334 16.5683 15.3334C17.3047 15.3334 17.9016 15.9303 17.9016 16.6667Z"
    />
  </g>
);

const Processing = props => {
  let svg;

  if (props.size === 'xs')
    // TODO
    svg = SVG_S;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Processing;
