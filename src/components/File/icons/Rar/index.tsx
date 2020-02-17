import React from 'react';
import File from '../../../File';

const SVG_S = (
  <React.Fragment>
    <path
      fill="#C3CAD1"
      d="M19.6 0H1.4A1.4 1.4 0 000 1.4v25.2A1.4 1.4 0 001.4 28h18.2a1.4 1.4 0 001.4-1.4V1.4A1.4 1.4 0 0019.6 0z"
    />
    <path
      fill="#fff"
      d="M5 8V5.01H4V4h1v.5c.22-.18.687-.5 1-.5h2v1H6.65c-.213 0-.373.07-.48.21a.708.708 0 00-.17.41V8h1v1H4V8h1zM12.95 9a.659.659 0 01-.29-.08.818.818 0 01-.26-.22.73.73 0 01-.61.3h-1.34c-.507 0-.877-.1-1.11-.3C9.113 8.493 9 8.143 9 7.65v-.1C9 6.517 9.487 6 10.46 6H12v-.35c0-.207-.063-.367-.19-.48-.127-.113-.313-.17-.56-.17H9.5V4h1.8c.58 0 1.007.127 1.28.38.28.253.42.66.42 1.22V8c0 .1.037.177.11.23.08.047.21.07.39.07V9h-.55zm-1.41-1c.2 0 .327-.047.38-.14A.72.72 0 0012 7.5V7h-1.4a.583.583 0 00-.6.6v-.1c0 .173.04.3.12.38.08.08.207.12.38.12h1.04zM15 8V5.01h-1V4h1v.5c.22-.18.687-.5 1-.5h2v1h-1.35c-.213 0-.373.07-.48.21a.708.708 0 00-.17.41V8h1v1h-3V8h1z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M7 12H4v13h13V12h-3v1h2v11H5V13h2v-1zm1 0h3v1h2v1h-2v1h2v1h-2v1h2v1h-2v1h1v4H9v-4h1v-2H8v-1h2v-1H8v-1h2v-1H8v-1zm3 8h-1v2h1v-2z"
      clipRule="evenodd"
      opacity=".6"
    />
  </React.Fragment>
);

const SVG_M = (
  <React.Fragment>
    <path fill="#C3CAD1" d="M28 0H2a2 2 0 00-2 2v36a2 2 0 002 2h26a2 2 0 002-2V2a2 2 0 00-2-2z" />
    <path
      fill="#fff"
      d="M9 11V8.01H8V7h1v.5c.22-.18.687-.5 1-.5h2v1h-1.35c-.213 0-.373.07-.48.21a.708.708 0 00-.17.41V11h1v1H8v-1h1zM16.95 12a.66.66 0 01-.29-.08.818.818 0 01-.26-.22.73.73 0 01-.61.3h-1.34c-.507 0-.877-.1-1.11-.3-.227-.207-.34-.557-.34-1.05v-.1C13 9.517 13.487 9 14.46 9H16v-.35c0-.207-.063-.367-.19-.48-.127-.113-.313-.17-.56-.17H13.5V7h1.8c.58 0 1.007.127 1.28.38.28.253.42.66.42 1.22V11c0 .1.037.177.11.23.08.047.21.07.39.07v.7h-.55zm-1.41-1c.2 0 .327-.047.38-.14a.72.72 0 00.08-.36V10h-1.4a.583.583 0 00-.6.6v-.1c0 .173.04.3.12.38.08.08.207.12.38.12h1.04zM19 11V8.01h-1V7h1v.5c.22-.18.687-.5 1-.5h2v1h-1.35c-.213 0-.373.07-.48.21a.708.708 0 00-.17.41V11h1v1h-3v-1h1z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11 17H7v17h15V17h-4v1h3v15H8V18h3v-1zm1 0h3v1h2v1h-2v1h2v1h-2v1h2v1h-2v1h2v1h-2v1h2v1h-2v1h1v4h-3v-4h1v-2h-2v-1h2v-1h-2v-1h2v-1h-2v-1h2v-1h-2v-1h2v-1h-2v-1zm3 12h-1v2h1v-2z"
      clipRule="evenodd"
      opacity=".6"
    />
  </React.Fragment>
);

const Rar = props => {
  let svg;

  if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <File {...props}>{svg}</File>;
};

export default Rar;