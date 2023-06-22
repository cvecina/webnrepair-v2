import { defineStore } from "pinia";
import axios from "axios";

let defaultActivities = [
    {
        title: "Card 1",
        content: "Content 1",
        img: [
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
        ],
    },
    {
        title: "Card 2",
        content: "Content 2",
        img: [
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
        ],
    },
    {
        title: "Card 3",
        content: "Content 3",
        img: [
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
            { link: "https://picsum.photos/200" },
        ],
    },
];

export const useBookingSystemStore = defineStore({
    id: "bookingSystem",
    state: () => ({
        activities: [],
        activityList: [],
        availabilityList: [],
        ticketCategoriesTemp: [],
    }),
    actions: {
        async getActivityList() { // getActivityList
            // console.error("getActivityList");
            const data = {
                "jsonrpc": "2.0",
                "method": "activity.find",
                "params": {
                    "query": {
                        "supplierId": "sup_ee9f3fbe-72b7-4677-8a91-a76c5325b635",
                        "activityIds": [
                        ],
                        "cursor": null,
                        "categoryIds": [
                            // "11" // la categoría es importante para que salgan las actividades
                        ]
                    }
                },
                "id": 1
            }

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            this.activityList = datos.data;
            // console.error("this.activityList", this.activityList);
            this.activityListParsed = this.activityList.data.map((item) => {
                return {
                    titulo: item.title,
                    descripcion: item.description,
                    imagen: item.media.images.header ? item.media.images.header : "https://picsum.photos/200",
                    carrousel: item.media.images.gallery
                }
            });

            // this.activities = defaultActivities;
        },

        async getSupplierList() { // getActivityList
            // console.error("getSupplierList");
            const data = {
                "jsonrpc": "2.0",
                "method": "category.find",
                "params": {},
                "id": 1
            }

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            this.supplierList = datos.data;
            // console.error("this.activityList", this.supplierList);
            this.supplierListParsed = this.supplierList.data.map((item) => {
                return {
                    titulo: item.name,
                }
            });
            // this.supplierListParsed = this.activityList.data.map((item) => {
            //     return {
            //         titulo: item.title,
            //         descripcion: item.description,
            //     }
            // });

            // this.activities = defaultActivities;
        },

        async getAvailability(supplierId, activityId) { // getActivityList
            // console.error("getSupplierList");
            const data = {
                "jsonrpc": "2.0",
                "method": "availability.find",
                "params": {
                    "query": {
                        "supplierId": supplierId,
                        "activityId": activityId,
                        "fromDate": "2023-10-01",
                        "untilDate": "2023-10-31",
                        "optionIds": [],
                        // "cursor": "MAe="
                        "cursor": null
                    }
                },
                "id": 1
            }

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            this.availabilityList = datos.data;
            // console.error("this.availabilityList", this.availabilityList.data);
            // console.error("this.activityList", this.supplierList);
            // this.supplierListParsed = this.supplierList.data.map((item) => {
            //     return {
            //         titulo: item.name,
            //     }
            // });
        },

        async setBooking(supplierId, activityId, optionId, date, ticketCategories, dataForm) { // getActivityList
            console.error("getActivityList", ticketCategories);

            const parsedTicketCategories = ticketCategories.map((item) => {
                return {
                    "ticketCategory": item.ticketCategoryId,
                    "count": item.minSeats // debería ser pasado por parametro
                }
            });

            const data = {
                "jsonrpc": "2.0",
                "method": "booking.create",
                "params": {
                    "supplierId": supplierId,
                    "bookingItems": [
                        {
                            "activityId": activityId,
                            "optionId": optionId,
                            "date": date,
                            // "ticketCategories": [
                            //     {
                            //         "ticketCategory": "9466800",
                            //         "count": 1
                            //     },
                            //     {
                            //         "ticketCategory": "9466803",
                            //         "count": 1
                            //     },
                            //     {
                            //         "ticketCategory": "9466806",
                            //         "count": 1
                            //     },
                            //     {
                            //         "ticketCategory": "9466809",
                            //         "count": 2
                            //     }
                            // ]
                            "ticketCategories": parsedTicketCategories,
                        }
                    ],
                    "language": "en",
                    "holdDurationSeconds": 300
                },
                "id": 1
            }

            console.error("realData", data);

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    console.error("response", response);
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            console.error("datos", datos);
            await this.setCommitBooking(supplierId, datos.data.bookingId, activityId, optionId, date, ticketCategories, dataForm);
            await this.getBooking(datos.data.bookingId);
        },

        async getBooking(idBooking) { // getActivityList
            const data = {
                "jsonrpc": "2.0",
                "method": "booking.get",
                "params": {
                    "bookingId": idBooking
                },
                "id": 1
            }

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            this.bookingList = datos.data;
        },

        async setCommitBooking(supplierId, bookingId, activityId, optionId, date, ticketCategories, dataForm) {
            const parsedTicketCategories = ticketCategories.map((item) => {
                return {
                    "ticketCategory": item.ticketCategoryId,
                    "count": item.minSeats, // debería ser pasado por parametro
                    "externalTicketId": "",
                }
            });
            const data = {
                "jsonrpc": "2.0",
                "method": "booking.commit",
                "params": {
                    "supplierId": supplierId,
                    "bookingId": bookingId,
                    "bookingItems": [
                        {
                            "activityId": activityId,
                            "optionId": optionId,
                            "date": date,
                            // "ticketCategories": [
                            //     {
                            //         "ticketCategory": "9466800",
                            //         "count": 1,
                            //         "externalTicketId": null
                            //     }
                            // ],
                            "ticketCategories": parsedTicketCategories,
                            addons: [],
                            "guests": [
                                {
                                    "firstName": dataForm.firstName,
                                    "lastName": dataForm.lastName,
                                    "emailAddress": dataForm.emailAddress,
                                    "phoneNumber": dataForm.phoneNumber,
                                    "addons": [
                                        // {
                                        //     "id": "44267",
                                        //     "quantity": 2
                                        // }
                                    ],
                                    "additionalFields": [
                                        // {
                                        //     "key": "gender",
                                        //     "value": "m"
                                        // },
                                        // {
                                        //     "key": "nationality",
                                        //     "value": "CH"
                                        // }
                                    ],
                                    // "country": "US",
                                    // "nationality": "CH",
                                    "gender": dataForm.gender,
                                }
                            ],
                            // "addons": [
                            //     {
                            //         "id": "44268",
                            //         "quantity": 5
                            //     }
                            // ]
                        }
                    ],
                    "externalBookingReference": "1",
                    "notes": dataForm.notes,
                    "language": "en",
                    "payment": {
                        "amount": "50",
                        "currency": "USD"
                    },
                    "contact": {
                        "fullName": dataForm.firstName + " " + dataForm.lastName,
                        "emailAddress": dataForm.emailAddress,
                        "phoneNumber": dataForm.phoneNumber,
                    }
                },
                "id": 1
            };
            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    // console.error("response", response);
                    return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
            console.error("commit data", datos);

        },

        async cancelBooking(datosForm) { // getActivityList

            const data = {
                "jsonrpc": "2.0",
                "method": "booking.cancel",
                "params": {
                    "bookingId": datosForm.bookingId,
                    "reason": datosForm.reason,
                    "note": datosForm.note,
                },
                "id": 1
            }

            let datos = await axios.post("/activitylist", data)
                .then(function (response) {
                    return response.data;
                }
                ).catch(function (error) {
                    console.error(error);
                }
                );
            console.error("datos", datos);


        },

    },
    //"boo_d3e6e6aa-99de-40a3-b948-2795a41fea5a"

});