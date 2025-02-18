import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {

  const [images, setimages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setimages(newImages);
  }

  useEffect(() => {
    getImages();    
  },[]);

  return (
    <>
      <h4>
        {category}
      </h4>
      {images.map((image) => (
        <div key={image.id}>
          <ol>{image.title}</ol>
        </div>
      ))}
    </>
  )
}
