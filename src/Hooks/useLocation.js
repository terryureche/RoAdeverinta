import React, {useEffect, useState} from 'react';
import {useIonAlert} from "@ionic/react";
import { Plugins  } from '@capacitor/core';
import { useHistory } from "react-router";
import {SplashScreen} from "@capacitor/core";
import {GetAddress} from './../api/MapBoxApi';

const { Geolocation } = Plugins;

/**
 *
 * @param redirectTo    -   path to redirect if failed
 * @returns {[unknown]}
 */
export default (redirectTo) => {
    const history = useHistory();
    const [alert] = useIonAlert();
    const [gpsCoords, setGpsCoords] = useState(null);

    const getLocation = async () => {
        try {
            const coord = await Geolocation.getCurrentPosition();

            const meta = await GetAddress(coord);
            const data = meta.data;
            const feature = data.features;
            console.log(feature[0]);

            setGpsCoords(feature[0]);

        } catch (e) {
            if(e && e.hasOwnProperty("code") && e.code === 1) {
                alert("Va rugam activati geolocatia bla bla2",
                    [{text: 'Ok', handler: () => {
                            history.push(redirectTo);
                    }}]);
            }
        }
    }

    useEffect(getLocation,[]);

    return [gpsCoords];
}

