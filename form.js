var modal = document.getElementById("myModal");

var button = document.getElementById("sub");

button.onclick = function(event){
    event.preventDefault();
    modal.style.display = "block";
}