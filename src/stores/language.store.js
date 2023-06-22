import { defineStore } from "pinia";
import _ from "lodash";
import i18n from "@/i18n";


export const useLanguageStore = defineStore({
    id: "x",
    state: () => ({
        languages: [
            { icono: "Spain", code: "es", class: "flag-icon flag-icon-esp" },
            { icono: "England", code: "en", class: "flag-icon flag-icon-gbr" },
        ],
        language: {},
    }),
    actions: {
        setLanguage(value) {
            let valueDef = _.find(this.languages, function (o) {
                return o.code == value;
            });
            this.language = valueDef;
            this.changeLang(valueDef.code);
            localStorage.setItem("language", valueDef.code);
            i18n.global.locale.value = valueDef.code;
        },
        changeLang(languageCode) {
            document.documentElement.setAttribute("lang", languageCode);
        },
    },
});