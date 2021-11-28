import style from "../styles/home.module.css";
import SettingTab from "../component/SettingTab";
import {useState,useReducer, Suspense } from "react";
import SignUpBox from '../component/SignUpBox';

export default function Signup() {
  
  /*
  const [isLogin,setIsLogin] = useState(false);
  const reducer=(state,action)=>{
    switch(action.type){
      case "LOGIN" :
        return setIsLogin(true);
      case "SIGNUP" :
        return setIsLogin(false);
    }
  }
  const [result,dispatch] = useReducer(reducer,isLogin)
  */
  return (
    <div>
      <div className={style.background}>
        <div className={style.BackBox}>
          <SignUpBox/>
          <SettingTab/>
        </div>
      </div>
    </div>
  )
  /*
  <button onClick={()=>dispatch({type:"LOGIN"})}>LOGIN</button>
  <button onClick={()=>dispatch({type:"SIGNUP"})}>SIGNUP</button>
  */
}
