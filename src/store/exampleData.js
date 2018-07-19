import firstLaunchCheck from '../utils/firstLaunchCheck';

export default async function loadExampleData() {
    try {
        const hasLaunched = await firstLaunchCheck();
 
        return new Promise(resolve => {
            const defaultExs = [
                {
                    'exerciseName' : 'Sit up',
                    'reps': true,
                    'sets': true, 
                },
                {
                    'exerciseName': 'Plank',
                    'reps': false,
                    'sets': true,
                    'time (sec)': true,
                },
                {
                    'exerciseName': 'Dumbbell Side Bend',
                    'reps': true,
                    'sets': true,
                    'weight (kg)':true,
                }
            ];

            const defaultWos = [
                {
                    'workoutName': 'Abs Workout A',
                    'exercises': ['ex-1', 'ex-2', 'ex-3']
                }
            ];

            if (hasLaunched) {
                resolve(true);
            } else {
                try {
                    storage.save({
                        key: 'exercise',
                        id: `ex-1`,
                        data: defaultExs[0],
                        expires: null
                    });
                    storage.save({
                        key: 'exercise',
                        id: `ex-2`,
                        data: defaultExs[1],
                        expires: null
                    });
                    storage.save({
                        key: 'exercise',
                        id: `ex-3`,
                        data: defaultExs[2],
                        expires: null
                    });
                    storage.save({
                        key: 'workout',
                        id: `wo-1`,
                        data: defaultWos[0],
                        expires: null
                    });
                    resolve(true);                    
                } catch(err) {
                    alert("SAVING EXAMPLE DATA FAILED");
                    resolve(true);
                }
            }
        });
    } catch(err) {
        alert(JSON.stringify(err));
    }
};
