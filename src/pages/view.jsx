import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from '../components/imageGallery';
import { nanoid } from "nanoid";
import Bubble from "../components/bubble";


function View({list}){
    const descElement = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    const index = Number.parseInt(id);
    const {name, category, framework, projectType, duration, roles, features, desc, link, repo, folder, videos, imageCount} = list.at(index);

    const [images, setImages] = useState([]);

    useEffect(()=>{
        if (!id || !Number.isInteger(index) || index < 0 || index >= list.length){
            navigate('/');
            return;
        }

        if (imageCount > 0){
            const path = '/gallery/'+folder+'/'+folder+'_';
            setImages([...Array(imageCount).keys()].map((_, index)=>path+(index+1)+'.png'));
        }

        descElement.current.innerHTML = desc;
    }, [id]);

    return (
        <div>
            <h2>{name}</h2>
            <ImageGallery key={nanoid()} videos={videos} images={images} name={name}/>
            <div className="p-details">
                <div className="overview">
                    <div className="p-links pure-g">
                        <button aria-label="Try Demo" className={"pure-button pure-button-primary" + (repo ? " pure-u-1-2" : " pure-u-1-1")}>
                            <i className="fa-solid fa-play"></i>
                        </button>
                        {repo && 
                        <button aria-label="Github Repo" className="pure-button pure-button-primary pure-u-1-2">
                            <i className="fa-brands fa-github"></i>
                        </button>}
                    </div>
                    <div>Features</div>
                    <div className="bubble-container">{features.map((ele)=>{
                        return (
                            <Bubble key={nanoid()}>
                                {ele}
                            </Bubble>
                        );
                    })}</div>
                    <div>Category</div>
                    <div>{category}</div>
                    <div>Framework</div>
                    <div>{framework}</div>
                    <div>Project Type</div>
                    <div>{projectType}</div>
                    <div>Duration</div>
                    <div>{duration}</div>
                    <div>My Roles</div>
                    <div className="bubble-container">{roles.map((ele)=>{
                        return (
                            <Bubble key={nanoid()}>
                                {ele}
                            </Bubble>
                        );
                    })}</div>
                </div>
                <div className="description" ref={descElement}></div>
            </div>
        </div>
    );
}

export default View;