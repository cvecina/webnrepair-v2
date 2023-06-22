import _ from "lodash";

export function checkMinimumFilled(dataObject) {

    const state = dataObject.state || null;
    const mandatory = dataObject.mandatory || null;

    let minimum = true;
    _.forEach(mandatory, (value) => {
        if (
            state[value] === "" ||
            state[value] === undefined ||
            state[value] === null
        ) {
            minimum = false;
        }
    });
    return minimum;
}