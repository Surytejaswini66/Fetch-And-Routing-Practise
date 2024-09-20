import './index.css';

const BlogItem = ({ blog }) => (
  <div className="blog-item">
    <h2>{blog.title}</h2>
    <p>{blog.author}</p>
    <p>{blog.description}</p>
  </div>
);

export default BlogItem;
