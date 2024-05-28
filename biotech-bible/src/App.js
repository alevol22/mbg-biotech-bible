import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/LandingPage";
import List from "./pages/ListView";
import Course from "./pages/SingleCourse";
import NotFound from "./pages/404";

function App() {
  return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/list" element={<List />} />
				<Route path="/course-test"element={<Course />} />
			</Routes>
		</Router>
	);
}

export default App;
