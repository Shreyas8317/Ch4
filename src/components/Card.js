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

export default Card;