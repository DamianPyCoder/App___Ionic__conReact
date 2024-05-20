import { IonButton, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

export function IonButtonComponent() {
  const onClickBtn = () => {
    console.log("Ir a la web");
  };

  return (
    <div>
      <p>IonButton</p>

      <IonButton onClick={onClickBtn}>Ir a la web</IonButton>
      <IonButton disabled>No va</IonButton>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>

      <p>Shape</p>
      <IonButton shape="round">Round</IonButton>

      <p>Fill</p>
      <IonButton fill="clear">Clear</IonButton>
      <IonButton fill="outline">Outline</IonButton>
      <IonButton fill="solid">Solid</IonButton>

      <p>Size</p>
      <IonButton size="small">Small</IonButton>
      <IonButton size="default">Default</IonButton>
      <IonButton size="large">Large</IonButton>

      <p>Icon</p>
      <IonButton>
        <IonIcon slot="start" icon={star} />
        Left Icon
      </IonButton>
      <IonButton>
        <IonIcon slot="end" icon={star} />
        Left Icon
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </div>
  );
}
