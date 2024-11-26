import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-md">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={`Image for ${blog.title}`}
        className="h-48 w-full object-cover"
        loading="lazy"
      />

      {/* Blog Content */}
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          {blog.date} / {blog.author}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="text-sm text-blue-600 font-medium">
          {blog.tags.map((tag, index) => (
            <span key={index}>
              {tag}
              {index < blog.tags.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
