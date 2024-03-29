const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'S1'},
        'task-2': {id: 'task-2', content: 'S2'},
        'task-3': {id: 'task-3', content: 'S3'},
        'task-4': {id: 'task-4', content: 'S4'},
        'task-5': {id: 'task-5', content: 'S5'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2','task-3','task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: []
        },
    },
    //facilitates re-ordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;