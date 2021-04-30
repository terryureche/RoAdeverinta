import { IonText,CreateAnimation, Animation  } from '@ionic/react';

export default ({text = "Slide"}) => {
    return (
        <div className="flex justify-center items-center flex-grow">
            <CreateAnimation
                duration={2000}
                iterations={Infinity}
                play={true}
                fromTo={[
                    { 
                        property: 'transform', 
                        fromValue: 'translateX(100px)', 
                        toValue: 'translateX(-50px)' 
                    },
                    { 
                            property: 'opacity', 
                            fromValue: '0.6', 
                            toValue: '0.1' 
                    }
            ]}>
                <IonText color="medium">
                    <h4>{text}</h4>
                </IonText>
            </CreateAnimation>
        </div>
    )
}