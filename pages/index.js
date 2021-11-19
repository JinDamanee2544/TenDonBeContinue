import style from "../styles/home.module.css";
import LoginBox from "../component/LoginBox";
import SettingTab from "../component/SettingTab";
import SignUpBox from "../component/SignUpBox";
export default function Home() {
  let isLogIn = true;
  return (
    <div>
      <div className={style.background}>
        <div className={style.BackBox}>
          {isLogIn&&<LoginBox/>}
          {!isLogIn && <SignUpBox/>}
          <SettingTab/>
        </div>
      </div>
    </div>
  )
}
