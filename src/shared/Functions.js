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

export {
    changeColorOnScroll,
    changeLayout
};