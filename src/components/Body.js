import Card from "./Card.js";
import resList from "../utils/mockData.js";


const Body = () => 
    {
        return (
           <div className="body">
           <div className="search">search</div>
           <div className="rcard">
            { 
            //Most Imp Map Execution
            resList.map((rest) => (
                <Card key={rest.id} resData = {rest}/>
            ))
            }
             
             
             
           </div>
           </div>
        );
    };

export default Body;