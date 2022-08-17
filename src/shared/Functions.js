// change main header color on scroll 
const changeColorOnScroll = () => {

    window.onscroll = () => {
        scrollFunction();
    };

     // for touch screens
     window.ontouchmove = () => {
        scrollFunction();
    };

    function scrollFunction() {
        const mainHeader = document.getElementById("mainHeader");
        const logo = document.getElementById("headerLogo");

        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            // change header's bg color
            mainHeader.classList.add("gradient1");
            mainHeader.style.transition = "1s";

            // change logo's color (gray filter)
            logo.style.filter = "grayscale(80%)";
            logo.style.transition = "1s";

        } else {
            mainHeader.classList.remove("gradient1");
            mainHeader.style.transition = "1s";

            logo.style.filter = "none";
            logo.style.transition = "1s";
        }
    };
};

// get mainFooter top value to set margin-bottom on page content
const changeLayout = () => {

    window.onload = () => {
        calcMargin();
    }

    function calcMargin() {

        const pageContent = document.getElementById("pageContent");
        const mainFooter = document.getElementById("mainFooter");
    
        // to prevent error when back to home page, set condition
        if (pageContent !== null && mainFooter !== null) {
            
            let footerTop = mainFooter.offsetTop;
            let pageContentHeight = pageContent.offsetHeight;
    
            // in case setMB is negative, make it absolute
            let setMB = Math.abs(footerTop - pageContentHeight);
    
            pageContent.style.marginBottom = `${setMB}px`;
    
            // console.log(setMB);
            // return setMB;
        }
    }
};

// TEST LIFECYCLE METHODS
/* render method (render phase)
= le composant a été calculé par React dans le DOM virtuel mais il n'est pas encore affiché sur la page. 
Le DOM réel sera mis à jour par la suite, lors de la phase de commit
*/

/* Compare old and new version of a component, if they are the same, do nothing, else execute render method (render phase)
This method isn't called when forceUpdate() is
= le composant doit-il être mis à jour ?
*/
const shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate works');
    return true;
};
/* After commit of DOM and refs has been done (component appears in browser page), React automaticaly execute this method (end of commit phase)
At this point, we can get data from a server and inject them in a component
= le composant a été monté sur la page
*/
const componentDidMount = () => {
    console.log('componentDidMount works');
};
/* After DOM has been updated (end of commit phase)
After this, we can execute other operations
= le composant a été mis à jour sur la page
*/
const componentDidUpdate = () => {
    console.log('componentDidUpdate works');
};
/* Render method is done, meaning React has calculated the new verion of the component in its virtual DOM but has yet to impact it in the browser's DOM (pre-commit phase)
We can execute a series of operations at this point if needed
= lire le DOM qui n'est pas encore visible à l'écran
*/
const getSnapshotBeforeUpdate = () => {
    console.log('getSnapshotBeforeUpdate works');
};

/* Before React removes the component from the page, it calls this method (end of commit phase)
We can remove data or reset variables used in the component that's going to be unmounted
= le composant va être retiré de l'écran
*/
const componentWillUnmount = () => {
    console.log('componentWillUnmount works');
};




export {
    changeColorOnScroll,
    changeLayout,

    shouldComponentUpdate,
    componentDidMount,
    componentDidUpdate,
    getSnapshotBeforeUpdate,
    componentWillUnmount
};