
import "./header.scss";
import nonTextLogo from "../../../assets/svgs/pershify-non-text-logo.svg";
import textLogo from "../../../assets/svgs/pershify-text-logo.svg";
import hambergerMenu from "../../../assets/svgs/hamberger-menu.svg";
import searchBtn from "../../../assets/svgs/search-btn.svg";
import searchNotFound from "../../../assets/svgs/search-not-found.svg";
import { Link } from "react-router-dom";
import React, { useLayoutEffect, useRef, useEffect, useState, startTransition } from "react";
import { Logger } from "sass";
import { useQuery } from "react-query";
import axios, { Axios } from "axios";
import onClickOutside from 'react-onclickoutside';
import { searchApiKeys } from "../../Api/Api keys/search Api keys";


export const Header = () => {
    const [navLiknsDisplay, setNavLiknsDisplay] = useState("flex");
    const [searchBoxStyle, setSearchBoxStyle] = useState();
    const [searchBoxContainerStyle, setSearchBoxContainerStyle] = useState();
    const [headerNavStyle, setHeaderNavStyle] = useState();
    const [headerStyle, setHeaderStyle] = useState();
    const [navContainerStyle, setNavContainerStyle] = useState();
    const [searchValue, setSearchValue] = useState();
    const [searchResultValue, setSearchResultValue] = useState([
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]);
    // const [headerSearchBtnStyle,setHeaderSearchBtnStyle] = useState();

    // console.log(searchApiKeys())

    // const options = {
    //     method: 'GET',
    //     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    //     params: { q: "moein" },
    //     headers: {
    //         'X-RapidAPI-Key': '3d267e7a9bmsh3f6f85c02501cacp1270fejsn6cfdfa0075aa',
    //         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then((res) => {
    //     console.log(res.data.data);






    // }).catch((err) => {
    //     console.log(err);
    // });


    // console.log(searchResultValue);

    return (
        <div className="header" style={headerStyle} >

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

                                <div className="header-search-input-container">
                                    <input type="text" spellCheck="false" placeholder="جستجو" className="header-search-input" onChange={(e) => {
                                        // console.log(e.target.value);
                                        // console.log(typeof (e.target.value))
                                        if (e.target.value === "") {
                                            setSearchResultValue([
                                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
                                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
                                            ])
                                        } else {
                                            setSearchValue(e.target.value);

                                            const options = {
                                                method: 'GET',
                                                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                                                params: { q: e.target.value },
                                                headers: searchApiKeys()
                                            };
                                            console.log(options);
                                            setSearchResultValue([
                                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
                                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
                                            ])


                                            axios.request(options).then((res) => {
                                                // console.log(res.data.data);
                                                setSearchResultValue(res.data.data)







                                            }).catch((err) => {
                                                console.log(err);
                                            });

                                        }

                                    }} />
                                    <button className="search-btn">
                                        <img src={searchBtn} alt="" />
                                    </button>
                                </div>
                                <div className="search-result">
                                    {SearchResult(searchResultValue, searchValue)}

                                </div>
                            </div>
                        </div>
                        <Link className=" nav-links nav-search" style={{ display: navLiknsDisplay }} onClick={() => {

                            if (window.innerHeight <= 500 || window.innerWidth <= 850) {
                                window.location = "/search";


                            } else {
                                // console.log(window.location.pathname);
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
                                        height: "max-content",
                                        transition: "0.5s",
                                    });
                                    // setHeaderSearchBtnStyle({
                                    //     width: "45px",
                                    //     transition: "0.1s"
                                    // });
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


const SearchResult = (searchResultValue, searchValue) => {
    console.log(searchResultValue)
    // console.log(searchResultValue.length);

    // if (searchResultValue == "0") {
    //     return (
    //         <div className="header-search-result-loading">
    //             <div className="album-art"></div>
    //             <div className="tags">
    //                 <div className="title"></div>
    //                 <div className="artist"></div>
    //             </div>
    //         </div>
    //     )
    // } else
    if (searchResultValue !== undefined && searchResultValue.length !== 0 && searchResultValue.length <= 25) {

        return (
            <div>
                <div className="header-search-result">
                    <div className="header-search-result-container-received-result">
                        {searchResultValue.map((searchResult, index) => {


                            return (

                                <div key={index} className="header-search-result-items" onClick={() => {
                                    window.open(searchResult.preview, "_blank")
                                }}>
                                    <img alt="album-art" src={searchResult.album.cover_small} className="album-art"></img>
                                    <div className="tags">
                                        <div className="title">{searchResult.title}</div>
                                        <div className="artist">{searchResult.artist.name}</div>
                                    </div>
                                </div>

                            )
                        })}</div>
                </div>
                <Link className="continue-search-in-search-page" to={'/search'} >جستجوی بیشتر درباره‌ی "<span>{searchValue}</span>"</Link>
            </div>
        )



    } else if (searchResultValue.length === 0) {
        return (
            <div>
                <div className="header-search-result">
                    <div className="header-search-result-container">
                        <div className="header-no-result">
                            <img src={searchNotFound} alt="" />
                            <div>متاسفانه نتیجه ای یافت نشد !</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (searchResultValue.length === 27) {
        return (
            <div>
                <div className="header-search-result">
                    <div className="header-search-result-container">
                        <div className="header-search-result-loading">
                            <div alt="album-art" className="album-art"></div>
                            <div className="tags">
                                <div className="title"></div>
                                <div className="artist"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}


