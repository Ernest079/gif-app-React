import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    'Haikyuu'
  ]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if(categories.includes(newCategory)){
      return;
    }
    setcategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* Ya */}
      <AddCategory 
        onNewCategory = {(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        // Ya
        <GifGrid 
          key = {category} 
          category={category}
        />
      ))}
    </>
  );
}
