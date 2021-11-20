import style from '../styles/loginBox.module.css'
const LoginBox=()=>{
    const submitBtn=()=>{
        return // handle here
    }
    const signUpLink=()=>{
        return // handle here
    }
    return (
        <div className={style.LoginBox}>
            <form>
                <p className={style.head}>Log In</p>
                <div className={style.email}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className={style.password}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn" onClick={submitBtn}>Submit</button>
                <div className={style.caution}>
                    <p> Don’t have an account?</p> 
                    <a className={style.signUpLink} onClick={signUpLink}>SignUp</a> 
                </div>
            </form>
        </div>
    )
}
export default LoginBox
