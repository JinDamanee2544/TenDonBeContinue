import style from "../styles/home.module.css";
import LoginBox from "../component/LoginBox";
import SettingTab from "../component/SettingTab";
import SignUpBox from "../component/SignUpBox";
import { useState,useReducer } from "react";

export default function Home() {
  

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
  return (
    <div>
      <div className={style.background}>
        <div className={style.BackBox}>
          {isLogin&&<LoginBox/>}
          {!isLogin && <SignUpBox/>}
          <SettingTab/>
        </div>
        <button onClick={()=>dispatch({type:"LOGIN"})}>LOGIN</button>
        <button onClick={()=>dispatch({type:"SIGNUP"})}>SIGNUP</button>
      </div>
    </div>
  )
}
