import React, { useState } from 'react';
import './Gallery.css';
import xMark from './../../Icons/cancel.png'

const Gallery = (props) => {
    console.log(props)
    const [galleryState, setGalleryState] = useState(
        {
            image: 0,
            cycle: false
        }

    )
    const imageClick = (event) => {
        setGalleryState(
            {
                image: event.target.id,
                cycle: true

            }
        )
    }
    const exitCycleClick = () => {
        setGalleryState(
            {
                image: galleryState.image,
                cycle: false

            }
        )
    }
    const CycleUpClick = () => {
        let newState = 0;
        if (parseFloat(galleryState.image) !== parseFloat(props.pics.length) - 1) {
            newState = (parseFloat(galleryState.image) + 1)
        }
        setGalleryState(
            {
                image: newState,
                cycle: true,

            }
        )
    }
    const CycleDownClick = () => {
        let newState = (parseFloat(galleryState.image) - 1);
        if (parseFloat(galleryState.image) === 0) {
            newState = parseFloat(props.pics.length) - 1
        }
        setGalleryState(
            {
                image: newState,
                cycle: true,

            }
        )
    }

    let LeftRow = []
    let RightRow = []
    for (let i = 0; i < props.pics.length; i += 2) {
        LeftRow.push(
            <div  key={Math.random()}
            className={(i < props.pics.length - 3) ? "pictureLeft" : "pictureLeft noBottomBorder"}>
                <img onClick={imageClick}
                    className="GalleryPictures"
                    id={i}
                    src={props.pics[i].Image}
                    alt="Not Found" />

            </div>
        )
        try {
            RightRow.push(
                <div  key={Math.random()}
                className={(i < props.pics.length - 3) ? "picture" : "picture noBottomBorder"}
                >
                    <img onClick={imageClick}
                        className="GalleryPictures"
                        id={i + 1}
                        src={props.pics[i + 1].Image}
                        alt="Not Found"
                    />


                </div>
            )
        }
        catch (e) { }

    }
    let MainContent
    if (galleryState.cycle) {
        MainContent = (
            <div className="CyclePage">
                <div className="CyclePageX"
                    onClick={exitCycleClick}>
                    <img

                        className="CyclePageXIcon"
                        src={xMark}
                        alt="Not Found"
                    >
                    </img>
                </div>
                <div className="CyclePageMain">
                    <div
                        onClick={CycleDownClick}
                        className="CyclePageMainLeftArrow">
                        <div className="arrow-left">

                        </div>
                    </div>
                    <div>
                        <p>
                            {parseFloat(galleryState.image) + 1} of {props.pics.length}
                        </p>
                        <div className="CyclePageMainImage">
                            <img
                                className="CyclePictures"
                                src={props.pics[galleryState.image].Image}
                                alt="Not Found"
                            />
                        </div>
                        <p>
                            {props.pics[galleryState.image].description}
                        </p>
                    </div>

                    <div
                        className="CyclePageMainRightArrow"
                        onClick={CycleUpClick}>
                        <div className="arrow-right">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        MainContent = (
            <div>
                <div className="GalleryTopBuffer">
                </div>
                <h3>
                    Gallery
                </h3>

                <div className="GalleryContainer">
                    <div className="pictureRow">
                        {LeftRow}
                    </div>
                    <div className="pictureRow">
                        {RightRow}
                    </div>


                </div>
            </div>
        )
    }

    return (
        <div id="gallery" className="GalleryHome">
            {MainContent}

        </div>
    )



}
export default Gallery;