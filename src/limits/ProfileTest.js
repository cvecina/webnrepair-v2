export default function limits() {
    let list = {

        components: [
            "Name",
            "Surname"
        ],
        states: {
            "name": "",
            "surname": ""
        },
        mandatory: ["name"],
        mandatoryComponent: ["Name"],
        nonMandatoryComponents: ["Surname"],
    };

    return list;
}