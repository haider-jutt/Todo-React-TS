import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="bg-gray-900 pt-5 pb-5 min-h-screen flex flex-col justify-center items-center">
      <Typography className="text-4xl font-bold text-white mb-4 text-center">
        Blog
        <br />
        under Construction!
      </Typography>
      <Link to="/" className="btn">Go back to Home</Link>
    </div>
  );
};
export default Blog;