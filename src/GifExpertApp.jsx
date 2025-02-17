import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    'Haikyuu', 'Adventure Time'
  ]);

  const onAddCategory = () => {
    setcategories(['Naruto', ...categories]);
    // console.log(categories);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory addCategory = {setcategories}/>
      {/* Listado de Gif */}
      <button onClick={onAddCategory}>
        Agregar
      </button>
      <ol>
        {categories.map(category => {
          return <li key = {category}>{category}</li>
        })}
      </ol>
        {/* Gif item */}
    </>
  );
}
