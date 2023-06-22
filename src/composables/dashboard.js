import { useAlertStore } from "@/stores";
import { ref, onMounted } from "vue";
import axios from "axios";

export function useDashboard(datosHijo) {
    const alertStore = useAlertStore();
    const dataForTable = ref([]);
    const tableCache = ref(dataForTable.value);
    const listaGraficos = ref([]);

    const asignarGrafico = (data, filter) => {
        const datos = countUnique(data, filter);
        listaGraficos.value = datosHijo.filterArray.map((filter, index) => ({
            title: filter,
            value: datos[index],
            color: "primary",
        }));
    };

    onMounted(() => {
        asignarGrafico(dataForTable.value, datosHijo.filterArray);
        axios
            .get(datosHijo.llamada)
            .then((response) => {
                dataForTable.value = eval(datosHijo.res);
                tableCache.value = eval(datosHijo.res);
                asignarGrafico(dataForTable.value, datosHijo.filterArray);
            })
            .catch((error) => {
                console.error("error", error);
            });

    });

    const countUnique = (data, filters) => {
        const sets = filters.map((filter) => new Set());

        data.forEach((item) => {
            filters.forEach((filter, index) => {
                sets[index].add(item[filter]);
            });
        });

        console.error(sets);

        console.error(...sets.map((set) => set.size));
        return {
            ...sets.map((set) => set.size),
        };
    };


    const getFilters = (property) => {
        const filters = [
            "All",
            ...new Set(dataForTable.value.map((item) => item[property])),
        ];
        return filters.map((item) => ({ option: item, label: property }));
    };

    const changeFilter = (e) => {
        alertStore.success("Filter: " + e.option);
        if (e.option === "All") {
            tableCache.value = dataForTable.value;
            asignarGrafico(tableCache.value, datosHijo.filterArray);

            return;
        }
        tableCache.value = dataForTable.value.filter((item) => {
            if (item[e.label] === e.option) {
                return item;
            }
        });
        asignarGrafico(tableCache.value, datosHijo.filterArray);
    };

    const dataForChart = [
        "All",
        ...new Set(dataForTable.value.map((item) => item.name)),
    ].map((item) => ({ name: item }));

    return {
        alertStore,
        tableCache,
        listaGraficos,
        dataForChart,
        getFilters,
        changeFilter,
    };
}