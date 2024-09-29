import Card from "./Card.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => 
    {
        const [resList1,setList1] = useState([]);

        useEffect(()=>{
        fetchData();
        },[]);

        const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          
          setList1(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          console.log(resList1);
          

        };

        

       

        //Conditional Rendering 
        if(resList1.length === 0)
        {
            return <Shimmer/>
        }

        
        
        


        return (
           <div className="body">
           <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList = resList1.filter(
                    (res) => res.info.avgRating > 4.1
                );
                setList1(filteredList);
                
            }}
            >Top Rated Hotels</button>
           </div>
           <div className="rcard">
            { 
        
            resList1.map((person) => (
                <Card key={person.info.id} resData={person}/>
            ))
            }
             
             
             
           </div>
           </div>
        );
    };

export default Body;