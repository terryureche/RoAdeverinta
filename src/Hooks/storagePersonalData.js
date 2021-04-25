import React, { useState, useEffect } from 'react';
import { Storage } from '@ionic/storage'

export function GetPersonalData() {
    const [userData, setUserData] = useState(null);
    
    const getValueFct = async () => {
        try {

            const storage = new Storage();

            const value = await storage.get("personalData");
    
            setUserData(value);
        } catch(e) {
            setUserData(null);
        }
    }

    useEffect(() => {
        getValueFct();
    }, []);

    return [
        userData
    ]
};

export function SetPersonalData (value) {
    const [localStoreValue, setLocalStoreValue] = useState(value);
    const [personalData, setPersonalData] = useState();

    let setStoreValue = (value) => {
        setLocalStoreValue(value);
    }

    useEffect(async() => {
        const storage = new Storage();

        await storage.create()

        await storage.set("personalData", localStoreValue);

        setPersonalData(localStoreValue);
    }, [localStoreValue]);

    return [
        personalData,
        setStoreValue
    ];
}