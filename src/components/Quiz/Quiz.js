import React from 'react';
import Question from '../Quiz/Question';
import QuestionCount from '../Quiz/QuestionCount';
import AnswerOption from '../Quiz/AnswerOption';
import { CSSTransition } from 'react-transition-group';

function Quiz(props) {

  function renderAnswerOptions(key,index) {
    return (
      <AnswerOption
        index ={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }


  return (
      <CSSTransition
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
      >
          <div key={props.questionId} className="quiz-story">
              <QuestionCount counter={props.counter} viewreults={props.viewreults}
                             counter={props.questionId}
                             total={props.questionTotal}
              />
              <Question  content={props.question} />
              <ul className="answerOptions">
                  {props.answerOptions.map(renderAnswerOptions)}
              </ul>
              <div className="bottom-footer" >
                  {props.counter > 0 && Object.keys(props.allAnswer).length !== 10  ? (<button className="Previous-btn" onClick={props.setPreviousQuestion} >Previous</button>) : (<div></div>)}
                  {props.counter < 9 ? (<button className="next-btn" onClick={props.setNextQuestion} >Next</button>) : (<div></div>)}
                  {Object.keys(props.allAnswer).length === 10  ? (<button className="Previous-btn"  onClick={props.viewreults} >Submit</button>) : (<div></div>)}

              </div>
          </div>
      </CSSTransition>
  );
}


export default Quiz;