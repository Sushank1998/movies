function Movies_Card({ country,index }) {
//   console.log("shushi=>>", country);
  if(!country) return null;
  
  const flags = country.flags?.png;
  const countryName = country.name?.common;
//   const capital = country.capital ? country.capital[0] : "N/A";
//   const region = country.region;
//   const population = country.population;

  const {capital, region ,population} = country


  
  return (
    <div>
      
         <div className="rounded overflow-hidden shadow-lg flex flex-col" key={index}>
         {countryName}
         <div className="relative">
 
             <img
               className="w-full"
               src={flags}
               alt="Sunset in the mountains"
             />
   
           
         </div>
         <div className="px-6 py-4 mb-auto">
           
           <p className="text-gray-500 text-sm">
          {capital}
           </p>
         </div>
         <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
           <span
             href="#"
             className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
           >
             {/* SVG ICON */}
             <span className="ml-1 bg-transparent">Region = {region}</span>
           </span>
 
           <span
             href="#"
             className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
           >
             {/* icon */}
             <span className="ml-1">population = {population}</span>
           </span>
         </div>
       </div>
     
    </div>
  );
}

export default Movies_Card;
