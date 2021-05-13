import {IonButton, IonContent, IonDatetime, IonIcon, IonInput, IonItem, IonLabel, IonList, useIonAlert} from '@ionic/react';
import React, {useState, useContext} from 'react';
import {informationCircleSharp as iconInfo} from 'ionicons/icons';
import {Context as AuthContext} from './../../context/AuthContext';

const InputItem = ({value, setValue, placeholder, label, type = "text"}) => {
    return (
        <IonItem>
            <IonLabel position="stacked">
                {label}
            </IonLabel>
            <IonInput
                type={type}
                value={value}
                placeholder={placeholder}
                onIonChange={(e) => setValue(e.detail.value)}
                clearInput
            />
        </IonItem>
    )
}

const PersonalData = () => {
    const placeholder = "...";

    const {updateUserData, state} = useContext(AuthContext);
    const {name, birthdate, placeOfBirth, homeAddress, residence} = state.userData;

    const [present] = useIonAlert();
    const showInfoAlert = () => {
        console.log(state);
        present({
            header: "Info",
            message:"Adresa de resedinta poate fi aproximata, automat, folosind locatia telefonului, la momentul generarii declaratiei.",
            buttons:[
                'Ok'
            ]
        });
    }


    return (
        <IonContent fullscreen={true} className="w-105-screen">
            <img
                className="mx-auto p-8 max-w-xxs"
                src="assets/img/undraw_profile_data.svg"
                alt="fill form illustration"/>
            <IonList>
                <InputItem
                    value={name}
                    setValue={value => {updateUserData({...state.userData, name:value})}}
                    placeholder="Numele complet"
                    label="Nume"
                />
                <InputItem
                    value={homeAddress}
                    setValue={value => {updateUserData({...state.userData, homeAddress:value})}}
                    placeholder="Asa cum este in buletin"
                    label="Adresa de domiciliu"
                />
                <IonItem>
                    <IonLabel position="stacked">
                        <div className="flex w-full items-center">
                            <span>Adresa la care locuiesti</span>
                            <IonButton
                                slot="end"
                                size="small"
                                shape="round"
                                fill="clear"
                                color="medium"
                                className="m-0"
                                onClick={showInfoAlert}
                            >
                                <IonIcon slot="icon-only" icon={iconInfo}/>
                            </IonButton>
                        </div>
                    </IonLabel>
                    <IonInput
                        type="text"
                        value={residence}
                        placeholder={placeholder}
                        onIonChange={(e) => updateUserData({...state.userData, residence: e.detail.value})}
                        clearInput
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Data nasterii</IonLabel>
                    <IonDatetime
                        type="datetime"
                        value={birthdate}
                        onIonChange={(e) =>  updateUserData({...state.userData, birthdate: e.detail.value})}
                        displayFormat="YYYY-MM-DD" min="1950" max="2020"
                        clearInput
                        cancelText="Inapoi"
                        doneText="Selecteaza"
                    />
                </IonItem>
                <InputItem
                    value={placeOfBirth}
                    setValue={ value => {updateUserData({...state.userData, placeOfBirth:value})} }
                    placeholder={placeholder}
                    label="Nascut in localitatea:"
                />
            </IonList>
        </IonContent>
    );
}

export {
    PersonalData
};
