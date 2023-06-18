import TodoCard from "../../Components/HomePage/TodoCard";
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <div className="bg-white-900 pt-5 pb-5 min-h-screen flex flex-col justify-center items-center">
      <Link to="/blog" className="btn">Wanna see the Blog!</Link>
      <TodoCard />
    </div>
  );
}

export default HomePage;