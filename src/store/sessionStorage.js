
const loadStorageSession = (currentState) => {
    return new Promise(resolve => {
        const resultState = { listSessions: [], listDates: [] };
        try {
            storage.getAllDataForKey('session').then(resData => {
                resultState.listSessions = resData;
                resultState.listDates = resData.map(item => {
                    return item.date;
                });
                resolve({
                    ...currentState,
                    listSession: resultState,
                });
            }).catch(err => {
                alert('FAIL DATA SESSION');
            });
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                listSession: resultState,
            });
        }
    });
};

export default loadStorageSession;
