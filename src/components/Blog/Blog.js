import React from "react";
import BlogCard from "./BlogCard";
import blogs from "./blogsData"; // Import blogs from a separate data file

const Blog = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          Exploring the frontiers of Artificial Intelligence: Insights,
          Innovations, and Impact
        </h2>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* More Articles Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
