import { nanoid } from "nanoid";

function Filters({list, select, handleClick}){
    return (
        <div className="project-filter">
            {list.map((ele, n)=>{
                return(
                    <button className={"pure-button pure-button-primary" + (select!==ele?" filter-not-selected":"")} key={nanoid()} onClick={()=>handleClick(ele, n)}>
                        {ele}
                    </button>
                );
            })}
        </div>
    );
}

export default Filters;