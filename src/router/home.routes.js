import { Home } from "@/views/home";
import { Contact } from "@/views/home";
export default {

    children: [{
        path: "/",
        component: Home,
    },
    {
        path: "/contact",
        component: Contact,
    }
    ],

};