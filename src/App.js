import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import Settings from './pages/Settings/Settings';
// import FirstSetup from './pages/FirstSetup/FirstSetup';
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
// import {PersonalData} from './'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import './theme/tw-base.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


import './theme/tw-components.css';


/* Theme variables */
import './theme/variables.css';

import './theme/tw-utilities.css';

import { Provider as AuthProvider, Context as AuthContext } from './context/AuthContext';
import {useContext} from "react";

const CustomRoute = () => {
  const {state} = useContext(AuthContext);

  return (
      <Route
          exact
          path="/home"
          render={ () => state.didOnboarding ? <Home /> : <Onboarding /> }
      />
  );
};

const App = () => (
  <AuthProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/onboarding">
            <Onboarding />
          </Route>
          <CustomRoute />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AuthProvider>
);

export default App;
