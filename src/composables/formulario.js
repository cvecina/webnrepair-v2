import { useAlertStore } from "@/stores";
import { ref } from "vue";

export function useFormulario(datosHijo) {

    const alertStore = useAlertStore();
    const datosEditar = ref({});


    const enviar = (data) => {
        alertStore.success("Enviado");
        console.error(data);
    }
    const cancel = () => {
        alertStore.error("Cancelado");
        // router
    }



    return { enviar, cancel, datosEditar }
}
