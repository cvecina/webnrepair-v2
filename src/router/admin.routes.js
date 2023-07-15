import { Admin } from "@/views/admin";
import { nhost } from "@/nhostConfig";

export default {

    children: [{
        path: "/admin",
        component: Admin,
        beforeEnter: async (to) => {
            return (await nhost.auth.isAuthenticatedAsync());
        },
    },
    ],

};