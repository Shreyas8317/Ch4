import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => 
{
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src="https://www.logopeople.in/wp-content/uploads/2022/10/bahama-eats-N-YC-USA-1.png"/>

          </div>
          <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
           </ul>
            
          </div>
        </div>

    );
};




const Card = (props) => {
    const {resData} = props;
    

    return (
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0" 
         }}>
          <img className="res-logo"
          alt="res-logo" src={resData.image}/>
          <h3>{resData.name}</h3>
          <h4>{resData.cuisines}</h4>
          <h4>{resData.stars}</h4>
          
          
        </div>
    );
};

const resList = [{
    image : "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1.jpg",
    name : "Kushboo",
    cuisines : "Maharashtrian,North Indian",
    stars:"4.9",
    id : 1,
},
{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaPPdhB8wUOwMI-xppN6eKa577Mxdr2Mdkw&s",
    name : "Rangoli",
    cuisines : "Maharashtrian,North Indian",
    stars:"4.7",
    id : 2,
}];

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

const AppLayout = () => 
{
    return (
         <div className="app">
         <Header/>
         <Body/>

         
         </div>
     );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)