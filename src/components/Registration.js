import React, {useState,useEffect} from "react";
import firebase from 'firebase'
import {DB_CONFIG } from "../base";
import {Redirect} from "react-router-dom"
import logo from "../img/logo.jpg"
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
         localStorage.removeItem("email")
     }else{
         const newMess   =  database.push();
         newMess.set({
             name:data.name,
             mobile:data.mobile,
             email:data.email,
             gender:data.gender,
             age:data.age,
             address:data.address
         },()=>{
             alert("suceesfully send");
             localStorage.setItem("email",data.email);
             setRedirect(true)
         })
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
                                    <label htmlFor="exampleInputPassword1">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>{onChange(e)}}
                                        id="place"
                                        name="address"
                                        placeholder="Enter Address "
                                        required
                                    />
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="exampleInputPassword1">Occupation </label>*/}
                                {/*    <select className="form-control" id="occu" name="occu" required>*/}
                                {/*        <option value="Student">Student/மாணவர்</option>*/}
                                {/*        <option value="Employee">Employee/ஊழியர்</option>*/}
                                {/*        <option value="Business">Business/வணிக</option>*/}
                                {/*        <option value="Housewife">Housewife/இல்லத்து அரசி</option>*/}
                                {/*        <option value="Farmer">Farmer/உழவர்</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="exampleInputPassword1">Qualification </label>*/}
                                {/*    <select className="form-control" id="qua" name="qua" required>*/}
                                {/*        <option value="Illitrate">Illitrate/படிப்பறிவு இல்லாதவர்</option>*/}
                                {/*        <option value="Primary School">Primary School/ஆரம்ப பள்ளி</option>*/}
                                {/*        <option value="Secondary School">Secondary School/ உயர்நிலை பள்ளி</option>*/}
                                {/*        <option value="College">College/College / கல்லூரி</option>*/}
                                {/*        <option value="Others">Others/மற்றவை</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                            </div>

                            <div className="box-footer">
                                <button
                                        onClick={submit}
                                        disabled={!data.name || !data.mobile || !data.email || !data.gender || !data.age || !data.address }
                                        className="btn btn-success"
                                >
                                    Start Quiz
                                </button>&nbsp;
                                <a href="/"

                                        className="btn btn-primary"
                                >
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