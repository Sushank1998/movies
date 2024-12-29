import { useNavigate } from "react-router-dom";

function CardSection({cardData}) {
  const navigate=useNavigate()
    console.log("cardData==>", cardData)
      const handleCardClick = (movieDetails) => {
      navigate('/movie-detail', { state: { movieDetails } });
    }
  return (
    <div className="flex flex-wrap gap-5">
        {cardData.map((card , index ) =>(
            <div className="max-w-xs mx-auto flex justify-center items-center g-10 cursor-pointer" key={index} onClick={() => handleCardClick(card)}>
                <div className="group relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg" 
                 >
            <img
              src={card.img}
              
              alt="Card Image"
              className="w-full h-full object-cover group-hover:opacity-30 transition-opacity duration-300"
            />
  
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-center">
              <div className="p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2">
                {card.description}
                </p>
              </div>
            </div>
          </div>
          
      </div>
        ))}
       
        
    </div>
  )
}

export default CardSection
