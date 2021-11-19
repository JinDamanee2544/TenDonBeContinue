import style from '../styles/loginBox.module.css'
const LoginBox=()=>{
    const submitBtn=()=>{
        return // handle here
    }
    return (
        <div className={style.LoginBox}>
            <form>
                <label>Log in</label>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="MyOwnButtonSetting btn" onClick={submitBtn}>Submit</button>
                <div>
                    <p> Don’t have an account?</p> <a>SignUp</a> 
                </div>
            </form>
        </div>
    )
}
export default LoginBox
