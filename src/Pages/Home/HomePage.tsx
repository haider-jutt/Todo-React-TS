import TodoCard from "../../Components/HomePage/TodoCard";
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div className="bg-white-900 pt-5 pb-5 min-h-screen flex flex-col justify-center items-center">
      <TodoCard />
      <Link to="/blog" className="mt-10 inline-block py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">Wanna see the Blog!</Link>
    </div>
  );
}

export default HomePage;