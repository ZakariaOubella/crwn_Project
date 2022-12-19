import React from "react";
import "./direction.styles.scss";
import CategoryItem from "../Category_item/category-item.component";

export default function Direction({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
