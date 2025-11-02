
import { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import "./index.css";


const Filters=()=>{

    const [isFilterOpened,setIsFilterOpened]=useState(false);


    const getFilteElement=(text)=>{
        return (
            <div>
                <div className="filter-heading-text" onClick={()=>setIsFilterOpened(!isFilterOpened)}>
                    <p className="filter-heading-text">{text}</p>
                    {isFilterOpened?<IoIosArrowUp />:<IoIosArrowDown />}
                </div>
                <p className="filte-all-text">ALL</p>
                {
                    isFilterOpened?(<>
                    <p className="filter-unselect-text">Unselect All</p>
                <div>
                    <input type="checkbox"/>
                    <label className="label-text">MEN</label> 
                </div>
                <div>
                    <input type="checkbox"/>
                    <label className="label-text">WOMEN</label> 
                </div>
                <div>
                    <input type="checkbox"/>
                    <label className="label-text">BABY & KIDS</label> 
                </div>
                    </>):""
                }
                <hr/>
            </div>
        )
    }



    return(
        <div className="filters-component-container">
            <div>
                <input type="checkbox"/>
                <label className="label-text">CUSTOMIZABLE</label> 
            </div>
            <hr/>
            {getFilteElement("IDEAL FOR")}
            {getFilteElement("OCCASION")}
            {getFilteElement("WORK")}
            {getFilteElement("FABRIC")}
            {getFilteElement("SEGMENT")}
            {getFilteElement("SUITABLE FOR")}
            {getFilteElement("RAW MATERIAL")}
            {getFilteElement("PATTERN")}
        </div>
    )
}

export default Filters;