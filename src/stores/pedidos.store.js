import { defineStore } from "pinia";
import { useAlertStore } from "@/stores";
import apolloClient from "@/main.js";
import { gql } from '@apollo/client/core'

export const usePedidosStore = defineStore({
    id: "pedidos",
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
            let datosMapeados = this.data.map((pedidos) => {
                return {
                    id: pedidos.id,
                    categoria: pedidos.categoria,
                    descripcion: pedidos.descripcion,
                    precio: pedidos.precio,
                    titulo: pedidos.titulo
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
                    mutation MyMutation($id: Int!, $descripcion: String, $precio: numeric, $titulo: String, $categoria: String) {
                        update_pedidos_by_pk(pk_columns: {id: $id}, _set: {categoria: $categoria, descripcion: $descripcion, titulo: $titulo, precio: $precio}) {
                            categoria
                        }
                    }
                    `,
                    variables: {
                        id: this.selected.id,
                        categoria: this.selected.categoria,
                        descripcion: this.selected.descripcion,
                        precio: this.selected.precio,
                        titulo: this.selected.titulo
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
                        mutation MyMutation ($categoria: String!, $descripcion: String!, $precio: numeric!, $titulo: String!){
                            insert_pedidos_one(object: {categoria: $categoria, descripcion:$descripcion, precio: $precio, titulo: $titulo}) {
                                categoria
                            }
                        }
                    `,
                    variables: {
                        categoria: this.new.categoria,
                        descripcion: this.new.descripcion,
                        precio: this.new.precio,
                        titulo: this.new.titulo
                    }
                });
                alertStore.success("Pedido añadido correctamente");
            } catch (error) {
                alertStore.error("Error creando el pedido");
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