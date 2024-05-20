import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";

export function IonCheckboxComponent() {
  return (
    <div>
      <p>IonCheckbox</p>

      <IonItem>
        <IonCheckbox slot="start" indeterminate={true} />
        <IonLabel>Aceptar terminos y condiciones.</IonLabel>
      </IonItem>
    </div>
  );
}
