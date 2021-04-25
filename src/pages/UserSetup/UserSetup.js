import { 
    IonContent, 
    IonPage,
    IonButton,
    IonTextarea
} from '@ionic/react';
import React from 'react';
import './UserSetup.css';

import UserSetupHeader from './../../components/UserSetupHeader/UserSetupHeader';
import {GetPersonalData, SetPersonalData} from './../../Hooks/storagePersonalData';

const UserSetup = () => {
    // const [userData] = GetPersonalData();
    const [personalData, setPersonalData] = SetPersonalData("");


    let gigelFct = () => {
        setPersonalData("testValue");
    }

  return (
    <IonPage>
      <IonContent fullscreen>
        <UserSetupHeader />
        <IonButton> Save Data </IonButton>
        <IonButton onClick={gigelFct}> Get Data </IonButton>
        <IonTextarea value={personalData}></IonTextarea>
      </IonContent>
    </IonPage>
  );
};

export default UserSetup;
