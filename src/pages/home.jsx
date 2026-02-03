import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router";

function Home({list, groups}){
    const allGroup = "All";
    const [filter, setFilter] = useState(allGroup);

    return (
        <div>
            <div className="project-filter">
                {[allGroup, ...groups].map((ele)=>{
                    return(
                        <button className={"pure-button pure-button-primary" + (filter!==ele?" filter-not-selected":"")} key={nanoid()} onClick={()=>setFilter(ele)}>
                            {ele}
                        </button>
                    );
                })}
            </div>
            <div className="project-container">
                {list.filter((ele)=>filter === ele.group || filter === allGroup).map((ele)=>{
                    const {name, index, folder} = ele;

                    return (
                        <Link to={'/view/'+index} key={nanoid()} className="project">
                            <h3>{name}</h3>
                            <img src={'/gallery/'+folder+'/'+folder+'_Thumbnail_Wide.png'} alt={'Thumbnail of ' + name} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;