const loadStorageExercise = (currentState) => {
    return new Promise(resolve => {
        const resultState = {
            listExercises: [],
            ids: []
        };
    
        try {
            storage.getAllDataForKey('exercise').then(resData => {
                storage.getIdsForKey('exercise').then(resId => {
                    resultState.listExercises = resData;
                    resultState.ids = resId;
                    resolve({
                        ...currentState,
                        listExercise: resultState
                    });
                }).catch(err => {
                    alert('FAIL IDS');
                });
            }).catch(err => {
                alert('FAIL DATA');
            });
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                listExercise: resultState
            });
        }
    });
};

export default loadStorageExercise;
