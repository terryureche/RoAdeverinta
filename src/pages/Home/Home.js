import { IonPage } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    return (
        <IonPage>
            <div className="w-full h-screen bg-light-default flex items-center justify-center">
                <span className="text-2xl font-semibold text-primary-default">Gigel</span>
            </div>
        </IonPage>
    )
}

export default Home;
