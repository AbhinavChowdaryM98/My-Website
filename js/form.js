var arr = [];
function myFunction() {
    var name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    var skill = document.getElementById("skill").value;
    document.getElementById("skill").value = "";
    var level = document.getElementById("level").value;
    document.getElementById("level").value = "";
    var tab = document.getElementById("tab");
    arr.push({ name, skill, level });
    var htm = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        htm = htm + `<tr><td>${element.name}</td><td>${element.skill}</td><td>${element.level}</td></tr>`;
    }
    tab.innerHTML = `<table><tr><th>Name</th><th>Skill</th><th>level</th></tr>${htm}</table>`;
}