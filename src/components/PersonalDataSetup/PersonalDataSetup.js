import {IonButton, IonContent, IonDatetime, IonIcon, IonInput, IonItem, IonLabel, IonList, useIonAlert} from '@ionic/react';
import React, {useState} from 'react';
import {informationCircleSharp as iconInfo} from 'ionicons/icons';

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
    const [name, setName] = useState("");
    const [birtdate, setBirthdate] = useState("");
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [residence, setResidence] = useState("");

    const placeholder = "...";

    const [present] = useIonAlert();
    const showInfoAlert = () => {
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
                    setValue={setName}
                    placeholder="Numele complet"
                    label="Nume"
                />
                <InputItem
                    value={homeAddress}
                    setValue={setHomeAddress}
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
                        onIonChange={(e) => setResidence(e.detail.value)}
                        clearInput
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Data nasterii</IonLabel>
                    <IonDatetime
                        type="datetime"
                        value={birtdate}
                        onIonChange={(e) => setBirthdate(e.detail.value)}
                        displayFormat="YYYY-MM-DD" min="1950" max="2020"
                        clearInput
                        cancelText="Inapoi"
                        doneText="Selecteaza"
                    />
                </IonItem>
                <InputItem
                    value={placeOfBirth}
                    setValue={setPlaceOfBirth}
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
