import { defineStore } from "pinia";
import apolloClient from "@/main.js";
import { gql } from '@apollo/client/core'
import { useAlertStore } from "@/stores";
export const useOpinionesStore = defineStore({
    id: "opiniones",
    state: () => ({
        opiniones: [],
    }),
    actions: {
        async setOpiniones(data) {
            this.opiniones = data;
        },

        async setActivoInactivo(id, activo) {
            const alertStore = useAlertStore();
            try {
                await apolloClient.mutate({
                    mutation: gql`
                    mutation MyMutation($id: Int!, $activo: Boolean!) {
                        update_opiniones_by_pk(pk_columns: {id: $id}, _set: {activo: $activo}) {
                            id
                        }
                    }
                    `,
                    variables: {
                        id: id,
                        activo: activo,
                    }
                });
                alertStore.success("Bieeen")
            } catch (error) {
                alertStore.error("Error")
                console.error("error", error);
            }
        }
    },
});