const initState = {
    tabName: "movie"
}

export default function layout(state = initState, aciton) {
    switch (aciton.type) {
        case 'DELETE_OTHER_TAG': {
            return Object.assign({}, state, { tabName: aciton.name })
        };
        default: {
            return state;
        }
    }
}

