import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useAlertStore } from "@/stores";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import axios from "axios";

export function useDatatable(datosHijo) {
    const router = useRouter();
    const alertStore = useAlertStore();
    const { t } = useI18n();
    const toast = useToast();
    const dataTable = ref([]);

    onMounted(() => {
        console.error(datosHijo.listaFija)
        if (datosHijo.listaFija) {
            dataTable.value = datosHijo.listaFija;
            return;
        } else {
            axios
                .get(datosHijo.llamada)
                .then((response) => {
                    dataTable.value = eval(datosHijo.res);
                    // tableCache.value = eval(datosHijo.res);
                })
                .catch((error) => {
                    console.error("error", error);
                });
        }
    });

    const edit = (data) => {
        router.push("/Test/edit/"+ data.id)
        alertStore.success("Edit");
        console.error(data)
    }

    const remove = (data) => {
        alertStore.error("Remove");
        console.error(data)
    }

    const create = () => {
        alertStore.success("Create");
    }

    return {
        t,
        edit,
        remove,
        create,
        dataTable,
    };
}