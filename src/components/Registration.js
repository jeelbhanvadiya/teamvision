import React, {useState,useEffect} from "react";
import firebase from 'firebase'
import {DB_CONFIG } from "../base";
import {Redirect} from "react-router-dom"
const app = firebase.initializeApp(DB_CONFIG);
const database = app.database().ref('users');

const Registration =(props) => {
    const [data,setData] = useState({});
    const [list,setList] = useState([]);
    const [redirect,setRedirect] = useState(false);
    const onChange =(e) => {setData({...data,[e.target.name]:e.target.value})};

    useEffect(() => {
        database.on("value", snapshot => {
            let allNotes = [];
            snapshot.forEach(snap => {
                allNotes.push(snap.val());
            });
            setList(allNotes)
        });
    },[]);

    const submit = () => {
     const isEmail =  list && list.filter((value)=> value.email === data.email);
     if(isEmail.length > 0){
         alert("you are already participated");
         localStorage.removeItem("email");
         setData({})
     }else{
         if(!data.email.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
             alert("plz enter valid email")
         }
         else if(data.mobile.length !== 10){
            alert("mobile number should be 10 digit")
         }else {
             const newMess   =  database.push();
             newMess.set({
                 name:data.name,
                 mobile:data.mobile,
                 email:data.email,
                 gender:data.gender,
                 age:data.age,
                 city:data.city,

                 interested:data.interested,
             },()=>{
                 alert("suceesfully send");
                 localStorage.setItem("email",data.email);
                 setRedirect(true)
             })
         }

     }
    };
    if(redirect){
        return (
            <Redirect to="/quiz"/>
        )
    }
    return(
        <div className="content-wrapper">
            <div className="col-md-6 col-md-offset-3" >
                <section className="content-header">
                    <h2>
                        Participant Information
                        <small />
                    </h2>
                </section>
                <section className="content" style={{minHeight: '800px'}}>
                    <div className="box box-success">
                            <div className="box-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input type="text" className="form-control"
                                           onChange={(e)=>{onChange(e)}} name="name"
                                           placeholder="Enter Your Full Name"
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                    <input type="number"
                                           className="form-control"
                                           onChange={(e)=>{onChange(e)}}
                                           id="mobile"
                                           name="mobile"
                                           placeholder="Enter Mobile Number"
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email ID</label>
                                    <input type="email"
                                           className="form-control"
                                           onChange={(e)=>{onChange(e)}}
                                           id="email"
                                           name="email"
                                           placeholder="Enter Email ID"
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Gender</label>
                                    <select className="form-control"
                                            onChange={(e)=>{onChange(e)}}
                                            placeholder="Select Gender"
                                            defaultValue="Select Gender"
                                            name="gender"
                                            required
                                    >
                                        <option value="Select Gender" defaultValue disabled>Select Gender</option>
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Age</label>
                                    <input type="number"
                                           className="form-control"
                                           onChange={(e)=>{onChange(e)}}
                                           id="age"
                                           name="age"
                                           placeholder="Enter Your Age"
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>{onChange(e)}}
                                        id="place"
                                        name="city"
                                        placeholder="Enter City "
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Are you interested in social work in your area?</label>
                                    <select className="form-control"
                                            onChange={(e)=>{onChange(e)}}
                                            placeholder="Select"
                                            defaultValue="Select"
                                            name="interested"
                                            required
                                    >
                                        <option value="Select" defaultValue disabled>Select</option>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </div>
                            </div>
                            <div className="box-footer">
                                <button
                                        onClick={submit}
                                        disabled={!data.name || !data.mobile || !data.email || !data.gender || !data.age || !data.city }
                                        className="btn btn-success"
                                >
                                    Start Quiz
                                </button>&nbsp;
                                <a href="/" className="btn btn-primary">
                                    Go to Home
                                </a>
                            </div>
                    </div>
                </section>
            </div>
            <div className="clearfix"/>
        </div>
)
};

export default Registration