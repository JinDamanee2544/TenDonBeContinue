import style from '../styles/SignUpBox.module.css'
import Link from 'next/link'
const SignUpBox=()=>{
    return (
        <div className={style.SignUpBox}>
            <form>
                <p className={style.head}>SignUp</p>
                <div className={style.email}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div className={style.name}>
                    <div className={style.firstName}>
                        <label htmlFor="firstname1">First Name</label>
                        <input type="firstname" className="form-control" id="firstname1" aria-describedby="emailHelp" placeholder="Payuth"/>
                    </div>

                    <div className={style.lastName}>
                        <label htmlFor="lastname1">Last Name</label>
                        <input type="lastname" className="form-control" id="lastname1" aria-describedby="emailHelp" placeholder="Jan-O-cha"/>
                    </div>
                </div>

                <div className={style.password}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div className={style.confirmPassword}>
                    <label htmlFor="confirmInputPassword1">Confirm Your Password</label>
                    <input type="confirmpassword" className="form-control" id="confirmInputPassword1" placeholder="Password Again"/>
                </div>
                <Link href='/' passHref>
                    <button type="submit" className="btn">Submit</button>
                </Link>
            </form>
        </div>
    )
}
export default SignUpBox