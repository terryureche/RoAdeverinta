import React, { useState, useRef, useContext, useCallback } from 'react';
import { 
    IonContent, 
    IonPage, 
    IonButtons, 
    IonButton, 
    IonSlides, 
    IonSlide, 
    IonIcon, 
    useIonViewWillEnter,
    IonFooter,
    IonToolbar
} from '@ionic/react';
import {Context as AuthContext} from './../../context/AuthContext';
import UserSetupHeader from './../../components/UserSetupHeader/UserSetupHeader';
import './FirstSetup.css';

const FirstSetup = () => {
    const [ showFooterButton, setShowFooterButton ] = useState(false);
    const { state, userConfigured, noUser } = useContext(AuthContext);
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    //we have to take a look on the slideDidChange event seems to be a flicker on the button 
    let confirmButtonVisibilityFct =  useCallback(async (e) => {
        const index = await e.target.getActiveIndex();
        const totalSlidesNr = await e.target.length();
        
        index + 1 === totalSlidesNr ? setShowFooterButton(true) : setShowFooterButton(false);
    }, [])

    let confirmButtonVisibilityCss = showFooterButton ? {visibility: "inherit"} : {visibility: "hidden"};
    return (
        <IonPage className="first-setup">
            {/* <UserSetupHeader /> */}
            <IonContent fullscreen scrollY={false}>
                <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={confirmButtonVisibilityFct.bind(setShowFooterButton)}>
                    <IonSlide>
                        <div className="slide">
                            <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
                            <h2>Welcome to our appppppp</h2>
                            <p>Bla bla {showFooterButton}  </p>
                        </div>
                    </IonSlide>
                    <IonSlide>
                        <div className="slide">
                            <img src="assets/img/terms.png" alt="" className="slide-image" />
                            <h2>Gigel2</h2>
                            <p>Bla bla22  {showFooterButton}</p>
                        </div>
                    </IonSlide>
                    <IonSlide >
                        <div className="slide">
                            <img src="assets/img/terms2.png" alt="" className="slide-image" />
                            <h2>Agreement</h2>
                            <p>Bla bla22  {showFooterButton}</p>
                        </div>

                    </IonSlide>
                </IonSlides>
            </IonContent>
             <IonFooter>
                <IonToolbar>
                    <IonButton className="footer-button" style={confirmButtonVisibilityCss} color="primary" expand="full" onClick={() =>{}}> Confirm </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default FirstSetup;