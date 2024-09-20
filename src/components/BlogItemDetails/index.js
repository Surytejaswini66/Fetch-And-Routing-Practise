import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './index.css';

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      setBlogDetails(data);
      setIsLoading(false);
    };
    fetchBlogDetails();
  }, [id]);

  return (
    <div className="blog-details-container">
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#2f4f4f" height={80} width={80} />
        </div>
      ) : (
        <div className="blog-details">
          <h1>{blogDetails.title}</h1>
          <img src={blogDetails.image_url} alt={blogDetails.title} />
          <p>{blogDetails.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogItemDetails;
