import React, {Fragment} from "react";

import {IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, useIonModal} from "@ionic/react";

const TermsNConditionsBody = ({onDismiss}) => {
    return (
        <Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Termeni si Conditii</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => onDismiss()}>OK</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="w-full h-full p-6">
                    <ul className="list-disc list-inside">
                        <li>
                            Dezvoltatorii aplicatiei curente nu își asumă nicio răspundere referitoare la furnizarea
                            eronată
                            a
                            informațiilor solicitate pe baza cărora este generat documentul solicitat.
                        </li>
                        <li>
                            Datele introduse in aplicatie sunt folosite strict pentru generarea documentului solicitat
                            si
                            siguranta
                            lor este oferita de sistemul de operare al dispozitivului folosit de utilizatorul
                            aplicatiei.
                        </li>
                        <li>
                            Dezvoltatorii aplicatiei nu isi asuma nicio raspundere referitoare la validitatea
                            documentului
                            generat
                            la data solicitarii acestuia.
                            Utilizatorul trebuie sa se asigure ca documentul generat este in conformitate cu legislatia
                            in
                            vigoare
                            la momentul folosirii aplicatiei.
                        </li>
                    </ul>
                </div>
            </IonContent>
        </Fragment>
    );
}

const TermsAndConditions = () => {
    const handleDismiss = () => {
        dismiss();
    }
    const [present, dismiss] = useIonModal(TermsNConditionsBody, {
        onDismiss: handleDismiss
    });

    return (
        <div className="w-105-screen h-full flex flex-col overflow-y-auto pb-3">
            <img
                className="mx-auto p-8 max-w-xxs"
                src="assets/img/undraw_terms_n_conditions.svg"
                alt="fill form illustration"/>
            <div className="flex flex-col w-full items-start px-4 text-left">
                <h2 className="mt-6 text-xl">
                    <span className="underline-warning">
                        Toate datele sunt stocate pe propriul dispozitiv
                    </span> <span>
                        si siguranta lor este garantata de sistemul
                    de operare al dispozitivului
                    </span>
                </h2>
                <div className="mt-4">
                    Prin continuarea folosirii aplicatiei inseamna ca esti de acord cu Termenii si Conditiile.
                    <button className="underline-warning" onClick={() => present()}>
                        Vezi Termeni si Conditii aici
                    </button>
                </div>
            </div>
        </div>
    );
}


export default TermsAndConditions;
