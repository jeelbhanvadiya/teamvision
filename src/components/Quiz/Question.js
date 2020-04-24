import React from 'react';

function Question(props) {

  return (
    <div>
     <h2 className="question" style={{fontSize:"22px",lineHeight:"30px"}}>{props.content}</h2>

  </div>
  );
}


export default Question;