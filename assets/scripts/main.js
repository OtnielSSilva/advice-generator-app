function insertMessage(text) {
    const tagAdvice = document.querySelector('#advice-text-tag');
    const p = document.createElement('p');
    p.textContent = `"${text}"`;
    tagAdvice.appendChild(p);
}

function getTagAdvice() {
    const tagAdvice = document.querySelector('#advice-text-tag');
    return tagAdvice;
}

function showLoading() {
    const tagAdvice = getTagAdvice();
    tagAdvice.innerHTML = "<p>Loading advice...</p>";
}

function removeLoading() {
    const tagAdvice = getTagAdvice();
    tagAdvice.removeChild(tagAdvice.firstChild);
}

function showError() {
    const tagAdvice = getTagAdvice();
    tagAdvice.innerHTML = "<p>Sorry, there was an error fetching advice. Please try again later.</p>";
}

function fetchAdvice() {
    showLoading();
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then(removeLoading())
        .then((json) => insertMessage(json.slip.advice))
        .catch((error) => showError());
}

fetchAdvice();
