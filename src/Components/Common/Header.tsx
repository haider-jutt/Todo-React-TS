import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-semibold">Todo App!</a>
            <a href="/blog" className="inline-block mx-3 py-1 px-4 text-white  rounded-lg  hover:bg-gray-700">Blog</a>
          </div>
          <div className="flex items-center">
            <button>
              <Avatar size={40} className="bg-blue-800" icon={<UserOutlined />} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;