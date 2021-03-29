import React, {useState} from 'react';
import './App.css';
import "@ionic/react/css/ionic.bundle.css";
import {IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonButton} from "@ionic/react";
function App() {
  const [state, setState] = useState(1);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            AgroDem
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1> {state} </h1>
        <IonButton onClick={()=> setState(state + 1)}>Increase</IonButton>
        <IonButton onClick={()=> setState(state - 1)}>Decrease</IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
