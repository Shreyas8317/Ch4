const Card = (props) => {
    const {resData} = props;
       
    return (
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0" 
         }}>
            
            
          <img alt="c-image" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
          <h3>{resData.info.name}</h3>
          <h4>{resData.info.cuisines}</h4>
          <h4>{resData.info.avgRating}</h4>
          
          
        </div>

      
    );
};

export default Card;