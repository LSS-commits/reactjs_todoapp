this.state.tasks.map((tasksByCategory) => tasksByCategory.list)






 // to create new version of tasks property in state of this component
 onToggleCompleted = (taskID) => {

    let taskToUpdate = this.state.tasks.find(task => task.taskId === taskID);

    taskToUpdate.completed = !taskToUpdate.completed;

    this.setState(previousState => (
        previousState.tasks.map(task => {
            return task.taskId === taskID ? taskToUpdate : task;
        })
    ))
    // console.log(taskToUpdate);
    // return taskToUpdate;
}