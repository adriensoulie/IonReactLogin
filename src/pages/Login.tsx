import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import React, { Component } from 'react';
import './Login.css';
import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';

const INITIAL_STATE = {

};

class Login extends Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async signIn(): Promise<void> {
    const { history } = this.props;
    const result = await Plugins.GoogleAuth.signIn();
    console.info('result', result);
    if (result) {
      history.push({
        pathname: '/home',
        state: { name: result.name || result.displayName, email: result.email }
      });
    }

  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Junior Test App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonCol className="text-center">
              <IonText className="title">
                Login
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-center">
              <IonText className="text-center">
                To access your profile
              </IonText>
            </IonCol>
          </IonRow>

          <IonButton className="login-button" onClick={() => this.signIn()} expand="block" fill="solid" color="danger">
            Login with Google
        </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

export default Login; 