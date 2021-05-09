import {IonButton, IonButtons, IonContent, IonPage} from "@ionic/react";
import SignaturePad from 'react-signature-pad-wrapper'

/**
 *
 * @param getSignature  callback to handle the signature image as Base64
 * @returns {JSX.Element}
 */
export default ({getSignature}) => {
    let signaturePad = {};

    const clearPad = () => {
        signaturePad.instance.clear();
    }

    const onEnd = () => {
        const signature = signaturePad.toDataURL();

        getSignature(signature);
    }

    return (
        <div>
            <SignaturePad
                options={{backgroundColor:"white"}}
                ref={ ref => {
                    if(!ref) {
                        return;
                    }

                    signaturePad = ref;

                    signaturePad.instance.onEnd = onEnd;
                }}/>
                <IonButton onClick={clearPad} color="primary" expand="full">Clear</IonButton>
        </div>
    )
}