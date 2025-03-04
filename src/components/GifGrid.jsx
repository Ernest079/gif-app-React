import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  return (
    <>
      <h2>
        {category}
      </h2>
      {
        isLoading && (<h4>Cargando...</h4>)
      }
      
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem 
            key = {image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}
