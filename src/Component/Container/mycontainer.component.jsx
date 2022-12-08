import React from 'react'
import "./conainer.styles.scss";
import CategoryItem from "../Category_item/category-item.component";
import Data from '../../Data/categories.json'

export default function Container() {
    const categories = Data
  return (
    <div className="categories-container">
      {
      categories.map(( category ) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
