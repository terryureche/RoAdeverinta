import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Settings from './pages/Settings/Settings';
import FirstSetup from './pages/FirstSetup/FirstSetup';
import Home from "./pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import './theme/tw-base.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';


import './theme/tw-components.css';


/* Theme variables */
import './theme/variables.css';

import './theme/tw-utilities.css';

import { Provider as AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            {/* <Settings /> */}
            {/*<FirstSetup />*/}
            <Home/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AuthProvider>
);

export default App;
