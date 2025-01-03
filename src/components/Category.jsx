import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Helmet } from "react-helmet-async";

const Category = () => {
  const params = useParams();
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Next Chapter | Book Category</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl text-blue-500 my-8">
        Book Category - {params.category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10">
        {data.map((d) => (
          <CategoryCard key={d._id} book={d}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
