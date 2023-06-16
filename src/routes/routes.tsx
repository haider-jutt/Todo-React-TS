import ErrorPage from "../Pages/404Page";
import Blog from "../Pages/Blog/Blog";
import HomePage from "../Pages/Home/HomePage";

export const routes = [
  { path: "/", Component: HomePage, isPublic: true },
  { path: "/blog", Component: Blog, isPublic: true },
  { path: "/*", Component: ErrorPage, isPublic: true },
];