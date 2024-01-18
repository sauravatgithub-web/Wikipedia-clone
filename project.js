let line = document.getElementById('lines');
let dot = document.getElementById('dots');
let tool = document.getElementById('tools');
let line_dropdown_menu = document.getElementById('lines-menu');
let dot_dropdown_menu = document.getElementById('dots-menu');
let tool_dropdown_menu = document.getElementById('tools-menu');

// Show the dropdown menu when the line is clicked
line.addEventListener('click', function() {
    line_dropdown_menu.style.display = 'block';
})
dot.addEventListener('click', function() {
    dot_dropdown_menu.style.display = 'block';
})
tool.addEventListener('click', function() {
    tool_dropdown_menu.style.display = 'block';
})


// Hide the dropdown menu when clicked outside of it
document.addEventListener('click', function(event) {
    let targetElementLine = event.target;

    if (targetElementLine !== line && targetElementLine !== line_dropdown_menu) {
        line_dropdown_menu.style.display = 'none';
    }
})

document.addEventListener('click', function(event) {
    let targetElementDot = event.target;

    if (targetElementDot !== dot && targetElementDot !== dot_dropdown_menu) {
        dot_dropdown_menu.style.display = 'none';
    }
})

document.addEventListener('click', function(event) {
    let targetElementTool = event.target;

    if (targetElementTool !== tool && targetElementTool !== tool_dropdown_menu) {
        tool_dropdown_menu.style.display = 'none';
    }
})

let playcards = document.getElementById("hidden-texts");
let link = document.getElementById("link");
link.addEventListener('mouseover', function() {
    playcards.style.display = "block";
})
link.addEventListener('mouseout', function() {
    playcards.style.display = "none";
})

let searchInForm = document.getElementById("searchBox");
let searchInput = searchInForm.value.textContent;

// code for hyperlinks without href tags
let links = document.getElementsByClassName("myLink");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let search = document.getElementById("searchBox-hidden");
        search.value = links[i].textContent;
        let myButton = document.getElementById("hidden-button");
        myButton.click();
    });
}