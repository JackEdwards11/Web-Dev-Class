setTimeout(cookie, 200);

function cookie(){
    alert("We use cookies and related technology to deliver relevant advertising on our site, in emails, and across the Internet. We and our partners also use these technologies to personalize content and perform site analytics.");
}
var modal = document.getElementById("myModal");

var button = document.getElementById("sub");

button.onclick = function(event){
    event.preventDefault();
    modal.style.display = "inline";
}