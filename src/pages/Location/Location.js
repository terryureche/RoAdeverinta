import React, {useEffect, useState} from 'react';
import {IonContent, IonPage, useIonAlert} from "@ionic/react";
import { Plugins  } from '@capacitor/core';
import { useHistory } from "react-router";
import {SplashScreen} from "@capacitor/core";
import {GetAddress} from './../../api/MapBoxApi';

const { Geolocation } = Plugins;


const Location = () => {
    const history = useHistory();
    const [alert] = useIonAlert();
    const [gpsCoords, setGpsCoords] = useState(null);

    const getLocation = async () => {
        try {
            const coord = await Geolocation.getCurrentPosition();

            const meta = await GetAddress(coord);
            const data = meta.data;
            const feature = data.features;
            console.log(feature);

            setGpsCoords(coord);

        } catch (e) {
            console.log(e);
            if(e && e.hasOwnProperty("code") && e.code === 1) {
                alert("Va rugam activati geolocatia bla bla2",
                    [{text: 'Ok', handler: () => {
                            history.push('/onboarding');
                    }}]);
            }
        }
    }

    useEffect(getLocation,[]);

    return (
        <IonPage>
            <IonContent>

                <div className="w-full h-screen bg-light-default flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary-default">
                        Long: {gpsCoords && gpsCoords.coords ? gpsCoords.coords.latitude : null}
                    </span>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Location;
