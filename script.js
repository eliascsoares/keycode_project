const keyInfo = document.getElementById('keyInfo');
const mobileInput = document.getElementById('mobileInput');

function displayKeyInfo(code, key, charCode) {
    keyInfo.innerHTML = `
        <p><strong>Code:</strong> ${code}</p>
        <p><strong>Key:</strong> ${key}</p>
        <p><strong>CharCode:</strong> ${charCode}</p>
    `;
}

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    displayKeyInfo(event.code, event.key, event.keyCode);
});

mobileInput.addEventListener('input', function(event) {
    const key = event.target.value.slice(-1);
    displayKeyInfo(key.charCodeAt(0).toString(), key, key.charCodeAt(0));
});