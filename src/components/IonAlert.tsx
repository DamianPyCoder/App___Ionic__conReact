import { IonButton, useIonAlert } from "@ionic/react";

export function IonAlertComponent() {
  const [presentAlert] = useIonAlert();

  // const openAlert = () => {
  //   presentAlert({
  //     header: "¡CUIDADO!",
  //     subHeader: "Eliminar cuenta",
  //     message: "¿Estas seguro de eliminar la cuenta?",
  //     buttons: ["Cancelar"],
  //   });
  // };

  const deleteUser = () => {
    console.log("Usuario eliminado");
  };

  const openAlert = () => {
    presentAlert({
      header: "¡CUIDADO!",
      subHeader: "Eliminar cuenta",
      message: "¿Estas seguro de eliminar la cuenta?",
      buttons: [
        { text: "Cancelar", role: "cancel" },
        { text: "Eliminar", role: "confim", handler: deleteUser },
      ],
    });
  };

  return (
    <div>
      <p>IonAlert</p>

      <IonButton onClick={openAlert}>Abrir alerta</IonButton>
    </div>
  );
}
