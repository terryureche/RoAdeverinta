import React, {useCallback, useContext, useRef, useState} from 'react';
import {
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonPage,
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Onboarding.css';
import {Context as AuthContext} from './../../context/AuthContext';
import {PersonalData} from './../../components/PersonalDataSetup/PersonalDataSetup';
import {arrowBackSharp as iconPrev, arrowForwardSharp as iconNext} from 'ionicons/icons';
import IntroInformation from "../../components/IntroInformation/IntroInformation";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";

const Onboarding = () => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    const sliderEl = useRef(null);

    const lastStep = 2
    const [showButton, setShowButton] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const {didOnboarding, state} = useContext(AuthContext);

    const onSlideChanged = useCallback(async e => {
        const currentStep = await e.target.getActiveIndex() + 1;
        setCurrentStep(currentStep);

    });

    const nextSlide = () => {
        sliderEl.current.slideNext();
    };

    const prevSlide = () => {
        sliderEl.current.slidePrev();
    }

    return (
        <IonPage>
            <IonContent fullscreen={true}>
                <IonSlides
                    options={slideOpts}
                    onIonSlideDidChange={onSlideChanged}
                    ref={sliderEl}
                >
                    <IonSlide>
                        <IntroInformation/>
                    </IonSlide>
                    <IonSlide>
                        <TermsAndConditions/>
                    </IonSlide>
                    <IonSlide>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Date Personale</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <PersonalData/>
                    </IonSlide>
                </IonSlides>
            </IonContent>
            <IonFooter>
                <IonToolbar className="transparent-toolbar">
                    <div className="flex w-full items-center justify-between px-3">
                        <span className="text-medium-default">{currentStep} / {lastStep}</span>
                        <div className="flex items-center">
                            {
                                currentStep > 1 &&
                                <IonButton
                                    size="small"
                                    shape="round"
                                    fill="clear"
                                    color="medium"
                                    className="mr-2"
                                    onClick={prevSlide}
                                >
                                    <IonIcon slot="icon-only" icon={iconPrev}/>
                                </IonButton>
                            }
                            <IonButton
                                size="small"
                                shape="round"
                                fill="clear"
                                onClick={nextSlide}
                            >
                                <IonIcon slot="icon-only" icon={iconNext}/>
                            </IonButton>
                        </div>
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Onboarding;
