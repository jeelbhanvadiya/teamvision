import React from 'react';

function AnswerOption(props) {

  return (
    <li className="answerOption">

        <label className="radioCustomLabel" htmlFor={props.answerType}>
            <input
                type="radio"
                style={{    width: "50px",
                    height: "17px"}}
                // className="radioCustomButton"
                id="horizontal-list"
                name="radioGroup"
                id={props.answerType}
                value={props.index}
                onClick={props.onAnswerSelected}
            />  <span>{props.answerContent}</span>
        </label>
    </li>
  );

}

export default AnswerOption;