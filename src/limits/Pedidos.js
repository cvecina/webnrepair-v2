import { useClientesStore } from "@/stores";
import { computed } from "vue";

export default function limits() {
    const clientesStore = useClientesStore();

    const optionsClientes = computed(() => {
        return clientesStore.data.map((cliente) => {
            console.error("cliente", cliente)
            return { label: cliente.nombre, value: cliente.id };
        });
    });



    let list = {
        camposForm: [
            { campo: "titulo", tipo: "InputText", label: "Titulo", type: "text" },

            {
                campo: "cliente",
                tipo: "Dropdown",
                label: "Cliente",
                type: "text",
                options: optionsClientes,
                search: true,
                // options: clientesStore.clientesForDropdown,
            },
            {
                campo: "fecha",
                tipo: "Calendar",
                label: "Fecha",
                mandatory: true,
                disabled: false,
                type: "date",
            },
            { campo: "categoria", tipo: "InputText", label: "Categoria", type: "text" },

            // { campo: "estado", tipo: "InputText", label: "Estado", type: "text" },
            { campo: "precio", tipo: "InputNumber", label: "Precio", type: "number" },
            {
                campo: "descripcion",
                tipo: "Textarea",
                label: "Descripción",
                type: "text",
            },
        ],
        buttonsForm: [
            { class: "m-2", click: "save", label: "Guardar" },
            { class: "m-2", click: "cancel", label: "Cancelar" },
        ],
        camposTabla: [
            { campo: "titulo", label: "Título" },
            { campo: "cliente", label: "Cliente" },
            { campo: "fecha", label: "Fecha" },
            { campo: "precio", label: "Precio" },
            { campo: "descripcion", label: "Descripción" },
            { campo: "categoria", label: "Categoria" },
        ],
        buttonsDataTable: [
            {
                icon: "pi pi-pencil",
                class: "p-button-rounded p-button-success m-2",
                click: "edit",
            },
            // {
            //     icon: "pi pi-trash",
            //     class: "p-button-rounded p-button-warning m-2",
            //     click: "remove",
            // },
        ],
        querys: {
            principal: `
            subscription MySubscription {
                pedidos {
                  descripcion
                  categoria
                  id
                  precio
                  titulo
                  fecha
                  cliente{
                    id
                    nombre
                  }
                }
              }
              
          `,

            getClientes: `
            subscription MySubscription {
                clientes {
                    email
                    nombre
                    tel
                    id
                  }
              }`

        },
    };

    return list;
}