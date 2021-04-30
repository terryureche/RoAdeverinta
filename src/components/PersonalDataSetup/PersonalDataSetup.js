import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonDatetime,
    IonItemDivider 
} from '@ionic/react';

import Reactm, { useState }  from 'react';

const Input = ({value, setValue, placeholder, label,  type="text"}) => {
    debugger;

    return (
        <IonItem>
            <IonLabel>{label}</IonLabel>
            <IonInput 
                type={type}
                value={value} 
                placeholder={placeholder} 
                onIonChange={(e) =>setValue(e.detail.value)}
                clearInput
            ></IonInput>
        </IonItem>
    )
}

const PersonalData = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birtdate, setBirthdate] = useState("");
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [residence, setrResidence] = useState("");

    const placeholder = "...";


    return (
        <IonContent fullscreen={true}>
            <IonList>
                <Input 
                    value={lastName}
                    setValue={setLastName}
                    placeholder={placeholder}
                    label="Numele"
                />
                <Input
                    value={firstName}
                    setValue={setFirstName}
                    placeholder={placeholder}
                    label="Prenume"
                />
                <Input
                    value={homeAddress}
                    setValue={setHomeAddress}
                    placeholder={placeholder}
                    label="Domiciliat/ă în"
                />
                <Input
                    value={residence}
                    setValue={setrResidence}
                    placeholder={placeholder}
                    label="Cu reședința în fapt în:"
                />
                <IonItem>
                    <IonLabel>Născut/ă în data de</IonLabel>
                    <IonDatetime 
                        type="datetime"
                        value={birtdate} 
                        placeholder={placeholder} 
                        onIonChange={(e) =>setBirthdate(e.detail.value)}
                        displayFormat="YYYY-MM-DD" min="1950" max="2020"
                        clearInput
                        cancelText="Inapoi"
                        doneText="Selecteaza"
                    />
                </IonItem>
                <Input
                    value={placeOfBirth}
                    setValue={setPlaceOfBirth}
                    placeholder={placeholder}
                    label="In localitatea:"
                />
            </IonList>
        </IonContent>
    );
}

export { 
    PersonalData
};