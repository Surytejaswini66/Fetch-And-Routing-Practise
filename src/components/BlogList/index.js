import { Link } from 'react-router-dom';
import BlogItem from '../BlogItem';
import './index.css';

const BlogList = ({ blogs }) => (
  <ul className="blog-list">
    {blogs.map(blog => (
      <li key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <BlogItem blog={blog} />
        </Link>
      </li>
    ))}
  </ul>
);

export default BlogList;
