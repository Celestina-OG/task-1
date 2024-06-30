document.addEventListener('DOMContentLoaded', function() {
    const message = "Welcome to Celestina's DevOps Website!";
    const messageContainer = document.createElement('p');
    messageContainer.textContent = message;
    document.querySelector('.container').appendChild(messageContainer);
});
