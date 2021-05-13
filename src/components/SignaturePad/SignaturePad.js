import {IonButton, IonContent} from "@ionic/react";
import SignaturePad from 'react-signature-pad-wrapper'
import React from "react";

/**
 *
 * @param getSignature  callback to handle the signature image as Base64
 * @param onClear
 * @returns {JSX.Element}
 */
export default ({getSignature, onClear}) => {
    let signaturePad = {};

    const clearPad = () => {
        signaturePad.instance.clear();
        onClear();
    }

    const onEnd = () => {
        const signature = signaturePad.toDataURL();

        getSignature(signature);
    }

    return (
        <IonContent fullscreen={true} className="w-105-screen">
            <div className="h-full w-full flex flex-col items-center p-4">
                <div className="h-full w-3/4 flex flex-col items-center justify-center ">
                    <h4 className="text-left mb-4">
                        Semneaza in chenarul de mai jos
                    </h4>
                    <div className="w-full rounded-md border-2 border-medium-default bg-white">
                        <SignaturePad
                            ref={ref => {
                                if (!ref) {
                                    return;
                                }

                                signaturePad = ref;

                                signaturePad.instance.onEnd = onEnd;
                            }}/>
                    </div>
                </div>
                <IonButton onClick={clearPad} color="medium" expand="full" shape="round">Sterge</IonButton>
            </div>
        </IonContent>
    )
}
