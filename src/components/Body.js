import Card from "./Card.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


const Body = () => 
    {
        const [resList,setList] = useState([]);
        const [resFilt,setResFilt] = useState([]);
        const [searchText,setSearchText] = useState("");

        
        
        

        useEffect(()=>{
        fetchData();
        },[]);

        const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          
          
          
          setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          setResFilt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          
          

        };
        
       
        

    
        return resList.length === 0 ? <Shimmer/>:(
           <div className="body">
           <div className="filter">

            <div className="search">
               <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                 setSearchText(e.target.value);
               }}/>
               <button onClick={()=>{
                const resFilt = resList.filter((res)=> { return res.info.name.toLowerCase().includes(searchText.toLowerCase())
               });
            
            
            setResFilt(resFilt);
                
               }}>Search</button>
            </div>

            <button className="filter-btn" 
            onClick={()=>{
                const filteredList = resList.filter(
                    (res) => res.info.avgRating > 4.1
                );
                
                
                setResFilt(filteredList);
                
            }}

            
            >Top Rated Hotels</button>
           </div>
           
           <div className="rcard">
            { 
        
            resFilt.map((person) => (
                <Link key={person.info.id} to={"/restaurants/" + person.info.id}><Card  resData={person}/></Link>
            ))
            }
             
             
             
           </div>
           </div>
        );
    };

export default Body;