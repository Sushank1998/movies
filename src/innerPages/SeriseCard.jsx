

function SeriseCard({ movie }) {
  const {
    mal_id, 
    images: { jpg: { image_url: imgUrl } },
    titles: [{ title }],
    aired: { string: releaseDate },
    synopsis: overview,
  } = movie;

  // Log the extracted movie details
  // console.log({
  //   mal_id,
  //   imgUrl,
  //   title,
  //   releaseDate,
  //   overview,
  // });

  return (
    <div className="border p-4 rounded-lg shadow-lg" >
      <img src={imgUrl} alt={title} className="w-full h-64 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{releaseDate}</p>
      {/* <p className="mt-2 text-sm">{overview}</p> */}
    </div>
  );
}

export default SeriseCard;
