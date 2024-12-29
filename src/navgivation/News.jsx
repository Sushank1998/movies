// import axios from "axios";
// import { useState, useEffect } from "react";
// import Newscard from "../innerPages/Newscard";
// import SeriseCard from "../innerPages/SeriseCard";
import Handing from "./Handilng";

function News() {
  
  const {news,error,loading} = Handing(`https://newsapi.org/v2/everything?q=tesla&from=2024-11-29&sortBy=publishedAt&apiKey=b6102618bf304a49bb3887e5fb98dd7d`)

  console.log("news: " + news)
  
  if(error) {
    return <h1 className="flex justify-center items-center h-[200px] text-3xl">Error fetching news</h1>;
  }
  if(loading) {     
    return <h1 className="flex justify-center items-center h-[200px] text-3xl">loading... fetching news</h1>;
  }
  return (
    <div >
      <h1 className="text-3xl">News : {news.length}</h1>
      <div>
      {news.map((article, index) => {
        const { id,title, author, source, publishedAt, description } = article; // Destructure necessary fields
        return (
          <div key={index} className="news-article">
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h2>{author ? `Author: ${author}` : 'Author not available'}</h2>
            <p>{description}</p>
            <p>Source: {source.name}</p>
            <p>Published on: {new Date(publishedAt).toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default News;
