import { useState, useEffect } from 'react';
import BlogList from '../BlogList';
import Loader from 'react-loader-spinner';
import './index.css';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs');
      const data = await response.json();
      setBlogs(data);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home-container">
      <h1>Wade Warren</h1>
      <img src="https://via.placeholder.com/150" alt="profile" />
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#2f4f4f" height={80} width={80} />
        </div>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default Home;
