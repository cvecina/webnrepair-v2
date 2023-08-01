import { defineStore } from "pinia";
import { useAlertStore } from "./alert.store";

export const useContactStore = defineStore({
    id: "contact",
    state: () => ({
        new: {
            tipo: "",
            name: "",
            email: "",
            tel: "",
            message: "",
        },
    }),
    actions: {
        // esto es la llamada al back para mandar el mail
        async sendMail() {
            const alertStore = useAlertStore();
            const datos = this.new;
            window.location.href = `mailto:webnrepair1@gmail.com?subject=${datos.tipo}&body=Nombre: ${datos.name}%0D%0AEmail: ${datos.email}%0D%0ATeléfono: ${datos.tel}%0D%0AMensaje: ${datos.message}`
            alertStore.success("Mensaje enviado correctamente");
            console.error("datos", datos);
        },

        async setAbout(about) {
            this.new.tipo = about;
        },
    },
});