import React from 'react'
import style from '../components/styles/homeBackGround.css'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const Header = () => {

    

    return (
        <>
        <div className={style.intro}>
        <div className={style.name}>
           Taylor Reichner
        </div>
        <div>
            Full-Stack Software Engineer
        </div>
        <div>
            Welcome to my portfolio
        </div>
        <Link component={RouterLink} to="/intro">
        <div className={style.viewWork}>View my work</div>
        </Link>
        </div>
        <div className={style.backgroundContainer}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
        <div className={style.stars}></div>
        <div className={style.twinkling}></div>
        <div className={style.clouds}></div>
        
        </div>
        </>
    )
}

export default Header;