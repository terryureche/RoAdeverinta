import { 
    IonHeader, 
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton
} from '@ionic/react';
import './UserSetupHeader.css';

const UserSetupHeader = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton defaultHref="home" />
                </IonButtons>
                <IonButtons slot="end">
                <IonButton shape="round">Skip</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default UserSetupHeader;