import { 
    SAVE_WORKOUT, 
    DELETE_WORKOUT, 
    SAVE_NEW_WORKOUT 
} from '../actions';

const initialState = {
    listWorkouts: [],
    ids: []
};

function deleteIdFromIds(id, array) {
    // Return new array without item in index
    const index = array.indexOf(id);
    if (index > -1) {
        return array.filter((item, idx) => {
            return index !== idx;
        });
    }
    return array;
}

function deleteIdFromListWos(id, ids, listWos) {
    const index = ids.indexOf(id);
    if (index > -1) {
        return listWos.filter((item, idx) => {
            return index !== idx;
        });
    }
    return listWos;
}

function updateDataInTheList(id, ids, listWos, newData) {
    const index = ids.indexOf(id);
    if (index > -1) {
        const joke = listWos.map((item, idx) => {            
            if (index === idx) {
                const newItem = { ...newData };
                return newItem;
            }
            return item;
        });
        return joke;
    }    
    return listWos;
}

export default function listWorkout(state = initialState, action) {
    switch (action.type) {
        case SAVE_WORKOUT:
            return {
                ...state,
                listWorkouts: updateDataInTheList(
                                    action.id, 
                                    state.ids, 
                                    state.listWorkouts, 
                                    action.data
                                ),
            };
        case DELETE_WORKOUT:
            return {
                ...state,
                listWorkouts: deleteIdFromListWos(action.id, state.ids, state.listWorkouts),
                ids: deleteIdFromIds(action.id, state.ids)
            };
        case SAVE_NEW_WORKOUT:
            return {
                ...state,
                listWorkouts: state.listWorkouts.concat(action.data),
                // preventing double adding
                ids: state.ids.indexOf(action.id) === -1 
                        ? state.ids.concat(action.id) 
                        : state.ids,
            };
        default:
            return state;
    } 
}