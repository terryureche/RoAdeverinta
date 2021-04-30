import React, {useContext, useState, useCallback} from 'react';
import {IonButton, IonContent, IonFooter, IonPage, IonSlide, IonSlides, IonToolbar,} from '@ionic/react';
import './Onboarding.css';
import {Context as AuthContext} from './../../context/AuthContext';
import {PersonalData} from './../../components/PersonalDataSetup/PersonalDataSetup';
const Onboarding = () => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    const lastStep = 2
    const [showButton, setShowButton] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const {didOnboarding, state} = useContext(AuthContext);

    const onSlideChanged = useCallback(async e => {
        const currentStep = await e.target.getActiveIndex() + 1;
        setCurrentStep(currentStep);

        console.log("changed", currentStep, lastStep);

    });

    return (
        <IonPage>
            <IonContent>
                <IonSlides options={slideOpts} onIonSlideDidChange={onSlideChanged}>
                    <IonSlide>
                        <div className="w-full h-full flex flex-col">
                            <div className="flex px-14 justify-center">
                                <img src="assets/img/undraw_terms.svg" className="w-1/3 tablet:w-1/4"
                                     alt="terms and conditions illustration"/>
                            </div>
                            <h1>Salut!</h1>
                        </div>
                    </IonSlide>
                    <IonSlide>
                        {/* <div className="w-full h-full flex flex-col">
                            <div className="flex px-14 justify-center">
                                <img src="assets/img/undraw_terms.svg" className="w-1/3 tablet:w-1/4"
                                     alt="terms and conditions illustration"/>
                            </div>
                        </div> */}

                        <PersonalData/>
                    </IonSlide>
                </IonSlides>
            </IonContent>
            <IonFooter>
                <IonToolbar className="transparent-toolbar">
                    <div className="flex w-full items-center justify-around">
                        <span className="text-medium-default">{currentStep} / {lastStep}</span>
                        {
                            currentStep === lastStep &&
                            <IonButton
                            color="primary"
                            shape="round"
                            >
                            Urmatorul
                            </IonButton>
                        }
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Onboarding;