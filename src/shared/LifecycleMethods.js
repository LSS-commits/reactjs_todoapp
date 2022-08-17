// NOTES ON LIFECYCLE METHODS (montage, mise à jour, démontage des composants)

/* render method (render phase)
= le composant a été calculé par React dans le DOM virtuel mais il n'est pas encore affiché sur la page. 
Le DOM réel sera mis à jour par la suite, lors de la phase de commit
*/

/* Compare old and new version of a component, if they are the same, do nothing, else execute render method (render phase)
This method isn't called when forceUpdate() is
= le composant doit-il être mis à jour ?
*/
// const shouldComponentUpdate = () => {
//     console.log('shouldComponentUpdate works');
//     return true;
// };

/* After commit of DOM and refs has been done (component appears in browser page), React automaticaly execute this method (end of commit phase)
At this point, we can get data from a server and inject them in a component
= le composant a été monté sur la page
*/
// const componentDidMount = () => {
//     console.log('componentDidMount works');
// };

/* After DOM has been updated (end of commit phase)
After this, we can execute other operations
= le composant a été mis à jour sur la page
*/
// const componentDidUpdate = () => {
//     console.log('componentDidUpdate works');
// };

/* Render method is done, meaning React has calculated the new verion of the component in its virtual DOM but has yet to impact it in the browser's DOM (pre-commit phase)
We can execute a series of operations at this point if needed
= lire le DOM qui n'est pas encore visible à l'écran
*/
// const getSnapshotBeforeUpdate = () => {
//     console.log('getSnapshotBeforeUpdate works');
//     return true;
// };

/* Before React removes the component from the page, it calls this method (end of commit phase)
We can remove data or reset variables used in the component that's going to be unmounted
= le composant va être retiré de l'écran
*/
// const componentWillUnmount = () => {
//     console.log('componentWillUnmount works');
// };



/* check test in todopages component
1) When page is first displayed, render then component did mount => mounting lifecycle of the component
2) After state of completion of a task has been modified, setState is called, which is one of the events that triggers the update lifecycle of the component
should component update, then render, then get snapshot before update, then component did update
*/