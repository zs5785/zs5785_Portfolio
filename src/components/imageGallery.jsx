import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

function ImageGallery({videos, images, name}){
    const [index, setIndex] = useState(0);
    const [showControl, setShowControl] = useState(false);
    const videosNum = videos.length;
    const maxLength = videosNum + images.length;

    function hoverHandle(){

    }

    return (
        <div className="gallery">
            <div>
                {
                    videos.map((ele, i)=>{
                        return (
                            <div className="vid-container">
                                <iframe key={nanoid()} hidden={index !== i} className="yt-video" src={ele} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        );
                    })
                }
                {
                    images.map((ele, i)=>{
                        return (
                            <img key={nanoid()} hidden={index-videosNum !== i} className="pure-img" src={ele} alt={name+" No."+(index - videosNum + 1)+" Image"} />
                        );
                    })
                }
            </div>

            <button className="prev-btn pure-button" onClick={()=>setIndex(index===0?maxLength-1:index-1)}>{"<-"}</button>
            <button className="next-btn pure-button" onClick={()=>setIndex((index+1)%maxLength)}>{"->"}</button>
            <div className="index-btn-container">
                <div>
                    {
                        [...Array(maxLength).keys()].map((ele, n)=>{
                            return (
                                <div className={"index-btn" + (index === n ? " index-btn-active" : "")} onClick={()=>setIndex(n)}></div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;