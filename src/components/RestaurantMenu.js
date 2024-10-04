import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {F_URL} from "../utils/constants";


const RestaurantMenu = () => 
{
    const[resInfo,setInfo] = useState(null);

    const { resId } = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => 
    {
        const data = await fetch(F_URL + resId);
        const json = await data.json();
        console.log(json);

        setInfo(json.data);
        
    };

    if(resInfo === null)
    {
        return <Shimmer/>
    }

    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    
    
    
    return (
      
      <div className="menu">
        {/* <button className="btnv" onClick={()=>{
            const pureVeg = itemCards.filter( res => res.card.info.isVeg = true);
            itemCards(pureVeg);
        }}>Veg</button> */}

        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h3>{avgRating}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map( item => <li>{item.card.info.name} - {" Rs : "}{item.card.info.price/100 || item.card.info.defalutPrice/100}</li>)};
        </ul>
      </div> 
    );
};

export default RestaurantMenu;