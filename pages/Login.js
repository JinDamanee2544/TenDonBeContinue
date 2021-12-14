import style from "../styles/home.module.css";
import SettingTab from "../component/SettingTab";
import {useState,useReducer, Suspense} from "react";
import LoginBox from "../component/LoginBox";

export default function Login(){
    return (
        <div>
            <div className={style.background}>
                <div className={style.BackBox}>
                    <LoginBox/>
                    <SettingTab/>
                </div>
            </div>
        </div>
    )
}
