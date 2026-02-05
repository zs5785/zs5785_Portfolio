import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router";
import Filters from "../components/filter";
import Bubble from "../components/bubble";

function Home({list, groups}){
    const allGroup = "All";
    const [filter, setFilter] = useState(allGroup);

    return (
        <div>
            <Filters list={[allGroup, ...groups]} select={filter} handleClick={(ele)=>setFilter(ele)}/>
            <div className="project-container">
                {list.filter((ele)=>filter === ele.group || filter === allGroup).map((ele)=>{
                    const {name, inprogress, index, folder} = ele;

                    return (
                        <Link to={'/view/'+index} key={nanoid()} className="project">
                            <h3>{name}</h3>
                            <img src={'/gallery/'+folder+'/'+folder+'_Thumbnail_Wide.png'} alt={'Thumbnail of ' + name} />
                            {inprogress&&<Bubble className="inprogress">Inprogress</Bubble>}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;