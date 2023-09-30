


const VisulCard = ({card}) => {

    const{Title,image,category}= card;
    return (
        <div className="py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
             <div className="card-body">
                <h2 className="card-title">
                  {Title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{category}</p>
    
  </div>
</div>
        </div>
    );
};

export default VisulCard;