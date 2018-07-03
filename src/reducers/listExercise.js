import { 
    OPEN_EXERCISE, 
    DELETE_EXERCISE, 
    SAVE_NEW_EXERCISE, 
    SAVE_EXERCISE 
} from '../actions';

const initialState = {
    listExercises: [],
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

function deleteIdFromListExs(id, ids, listExs) {
    const index = ids.indexOf(id);
    if (index > -1) {
        return listExs.filter((item, idx) => {
            return index !== idx;
        });
    }
    return listExs;
}

function updateDataInTheList(id, ids, listExs, newData) {
    const index = ids.indexOf(id);
    if (index > -1) {
        return listExs.map((item, idx) => {
            if (index === idx) {
                const newItem = { ...newData };
                return newItem;
            }
            return item;
        });
    }
    return listExs;
}

export default function listExercise(state = initialState, action) {
    switch (action.type) {
        case SAVE_EXERCISE:
            return {
                ...state,
                listExercises: updateDataInTheList(
                                    action.id, 
                                    state.ids, 
                                    state.listExercises, 
                                    action.data
                                ),
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                listExercises: deleteIdFromListExs(action.id, state.ids, state.listExercises),
                ids: deleteIdFromIds(action.id, state.ids)
            };
        case SAVE_NEW_EXERCISE:
            return {
                ...state,
                listExercises: state.listExercises.concat(action.payload),
                // preventing double adding
                ids: state.ids.indexOf(action.id) === -1 
                        ? state.ids.concat(action.id) 
                        : state.ids,
            };
        default:
            return state;
    } 
}
