import React from 'react';
import {Redirect} from "react-router-dom"
import img from "../../img/01.jpg"
let total = 0;

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer:props.answers,
      total:0,
      redirect:false
    }
  }
  renderQuestins(){
    return  this.props.quizResult.map((_data,index) =>{
      return <div key={index} className="list-grp cus-result"><strong>{index+1})</strong> {_data.question} <br/><strong>A :</strong> correct answer is option: <strong>{_data.answerindex}</strong> :  and you have selcted <strong>{this.props.answers[index]+1} </strong>{ ((this.props.answers[index]+1) === _data.answerindex) ? (<span className="status">its correct !man</span>) : ''}</div>
    })
  }
  render (props){
    if(this.state.redirect){
      return (<Redirect to="/finish"/>)
    }else{
      return (
          <>
            {
              this.props.quizResult.forEach((_data,index)=> {
                return <h2>{(this.props.answers[index]+1) === _data.answerindex ? total++
                    : null}</h2>
              })
            }
            <div className="App-header">
              <h2 style={{color:"white"}}>Your Score is : {total}</h2>
            </div>
            <div  className="quiz-story" style={{marginTop:"26px"}}>
              <div>
                <strong style={{marginLeft:"20px"}}><u style={{fontSize:"23px"}}>Lets see your results ! </u></strong><br/>
                <strong style={{marginLeft:"20px"}}><u style={{fontSize:"18px"}}>
                  <a href={img} download onClick={()=>{this.setState({redirect:true})}}>Generator certificate</a>
                </u></strong><br/>
                <div style={{marginTop:"30px"}}>{this.renderQuestins()}</div>
              </div>
            </div>
          </>
      )
    }
  }
}

export default Result;