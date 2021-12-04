import React from 'react';

const Die = function(props) {
  return (
  <div id='die-container' onClick={(props.dieclick)}>
  <div id='die'>0</div>
  <svg id='die-svg'
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 593.75 724.33"
  height="200" width="200
  ">
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,

      }}
      d="M.98 540.43V179.49L294.98.58l293 177.85 4.78 362L296.87 722.1.98 540.43z"
    />
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
      d="m88.98 490.43-88 50L296.87 722.1 88.98 490.43zM500.95 490.43 296.87 722.1l295.89-181.67-91.81-50zM294.98.58l-7 94.85 300 83-87.03 312H88.98l-88-310.94 287-84.06M88.98 490.43l199-395M500.98 490.43l-213-395"
    />
  </svg>
  </div>
  )

}


export default Die