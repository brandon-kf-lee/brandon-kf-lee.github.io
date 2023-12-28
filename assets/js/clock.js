window.addEventListener("load", () => {
    year_updater();

    function year_updater(){
        var today = new Date();
        var year = today.getFullYear();

        var elem = document.getElementById("live-year");
        var content = document.createTextNode(year);    
        elem.appendChild(content);
    }
});