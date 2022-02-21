import style from '../styles/SettingTab.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCog,faUserPlus,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const SettingTab=()=>{

    /*
    const router = useRouter();

    const [isSignup,setIsSignup] = useState(true);
    const thisPath = router.pathname;
    if(thisPath==="/Login"){
        setIsSignup(false)
    }
    if(thisPath==="/Signup"){
        setIsSignup(true);
    }
    */
    return (
        <div className={style.tab}>
            <Link href='/'> 
                <a><FontAwesomeIcon icon={faUserCircle}/></a>
            </Link>
            <Link href=''>
                <a><FontAwesomeIcon icon={faCog}/></a>
            </Link>

            {<Link href='/Signup'>
                <a><FontAwesomeIcon icon={faUserPlus}/></a>
            </Link>}

            {<Link href='/Login'>
                <a><FontAwesomeIcon icon={faSignOutAlt}/></a>
            </Link>}
        </div>
    )
}
export default SettingTab
