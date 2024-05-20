import { useState } from "react";
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from "@ionic/react";
import { home } from "ionicons/icons";

export function IonBreadcrumbsComponent() {
  const [max, setMax] = useState<number | undefined>(3);

  return (
    <div>
      <p>IonBreadcrumbs</p>

      <IonBreadcrumbs
        maxItems={max}
        onIonCollapsedClick={() => setMax(undefined)}
      >
        <IonBreadcrumb href="#home">
          <IonIcon slot="start" icon={home} />
          Home
        </IonBreadcrumb>
        <IonBreadcrumb href="#consolas">Consolas</IonBreadcrumb>
        <IonBreadcrumb href="#ps5">PS5</IonBreadcrumb>
        <IonBreadcrumb href="#juegos">Juegos</IonBreadcrumb>
      </IonBreadcrumbs>
    </div>
  );
}
