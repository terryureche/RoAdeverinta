import React, {useCallback, useContext, useRef, useState} from 'react';
import {
    IonButton,
    IonContent,
    IonFooter,
    IonIcon,
    IonPage,
    IonSlide,
    IonSlides,
    IonToolbar,
    useIonToast
} from '@ionic/react';
import './Onboarding.css';
import {Context as AuthContext} from './../../context/AuthContext';
import {PersonalData} from './../../components/PersonalDataSetup/PersonalDataSetup';
import {arrowBackSharp as iconPrev, arrowForwardSharp as iconNext} from 'ionicons/icons';
import IntroInformation from "../../components/IntroInformation/IntroInformation";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
import SignaturePad from "../../components/SignaturePad/SignaturePad";

const Onboarding = () => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        allowTouchMove: false
    };
    const sliderEl = useRef(null);
    const [present, dismiss] = useIonToast();

    const lastStep = 5
    const [showButton, setShowButton] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const {updateUserData, state} = useContext(AuthContext);

    const isFormComplete = () => {
        const requiredFields = ['name', 'birthDate', 'placeOfBirth', 'homeAddress', 'residence'];
        for (let key of Object.keys(state.userData)) {
            if (requiredFields.includes(key) && (null == state.userData[key] || '' === state.userData[key].trim())) {
                return false;
            }
        }

        return true;
    };

    const showIncompleteFormToast = message => {
        present({
            message,
            buttons: [
                {text: 'ok', handler: () => dismiss()}
            ]
        });
    };

    const onSlideChanged = useCallback(async e => {
        const currentStep = await e.target.getActiveIndex() + 1;
        setCurrentStep(currentStep);
    });

    const nextSlide = () => {
        if (currentStep === 3 && !isFormComplete()) {
            showIncompleteFormToast("Toate campurile sunt obligatorii");

            return;
        }
        if (currentStep === 4 && !state.userData.signature) {
            showIncompleteFormToast("Semnatura este necesara");

            return;
        }
        sliderEl.current.slideNext();
    };

    const prevSlide = () => {
        sliderEl.current.slidePrev();
    }

    const onSignatureAcquired = signature => {
        updateUserData({...state.userData, signature});
    }

    const onSignatureCleared = () => {
        updateUserData({...state.userData, signature: null});
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
                        <PersonalData/>
                    </IonSlide>
                    <IonSlide>
                        <SignaturePad getSignature={onSignatureAcquired} onClear={onSignatureCleared}/>
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
