import { Route } from 'react-router-dom';

import {Auth, Home} from 'pages';

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/im">
        <Home />
      </Route>
      <Route path={["/", "/login", "/register"]}>
        <Auth />
      </Route>      
    </div>
  );
}

export default App;
