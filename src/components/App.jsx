import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Profile from "./Profile";
import Login from "./Login";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Feed from "./Feed";
import Connections from "./Connections";
import Requests from "./Requests";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
