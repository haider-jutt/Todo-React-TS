import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }, key) => (
          <Route
            key={key}
            path={path}
            element={<Component />}
          />
        ))}
      </Routes>
    </Router>
  )
}
export default RouteComponent;