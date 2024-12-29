import CardSection from '../innerPages/CardSection';
import {data} from './data.js'
// import {useNavigate }  from 'react-router-dom';
// import img1 from '../assets/img1.webp';
// import img2 from '../assets/img2.webp';
// import img3 from '../assets/img3.webp';
// import img4 from '../assets/img4.webp';
// import img5 from '../assets/img5.webp';
// import img6 from '../assets/img6.webp';
// import img7 from '../assets/img7.webp';
// import img8 from '../assets/img8.webp';

function Home() {
  // const navigate = useNavigate ();

    // const cardData = [
    //     {
    //       id:1,
    //         img: img1,
    //         title: "movie_1",
    //         description: "This is a description that appears when you hover over the image.",
    //         director: "jai mata  di"
    //     },
    //     {
    //         img: img2,
    //         title: "movie_2",
    //         description: "This is a description that appears when you hover over the image.",
    //         director:"vwhsj"
    //     },{
    //         img: img3,
    //         title: "movie_3",
    //         description: "This is a description that appears when you hover over the image."
    //     },{
    //         img: img4,
    //         title: "movie_4",
    //         description: "This is a description that appears when you hover over the image."
    //     },{
    //         img: img5,
    //         title: "movie_5",
    //         description: "This is a description that appears when you hover over the image."
    //     },{
    //         img: img6,
    //         title: "movie_6",
    //         description: "This is a description that appears when you hover over the image."
    //     },{
    //         img: img7,
    //         title: "movie_7",
    //         description: "This is a description that appears when you hover over the image."
    //     },{
    //         img: img8,
    //         title: "movie_8",
    //         description: "This is a description that appears when you hover over the image."
    //     },
    // ]
    const cardData = data;
    console.log("data", data)

 
  return (
    <main>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex justify-start items-center"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/d7/3c/d2/d73cd291faa215d397a2eabd6f8f0227.jpg)",
        }}
      >
        <div className="flex flex-col ">
          <h1 className="font-extrabold text-5xl text-white absolute bg-transparent  ">
            Hit the Movie Which, <br /> you are looking
          </h1>
        
        </div>
      </div>
     <div className="my-6 flex justify-center items-center flex-wrap gap-5">
         <CardSection cardData={cardData} /> 
         {/* onCardClick={handleCardClick} */}
     </div>
    </main>
  );
}

export default Home;
