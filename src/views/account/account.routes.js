import { nhost } from "@/nhostConfig";
import { resetPassword, login, register, resetPasswordForm } from "@/views/account";
export default {
    children: [{
        path: "/reset-password",
        component: resetPassword,
    },
    {
        path: "/reset-password-form",
        component: resetPasswordForm,
        beforeEnter: async (to) => {
            return (await nhost.auth.isAuthenticatedAsync());
        },
    },
    {
        path: "/login",
        component: login,
    },
    {
        path: "/register",
        component: register,
    },
    ],

};