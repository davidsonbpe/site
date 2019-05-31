const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

// Optional: This just makes all the links open in a new tab
var links = document.links;
for (var i = 0; i < links.length; i++) {
    links[i].target = "_blank";
}
