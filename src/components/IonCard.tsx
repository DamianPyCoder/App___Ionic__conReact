import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

export function IonCardComponent() {
  return (
    <div>
      <p>IonCard</p>

      <IonCard>
        <img
          src="https://ionicframework.com/docs/img/demos/card-media.png"
          alt="Agustin Navarro"
        />
        <IonCardHeader>
          <IonCardTitle>Agustin Navarro</IonCardTitle>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          necessitatibus minima quisquam totam officia alias aspernatur non,
          voluptatem veritatis labore voluptas repellendus praesentium
          perferendis nulla dolorem cumque ipsa molestiae.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Manolito</IonCardTitle>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          necessitatibus minima quisquam totam officia alias aspernatur non,
          voluptatem veritatis labore voluptas repellendus praesentium
          perferendis nulla dolorem cumque ipsa molestiae.
        </IonCardContent>

        <IonButton fill="clear">Follow</IonButton>
        <IonButton fill="clear">Redes Sociales</IonButton>
      </IonCard>
    </div>
  );
}
