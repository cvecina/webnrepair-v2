import { Admin } from "@/views/admin";
import { nhost } from "@/nhostConfig";
import { useAlertStore } from "@/stores";

export default {

    children: [{
        path: "/admin",
        component: Admin,
        beforeEnter: async (to) => {
            // return (await nhost.auth.isAuthenticatedAsync());
            const alertStore = useAlertStore();
            const res = await nhost.auth.isAuthenticatedAsync() ? true : "/";
            if (res === "/admin") {
                alertStore.error("You could no pass.");
            }
            return res;
        },
    },
    ],

};