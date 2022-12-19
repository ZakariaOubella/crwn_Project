import React from 'react'
import Data from "../../Data/categories.json";
import Direction from '../../Component/Direction/direction.component';
import { Link } from "react-router-dom";

const Home = () => {
    const categories = Data;
  return (
    <div>
      <Direction categories={categories} />
    </div>
  );
}
export default Home;