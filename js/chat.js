function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

if (getCookie("username")==undefined){
	var e = document.body;
    e.parentNode.removeChild(e);
}