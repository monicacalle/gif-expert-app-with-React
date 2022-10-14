import GifItem from "./GifItem.jsx";
import { useFetchGifs } from "./hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>category: {category}</h3>
      {isLoading && <h6>Loading...</h6>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
