import profile from "@/limits/profileTest.js";
import { useAlertStore } from "@/stores";
import { ref } from "vue";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

export function useProfile() {
    const alertStore = useAlertStore();

    const blocked = ref(false);

    const mandatoryComponents = profile().mandatoryComponent;
    const componentListNotMandatory = profile().nonMandatoryComponents;

    let listaDeFormulario = [
        {
            campo: "name",
            tipo: "InputText",
            label: "Nombre",
            mandatory: true,
            type: "text",
        },
        {
            campo: "surname",
            tipo: "InputText",
            label: "Apellido",
            mandatory: true,
            type: "text",
        },
        // {
        //   campo: "bool",
        //   tipo: "Checkbox",
        //   label: "Bool",
        //   mandatory: true,
        // },
        {
            campo: "list",
            tipo: "Dropdown",
            label: "List",
            mandatory: true,
            options: ["option1", "option2"],
        },
        {
            campo: "email",
            tipo: "InputText",
            label: "Email",
            mandatory: false,
            type: "email",
        },
        {
            campo: "password",
            tipo: "InputText",
            label: "Password",
            mandatory: true,
            type: "password",
        },
        {
            campo: "confirmPassword",
            tipo: "InputText",
            label: "Confirm Password",
            mandatory: true,
            type: "password",
        },
    ];

    const saveProfile = (data) => {
        console.error(data);
        alertStore.success("Profile saved");
    };

    const cancel = () => {
        alertStore.error("Profile not saved");
        window.history.back();
    };
    return { listaDeFormulario, saveProfile, cancel, Splitter, SplitterPanel }
}
