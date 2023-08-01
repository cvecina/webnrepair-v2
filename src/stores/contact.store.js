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
            alertStore.success("Mensaje enviado correctamente");
            console.error("datos", datos);
        },

        async setAbout(about) {
            this.new.tipo = about;
        },
    },
});