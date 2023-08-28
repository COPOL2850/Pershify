
import "./header.scss";
import nonTextLogo from "../../../assets/svgs/pershify-non-text-logo.svg";
import TextLogo from "../../../assets/svgs/pershify-text-logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">

            <div className="header-container">
                <div className="header-logo">
                    <Link to={'/'} >
                        <div className="logo-container">

                            <div className="non-text-logo"><img src={nonTextLogo} alt="لوگوی پرشیفای" /></div>
                            <div className="text-logo"><img src={TextLogo} alt="لوگوی پرشیفای" /></div>

                        </div>
                    </Link>
                </div>
                <div className="header-nav">
                    <div className="nav-container">
                        <Link to={'/home'} className="nav-home">
                            <div>صفحه اصلی</div>
                        </Link>
                        <Link to={'/search'} className="nav-search">
                            <div>جستجو</div>
                        </Link>
                        <Link to={'/library'} className="nav-library">
                            <div>کتابخانه</div>
                        </Link>
                        <Link to={'/new'} className="nav-new">
                            <div>جدید</div>
                        </Link>
                        <Link to={'/genres'} className="nav-genres">
                            <div>سبک ها</div>
                        </Link>
                        <Link to={'/playlists'} className="nav-playlists">
                            <div>پلی لیست ها</div>
                        </Link>
                    </div>
                </div>
                <div className="header-singUp">

                    <div className="singUp-container">
                        <Link to={'/singup'} className="singUp">
                            <div>ثبت نام</div>
                        </Link>

                        <Link to={'/login'} className="login" >
                            <div >ورود به حساب</div>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}