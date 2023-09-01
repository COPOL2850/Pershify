
import "./header.scss";
import nonTextLogo from "../../../assets/svgs/pershify-non-text-logo.svg";
import TextLogo from "../../../assets/svgs/pershify-text-logo.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Header = () => {
    const [navLiknsDisplay, setNavLiknsDisplay] = useState("flex");
    const [singUpContainerStyle, setSingUpContainerStyle] = useState();
    const [headerSingUpExpanderStyle, setHeaderSingUpExpanderStyle] = useState();
    const [singUpStyle, setsingUpStyle] = useState();
    const [loginStyle, setLoginStyle] = useState();
    const [searchBoxStyle, setSearchBoxStyle] = useState();
    const [searchBoxContainerStyle, setSearchBoxContainerStyle] = useState();
    const [headerSingUpExpanderClick, setHeaderSingUpExpanderClick] = useState(null);



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



                        <div className="search-box"
                            style={searchBoxStyle}>
                            <div className="search-box-container" style={searchBoxContainerStyle} >
                                <div className="x" onClick={() => {

                                    setSearchBoxContainerStyle({
                                        width: "0",
                                        height: "0",
                                        transition: "0.5s",
                                    })
                                    setTimeout(() => {
                                        setSearchBoxStyle({
                                            display: "none",
                                        }); setNavLiknsDisplay("flex");
                                    }, 550);

                                }}>x</div>
                            </div>
                        </div>
                        <Link className=" nav-links nav-search" style={{ display: navLiknsDisplay }} onClick={() => {
                            setNavLiknsDisplay("none");
                            setSearchBoxStyle({

                                display: "flex",
                                width: "100%",
                                height: "100%",
                                padding: "19px 5px 0 5px"
                            });
                            setTimeout(() => {
                                setSearchBoxContainerStyle({
                                    backgroundColor: "$background-dark-main",
                                    width: "100%",
                                    height: "500px",
                                    transition: "0.5s",
                                });
                            }, 20);



                        }}>
                            <div>جستجو</div>
                        </Link>

                        <Link to={'/new'} className=" nav-links nav-new" style={{ display: navLiknsDisplay }}>
                            <div>جدید</div>
                        </Link>
                        <Link to={'/genres'} className=" nav-links nav-genres" style={{ display: navLiknsDisplay }}>
                            <div>سبک ها</div>
                        </Link>
                        <Link to={'/playlists'} className=" nav-links nav-playlists" style={{ display: navLiknsDisplay }}>
                            <div>پلی لیست ها</div>
                        </Link>
                        <Link to={'/library'} className=" nav-links nav-library" style={{ display: navLiknsDisplay }}>
                            <div>کتابخانه</div>
                        </Link>
                    </div>
                </div>
                <div className="header-singUp">
                    <div className="singUp-container" style={singUpContainerStyle}>
                        <Link to={'/singup'} className="singUp">
                            <div style={singUpStyle}>ثبت نام</div>
                        </Link>
                        <div id="header-singUp-expander" style={headerSingUpExpanderStyle} onClick={() => {
                            
                            setSingUpContainerStyle({

                                backgroundColor: "white",
                                height: "88px",
                                transition: "0.3s"
                            });
                            setHeaderSingUpExpanderStyle({
                                left: "0",

                                padding: "0",
                                transition: "10s",
                                display: "none",
                                transition: "10s",
                            });
                            setsingUpStyle({
                                padding: "0",
                                transition: "0.3s",
                            });
                            setLoginStyle({
                                display: "flex",
                                backgroundColor: "black",
                                color: "white",

                                transition: "0.5s",
                                transitionDelay: "0.5s",

                            });
                        }}>{`>`}</div>

                        <Link to={'/login'} className="login" style={loginStyle}>
                            <div >ورود به حساب</div>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}