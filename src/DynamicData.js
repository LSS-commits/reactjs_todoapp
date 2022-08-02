let categoryData = [
    {id: 'a51f0dd3', name: 'Professional'},
    {id: 'e681609a', name: 'Personal'}
];

// TODO: remove category if not needed
let taskData = [
    {
        id: 'ab57ee07',
        title: 'Professional',
        list: 
        [
            {taskId: '59c0e7ad', name: 'Study offers', completed: false, category: 'Professional'},
            {taskId: 'b01f4a64', name: 'Sign contract', completed: false, category: 'Professional'},
            {taskId: 'de4901ea', name: 'Finish project roadmap', completed: false, category: 'Professional'}
        ]
    },
    {
        id: 'f853dc78',
        title: 'Personal',
        list: 
        [
            {taskId: '7ccdf947', name: 'Wash dishes', completed: false, category: 'Personal'},
            {taskId: 'f1672461', name: 'Cardio work out', completed: false, category: 'Personal'},
            {taskId: 'cbe25877', name: 'Do laundry', completed: false, category: 'Personal'}
        ]
    }
];


export {categoryData, taskData};