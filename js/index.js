document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};

// var navDark = document.getElementById('myBody').classList('');

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && document.body.className == 'dark') {
        document.getElementById('navBar').style.backgroundColor = '#161c2d';
    } else 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navBar').style.backgroundColor = '#fff';
    } else {
        document.getElementById('navBar').style.backgroundColor = 'transparent';
    };

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navBar').style.boxShadow = '0 3px 6px 0 rgba(0, 0, 0, 0.05)';
    } else {
        document.getElementById('navBar').style.boxShadow = 'none';
    }
};
