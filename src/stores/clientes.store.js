import { defineStore } from "pinia";
import { useAlertStore } from "@/stores";
import apolloClient from "@/main.js";
import { gql } from '@apollo/client/core'

export const useClientesStore = defineStore({
    id: "clientes",
    state: () => ({
        data: [],
        selected: {},
        new: {},
        dataParseados: [],
        dataFiltrados: [],
    }),
    actions: {

        async setStore(data) {
            this.data = data;
            await this.setParseados();
        },

        async setParseados() {
            let datosMapeados = this.data.map((clientes) => {
                return {
                    id: clientes.id,
                    contacto: clientes?.email + " - " + clientes?.tel,
                    nombre: clientes.nombre,
                };
            });
            this.dataParseados = datosMapeados;
            this.dataFiltrados = datosMapeados;
        },

        async filter(data) {
            this.boatsFiltrados = searchData(data, this.boatsParseados);
        },

        // async getData() {
        //     try {
        //         const { data } = await apolloClient.query({
        //             query: gql`
        //             query MyQuery {
        //                 boats {
        //                     id
        //                     description
        //                     price
        //                     location
        //                     size
        //                     fuel
        //                     cabins
        //                     bathrooms
        //                     passengers
        //                     boatName
        //                 }
        //             }
        //             `
        //         });
        //         this.boats = data.boats;
        //         return data.boats;
        //     } catch (error) {
        //         console.error("Error getting documents: ", error);
        //     }
        // },

        async select(seleccion) {
            const datos = { ...seleccion };
            this.selected = datos;
        },

        // async selectById(id) {
        //     try {
        //         const { data } = await apolloClient.query({
        //             query: gql`
        //             query MyQuery($id: uuid!) {
        //                 boats_by_pk(id: $id) {
        //                     id
        //                     boatName
        //                 }
        //             }
        //             `,
        //             variables: {
        //                 id: id,
        //             }
        //         });
        //         this.selected = data.boats_by_pk;
        //         return data.boats_by_pk;
        //     } catch (error) {
        //         console.error("Error getting documents: ", error);
        //     }
        // },

        async saveEdit() {
            const alertStore = useAlertStore();
            console.error(this.selected)
            try {
                await apolloClient.mutate({
                    mutation: gql`
                    mutation MyMutation($id: uuid!, $email: String, $nombre: String!, $tel: String) {
                        update_clientes_by_pk(pk_columns: {id: $id}, _set: {email: $email, nombre: $nombre, tel: $tel}) {
                            email
                        }
                    }
                    `,
                    variables: {
                        id: this.selected.id,
                        email: this.selected.email,
                        nombre: this.selected.nombre,
                        tel: this.selected.tel,
                    }
                });

                alertStore.success("Barco actualizado correctamente");
            } catch (error) {
                console.error("Error getting documents: ", error);

            }
        },

        async saveCreate() {
            const alertStore = useAlertStore();
            try {
                await apolloClient.mutate({
                    mutation: gql`
                        mutation MyMutation ($email: String!, $nombre: String!, $tel: String!){
                            insert_clientes_one(object: {email: $email, nombre: $nombre, tel: $tel}) {
                                id
                            }
                        }
                    `,
                    variables: {
                        email: this.new.email,
                        nombre: this.new.nombre,
                        tel: this.new.tel,
                    }
                });
                alertStore.success("Cliente añadido correctamente");
            } catch (error) {
                alertStore.error("Error creando el cliente");
                console.error("Error getting documents: ", error);
            }
        },

        async remove(id) {
            const alertStore = useAlertStore();
            try {
                await apolloClient.mutate({
                    mutation: gql`
                    mutation MyMutation($id: uuid!) {
                        delete_user_boat(where: {id_boat: {_eq: $id}}) {
                            returning {
                            id
                            }
                        }
                        delete_boats_by_pk(id: $id) {
                            id
                        }
                    }
                    `,
                    variables: {
                        id: id,
                    }
                });

                alertStore.success("Barco eliminado correctamente");
            } catch (error) {
                alertStore.error("No se ha podido eliminar el barco");
                // console.error("Error getting documents: ", error);

            }
        }

    },
});