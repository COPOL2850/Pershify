
import "./header.scss";
import nonTextLogo from "../../../assets/svgs/pershify-non-text-logo.svg";
import textLogo from "../../../assets/svgs/pershify-text-logo.svg";
import hambergerMenu from "../../../assets/svgs/hamberger-menu.svg";
import searchBtn from "../../../assets/svgs/search-btn.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Header = () => {
    const [navLiknsDisplay, setNavLiknsDisplay] = useState("flex");
    const [searchBoxStyle, setSearchBoxStyle] = useState();
    const [searchBoxContainerStyle, setSearchBoxContainerStyle] = useState();
    const [headerNavStyle, setHeaderNavStyle] = useState();
    const [headerStyle, setHeaderStyle] = useState();
    const [navContainerStyle, setNavContainerStyle] = useState();
    // const [screenWidth, setScreenWidth] = useState(screen.width);




    return (
        <div className="header" style={headerStyle}>

            <div className="header-container">
                <div className="header-sidebar-opener">
                    <div className="header-sidebar-hamberger-btn" onClick={() => {
                        setHeaderNavStyle({
                            display: "flex",
                            width: "0",
                            height: "100%"

                        })
                        setTimeout(() => {

                            setHeaderNavStyle(
                                {
                                    display: "flex",
                                    backgroundColor: "#343434",
                                    height: "100%",

                                    transition: "0.5s"

                                }
                            )
                            setNavContainerStyle({
                                justifyContent: "space-around"
                            })
                        }, 0.5);

                    }}>
                        <img src={hambergerMenu} alt="" />
                    </div>
                </div>
                <div className="header-logo">
                    <Link to={'/'} >
                        <div className="logo-container">

                            <div className="non-text-logo"><img src={nonTextLogo} alt="لوگوی پرشیفای" /></div>
                            <div className="text-logo"><img src={textLogo} alt="لوگوی پرشیفای" /></div>

                        </div>
                    </Link>
                </div>
                <div className="header-nav" style={headerNavStyle}>
                    <div className="nav-container" style={navContainerStyle}>
                        <div className="search-box"
                            style={searchBoxStyle}>
                            <div className="search-box-container" style={searchBoxContainerStyle} >
                                {/* <div className="x" onClick={() => {

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

                                }}>x</div> */}
                                <div className="header-search-input-container">
                                    <input type="text" placeholder="جستجو" className="header-search-input" />
                                    <button className="search-btn">
                                        <img src={searchBtn} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link className=" nav-links nav-search" style={{ display: navLiknsDisplay }} onClick={() => {

                            if (screen.width <= 850) {
                                window.location = "/search/";
                            } else {

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
                                        height: "400px",
                                        transition: "0.5s",
                                    });
                                }, 20);
                            }


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
                    <div className="singUp-container" >
                        <Link to={'/singup'} className="singUp">
                            <div >ثبت نام</div>
                        </Link>
                        <div id="header-singUp-expander"  >{`>`}</div>

                        <Link to={'/login'} className="login" >
                            <div >ورود به حساب</div>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}