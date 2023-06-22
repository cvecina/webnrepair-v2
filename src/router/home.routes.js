
import { nhost } from "@/nhostConfig";
import { Home, ProfileTest, CardListTest, CategoryListCard, BookingForm, Estilos } from "@/views/home";
export default {

    children: [{
        path: "/",
        component: Home,
    },
    {
        path: "/profile",
        component: ProfileTest,
        beforeEnter: async (to) => {
            return (await nhost.auth.isAuthenticatedAsync());
        },
    },
    {
        path: "/cardList",
        component: CardListTest,
        // beforeEnter: async (to) => {
        //     return (await nhost.auth.isAuthenticatedAsync());
        // },
    },
    {
        path: "/categoryList",
        component: CategoryListCard,
        // beforeEnter: async (to) => {
        //     return (await nhost.auth.isAuthenticatedAsync());
        // },
    },
    {
        path: "/estilos",
        component: Estilos,
    },
    // data.supplierId +
    // "/" +
    // data.activityId +
    // "/" +
    // data.optionId +
    // "/" +
    // data.localDate +
    // "/" +
    // data.ticketCategories
    {
        path: "/setBooking/:supplierId/:activityId/:optionId/:localDate",
        component: BookingForm,
    },
        // {
        //     path: "/test/:tipo/:id",
        //     component: Test,
        // },
        // {
        //     path: "/data-table-test",
        //     component: DataTableTest,
        // },
        // {
        //     path: "/dashboard",
        //     component: DashboardTest,
        // },
        // {
        //     path: "/formulario",
        //     component: FormularioTest,
        // },
    ],

};