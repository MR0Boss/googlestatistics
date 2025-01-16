// Select all <a> elements with href="/panel"
var links = document.querySelectorAll('a[href="/panel"]');

// Check if the NodeList is not empty
if (links.length > 0) {
    links.forEach(function(link) {
        link.href = '/announcements/2'; // Change the href to the new path for each element
    });
}
