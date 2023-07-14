// export default function searchData(searchQuery, data) {
//     let data2 = [...data];
//     const results = data2.filter((item) => {
//         for (const key in item) {
//             // console.error("Item", item[key])
//             if (key === "id") continue;
//             if (key === "recuento") continue;
//             let data = searchQuery.toLowerCase();
//             let data2 = item[key].toLowerCase();
//             if (data2.includes(data)) {
//                 return true;
//             }
//         }
//         return false;
//     });
//     return results;
// }

export default function searchData(searchQuery, data) {
    let data2 = [...data];
    const results = data2.filter((item) => {
        for (const key in item) {
            if (key === "id") continue;

            let query = searchQuery.toLowerCase();
            let value = item[key];

            if (typeof value === "number") {
                // Filter numbers
                if (value.toString().includes(query)) {
                    return true;
                }
            } else if (typeof value === "string") {
                // Filter strings
                let data = value.toLowerCase();
                if (data.includes(query)) {
                    return true;
                }
            }
        }
        return false;
    });
    return results;
}
