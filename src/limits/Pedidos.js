export default function limits() {
    let list = {
        camposFormCreate: [
            {
                campo: "boatName",
                tipo: "InputText",
                label: "Nombre del barco",
                mandatory: true,
                type: "text",
            },
            {
                campo: "cabins",
                tipo: "InputText",
                label: "Cabinas",
                mandatory: true,
                type: "number",
            },
            {
                campo: "bathrooms",
                tipo: "InputText",
                label: "Baños",
                mandatory: true,
                type: "number",
            },
            {
                campo: "description",
                tipo: "Textarea",
                label: "Descripción",
                mandatory: true,
                type: "text",
            },
            {
                campo: "fuel",
                tipo: "InputText",
                label: "Combustible",
                mandatory: true,
                type: "text",
            },
            {
                campo: "location",
                tipo: "InputText",
                label: "Localización",
                mandatory: true,
                type: "text",
            },
            {
                campo: "passengers",
                tipo: "InputText",
                label: "Pasajeros",
                mandatory: true,
                type: "number",
            },
            {
                campo: "price",
                tipo: "InputText",
                label: "Precio",
                mandatory: true,
                type: "number",
            },
            {
                campo: "size",
                tipo: "InputText",
                label: "Tamaño",
                mandatory: true,
                type: "number",
            },
        ],
        camposFormEdit: [
            {
                campo: "boatName",
                tipo: "InputText",
                label: "Nombre del barco",
                mandatory: true,
                type: "text",
            },
            {
                campo: "cabins",
                tipo: "InputText",
                label: "Cabinas",
                mandatory: true,
                type: "number",
            },
            {
                campo: "bathrooms",
                tipo: "InputText",
                label: "Baños",
                mandatory: true,
                type: "number",
            },
            {
                campo: "description",
                tipo: "Textarea",
                label: "Descripción",
                mandatory: true,
                type: "text",
            },
            {
                campo: "fuel",
                tipo: "InputText",
                label: "Combustible",
                mandatory: true,
                type: "text",
            },
            {
                campo: "location",
                tipo: "InputText",
                label: "Localización",
                mandatory: true,
                type: "text",
            },
            {
                campo: "passengers",
                tipo: "InputText",
                label: "Pasajeros",
                mandatory: true,
                type: "number",
            },
            {
                campo: "price",
                tipo: "InputText",
                label: "Precio",
                mandatory: true,
                type: "number",
            },
            {
                campo: "size",
                tipo: "InputText",
                label: "Tamaño",
                mandatory: true,
                type: "number",
            },
        ],
        buttonsForm: [
            { class: "m-2", click: "save", label: "Guardar" },
            { class: "m-2", click: "cancel", label: "Cancelar" },
        ],
        camposTabla: [
            { campo: "boatName", label: "Barco" },
            { campo: "cabins", label: "Cabinas" },
            { campo: "bathrooms", label: "Baños" },
            { campo: "description", label: "Descripción" },
            { campo: "fuel", label: "Combustible" },
            { campo: "location", label: "Localización" },
            { campo: "passengers", label: "Pasajeros" },
            { campo: "price", label: "Precio" },
            { campo: "size", label: "Tamaño" },
        ],
        buttonsDataTable: [
            {
                icon: "pi pi-pencil",
                class: "p-button-rounded p-button-success m-2",
                click: "edit",
            },
            {
                icon: "pi pi-trash",
                class: "p-button-rounded p-button-warning m-2",
                click: "remove",
            },
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
                }
              }
              
          `,

            getClientes: `
            subscription MySubscription {
                clientes {
                  nombre
                  id
                }
              }`

        },
    };

    return list;
}