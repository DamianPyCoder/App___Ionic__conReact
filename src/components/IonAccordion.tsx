import {
  IonTitle,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

export function IonAccordionComponent() {
  return (
    <div>
      <p>IonAccordion</p>

      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>¿Que es React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Informacion de que es React...
          </div>
        </IonAccordion>

        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>¿Que es Ionic + React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Informacion de que es Ionic + React...
          </div>
        </IonAccordion>

        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>¿Como funciona los estados de React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Informacion estados de react...
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
}
