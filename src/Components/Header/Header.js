import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
const Header = (props) => {
    const getWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth())
        };
        window.addEventListener('resize', resizeListener);

    }, [])
    const isMobile = (width <= 1200);





    const [change, setChange] = useState(true)

    const updateIcon = () => {
        setChange(!change)
    }



    const changeHeader = (event) => {
        props.setCurrentPage(event.target.value)
    }
    const changeHeaderMobile = (event) => {
        props.setCurrentPage(event.target.id)
        setChange(!change)
    }
    let headerValues = [
        {
            value: "home",
            text: "Home"
        },

        {
            value: "rsvp",
            text: "RSVP"
        },
        {
            value: "schedule",
            text: "Schedule"
        },
        {
            value: "gallery",
            text: "Gallery"
        },
        // {
        //     value: "accommodations",
        //     text: "Info"
        // },

        // {
        //     value: "registry",
        //     text: "Registry"
        // }

    ]
    if (isMobile) {
        let options = []
        for (let i = 0; i < headerValues.length; i++) {
            options.push(
                <div className="HeaderMobileDropDownElement" key={Math.random()}>
                    <Link
                        to={"/" + headerValues[i].value}
                        style={{ textDecoration: 'none' }}
                    >
                        <h2 onClick={changeHeaderMobile} id={headerValues[i].value} >{headerValues[i].text}</h2>
                    </Link>
                </div>
            )
        }
        options.push(/*
            <div key={Math.random()}
                className="HeaderMobileDropDownElement">
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.amazon.com/wedding/share/GabbySebastianM"
                    style={{ textDecoration: 'none' }}>
                    <h2 onClick={changeHeaderMobile} >Registry</h2>
                </a>
            </div>*/
            <div className="dropdown HeaderMobileDropDownElement"   key={Math.random()}>
                <h2 className="">Registry
                    </h2>
                <div className="dropdown-content">
                    <a key={Math.random()}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.amazon.com/wedding/share/GabbySebastianM"
                        style={{ textDecoration: 'none' }}>
                            <h2 className="HeaderMobileDropDown2Element">Amazon Registry</h2>
                    </a>
                    <a key={Math.random()}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.artmill.com/gift-cards/"
                        style={{ textDecoration: 'none' }}>
                        <h2 className="HeaderMobileDropDown2Element">ArtMill GiftCard</h2>
                    </a>
                </div>
            </div>
        )
        return (
            <div>
                <div className="HeaderMobile">
                    <div className="HeaderMobileTopBar">
                        <div className="HeaderIconContainer">
                            <div className={change ? "containerHeaderIcon" : "change"} onClick={updateIcon}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <div className="HeaderMobileTitle">
                            <h2>Sebastian + Gabrielle</h2>
                        </div>
                    </div>
                    <div className={change ? "HeaderMobileDropDownHidden" : "HeaderMobileDropDown"}>
                        {options}
                    </div>
                </div >
            </div>
        );
    }
    else {/*
        let headerItems = []
        for (let i = 0; i < headerValues.length; i++) {
            headerItems.push(
                <NavHashLink
                    to={"/#" + headerValues[i].value}
                >
                    <Button className="HeaderButton"
                        variant="light"
                        onClick={changeHeader}
                        value={headerValues[i].value}
                    >
                        {headerValues[i].text}
                    </Button>
                </NavHashLink>
            )
        }
        headerItems.push(
            <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.com/wedding/share/GabbySebastianM"
                style={{ textDecoration: 'none' }}>
                <Button className="HeaderButton"
                    variant="light"
                    onClick={changeHeader}
                    value="registry"
                >
                    Registry
                </Button>
            </a>
        )
        return (
            <div className="HeaderContainter">
                <div className="HeaderContainterIcons">
                    {headerItems}
                </div >
            </div >
        );*/
        let headerItems = []
        for (let i = 0; i < headerValues.length; i++) {
            headerItems.push(
                <Link key={Math.random()}
                    to={"/" + headerValues[i].value}
                >
                    <button className="headerButton"
                        onClick={changeHeader}
                        value={headerValues[i].value}
                    >
                        {headerValues[i].text}
                    </button>
                </Link>
            )
        }
        headerItems.push(
            // <a key={Math.random()}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     href="https://www.amazon.com/wedding/share/GabbySebastianM"
            //     style={{ textDecoration: 'none' }}>
            //     <button className="headerButton HeaderDropDown noBorder"
            //         onClick={changeHeader}
            //         value="registry"
            //     >
            //         Registry

            //     </button>
            // </a>
            <div className="dropdown"   key={Math.random()}>
                <button className="headerButton noBorder">Registry
                    </button>
                <div className="dropdown-content">
                    <a key={Math.random()}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.amazon.com/wedding/share/GabbySebastianM"
                        style={{ textDecoration: 'none' }}>
                        <button className="headerButton HeaderDropDown noBorderBottom"
                        >
                            Amazon Registry
        
                        </button>
                    </a>
                    <a key={Math.random()}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.artmill.com/gift-cards/"
                        style={{ textDecoration: 'none' }}>
                        <button className="headerButton HeaderDropDown"
                        >
                            ArtMill GiftCard
        
                        </button>
                    </a>
                </div>
            </div>

        )
        return (
            <div className="HeaderContainter">
                <div className="HeaderContainterIcons">
                    {headerItems}
                </div >
            </div >
        );


    }

}
export default Header;