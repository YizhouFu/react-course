import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  //localhost:3000/

  return (
    (
      <div className="App">
        <h1>My Todos</h1>
        <Todo text="one" />
        <Todo text="two" />
      </div>
    ),
    (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact={true}>
              <AllMeetupsPage />
            </Route>
            <Route path="/new-meetups">
              <NewMeetupsPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
          </Switch>
        </Layout>
      </div>
    )
  );
}

export default App;
