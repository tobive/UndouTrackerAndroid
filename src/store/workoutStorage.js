
const loadStorageWorkout = (currentState) => {
    return new Promise(resolve => {
        const resultState = {
            listWorkouts: [],
            ids: []
        };
    
        try {
            storage.getAllDataForKey('workout').then(resData => {
                storage.getIdsForKey('workout').then(resId => {
                    resultState.listWorkouts = resData;
                    resultState.ids = resId;
                    // alert(JSON.stringify(resultState));
                    resolve({
                        ...currentState,
                        listWorkout: resultState
                    });
                }).catch(err => {
                    alert('FAIL FOR IDS');
                });
            }).catch(err => {
                alert('FAIL FOR DATA');
            });
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                listWorkout: resultState
            });
        }
    });
};

export default loadStorageWorkout;
