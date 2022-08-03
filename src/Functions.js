// shrink banner (only display small logo) on scroll + check css code
const shrinkFunction = () => {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        const banner = document.getElementById("todoBanner");
        const logo = document.getElementById("todoLogo");
        const title = document.getElementById("todoTitle");
        const image = document.getElementById("todoImg");
        
        // TODO: solve marginTop pb
        const pageContent = document.getElementById("pageContent");

        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            // banner.style.height = "100px";
            banner.style.height = "max-content";
            Object.assign(logo.style, {height: "100px", margin: "0 auto", paddingTop: "10px"});
            title.style.display = "none";
            image.style.display = "none";

            banner.style.transition = "0.4s";
            logo.style.transition = "0.4s";
            title.style.transition = "0.4s";
            image.style.transition = "0.4s";
        } else {
            // banner.style.height = "500px";
            banner.style.height = "max-content";
            Object.assign(logo.style, {height: "180px", margin: "15px"});
            title.style.display = "block";
            Object.assign(image.style, {display: "block", margin: "0 auto"});

            banner.style.transition = "0.4s";
            logo.style.transition = "0.4s";
            title.style.transition = "0.4s";
            image.style.transition = "0.4s";
        }
    }
};

export {
    shrinkFunction
};