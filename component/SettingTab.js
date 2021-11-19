import style from '../styles/SettingTab.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCog,faUserPlus,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const SettingTab=()=>{

    const profileBtn=()=>{
        return // Handle
    }
    const settingBtn=()=>{
        return // Handle
    }
    const signUpBtn=()=>{
        return // Handle
    }
    const signOutBtn=()=>{
        return // Handle
    }

    return (
        <div className={style.tab}>
            <Link href='#'> 
                <a onClick={profileBtn}><FontAwesomeIcon icon={faUserCircle}/></a>
            </Link>
            <Link href='#'>
                <a onClick={settingBtn}><FontAwesomeIcon icon={faCog}/></a>
            </Link>
            <Link href='#'>
                <a onClick={signUpBtn}><FontAwesomeIcon icon={faUserPlus}/></a>
            </Link>
            <Link href='#'>
                <a onClick={signOutBtn}><FontAwesomeIcon icon={faSignOutAlt}/></a>
            </Link>
        </div>
    )
}
export default SettingTab