import React from 'react';

const Scroll = (props) => {
  console.log(props);
  //you're doing a javascript expression and within is an object that can have css style. camelcase for JSX 
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
      {props.children}
    </div>
  )
};

export default Scroll;