import React, { useState } from "react";
import axios from 'axios';
const Form=()=>{
    const [data,setData]=useState({
        phone:'',
        email:'',
        password:'',
        bname:'',
        mailSent: false,
    });
    
    const submitButton=(event)=>{
        event.preventDefault();
        const API_PATH = 'https://ensmedicos.com/api/mail.php';
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: data,
          })
          
    }
    const changeInput=(event)=>{
        const {name,value}=event.target;
        setData((preValue)=>{
            if(name==='phone')
            {
                return{
                    phone:value,
                    email:preValue.email,
                    password:preValue.password,
                    bname:preValue.bname
                }

            }
            if(name==='email')
            {
                return{
                    phone:preValue.phone,
                    email:value,
                    password:preValue.password,
                    bname:preValue.bname
                }
            }
            if(name==='password')
            {
                return{
                    phone:preValue.phone,
                    email:preValue.email,
                    password:value,
                    bname:preValue.bname
                }
            }
            if(name==='bname')
            {
                return{
                    phone:preValue.phone,
                    email:preValue.email,
                    password:preValue.password,
                    bname:value
                }
            }
            return{
                ...preValue,
                [name]:value
            }

        })
    }
    return(<>
        <form  onSubmit={submitButton}>
            <div className="mb-3">
                <input type="tel" name="phone" value={data.phone} className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter mobile number here" pattern="[0-9]{10}" onChange={changeInput}/>
            </div>
            <div className="mb-3">
                <input type="email" name="email" value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email id here" onChange={changeInput}/>
            </div>
            <div className="mb-3">
                <input type="password" name="password" value={data.password} className="form-control" id="exampleInputPassword1" placeholder="Enter password here" onChange={changeInput}/>
            </div>
            <div className="mb-3">
                <input type="text" name="bname" value={data.bname} className="form-control" id="exampleInputbusiness" aria-describedby="businessHelp" placeholder="Enter business name here" onChange={changeInput}/>
            </div>
            
            <button type="submit" className="btn submitbutton">Sign Up</button>
        </form>
       
    </>);
}
export default Form;