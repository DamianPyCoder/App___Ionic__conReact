import { IonBadge } from "@ionic/react";

export function IonBadgeComponent() {
  return (
    <div>
      <p>IonBadge</p>
      <IonBadge>12</IonBadge>
      <br />
      <IonBadge>Nuevo curso</IonBadge>

      <br />
      <br />
      <p>IonBadge - Colors</p>
      <IonBadge color="primary">22k</IonBadge>
      <br />
      <IonBadge color="secondary">202k</IonBadge>
      <br />
      <IonBadge color="tertiary">50k</IonBadge>
      <br />
      <IonBadge color="success">80k</IonBadge>
      <br />
      <IonBadge color="warning">202k</IonBadge>
      <br />
      <IonBadge color="danger">202k</IonBadge>
    </div>
  );
}
