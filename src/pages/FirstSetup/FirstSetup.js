import React, { useState, useRef, useContext } from 'react';
import { 
    IonContent, 
    IonPage, 
    IonButtons, 
    IonButton, 
    IonSlides, 
    IonSlide, 
    IonIcon, 
    useIonViewWillEnter
} from '@ionic/react';
import {Context as AuthContext} from './../../context/AuthContext';
import UserSetupHeader from './../../components/UserSetupHeader/UserSetupHeader';

const FirstSetup = () => {
    const { state, userConfigured, noUser } = useContext(AuthContext);
    return (
        <IonPage className="first-setup">
            <UserSetupHeader />
            <IonContent fullscreen>
                <IonSlides pager={false}>
                    <IonSlide>
                        <div className="slide">
                                        <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
                            <h2>Test</h2>
                            <p>User Sate <b> :</b> {state.userData}</p>
                            
                    <IonButton color="primary" onClick={ () => userConfigured("test") } >Set User State</IonButton>
                        </div>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default FirstSetup;