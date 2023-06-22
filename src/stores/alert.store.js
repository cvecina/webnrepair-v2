import { defineStore } from "pinia";

export const useAlertStore = defineStore({
    id: "alert",
    state: () => ({
        alert: { message: "hola", type: "success" },
    }),
    actions: {
        success(message, time = 2000) {
            this.alert = { message, type: "success", time: time };
        },
        warn(message, time = 2000) {
            this.alert = { message, type: "warn", time: time };
        },
        error(message, time = 2000) {
            const mensajes = [{
                mensaje: 401,
                resultado: "Usuario incorrecto -1",
            },
            {
                mensaje: 402,
                resultado: "Usuario incorrecto -2",
            },
            ];
            const map = mensajes.find((item) => item.mensaje == message);
            if (map) {
                message = map.resultado;
            }
            if (message) {
                this.alert = { message, type: "error", time: time };
            }
        },
        clear() {
            this.alert = null;
        },
    },
});