import { Typography } from "antd";

const ErrorPage = () => {
  return (
    <div className="bg-gray-900 pt-5 flex flex-col min-h-screen pb-5 flex flex-col justify-center items-center">
      <div style={{ flexDirection: 'column' }}>
        <Typography className="text-4xl font-bold text-white mb-4 text-center">
          404
          <br />
          Page Not Found!
        </Typography>
      </div>
      <a href="/" className="mt-5 inline-block py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">Go back to Home</a>
    </div>
  );
};
export default ErrorPage;