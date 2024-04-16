document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    // Display initial message
    output.innerHTML += `<div>Welcome to Sagnik's Terminal</div>`;
    output.innerHTML += `<div>Type 'help' for available commands</div>`;
    output.innerHTML += `<div>$ </div>`;  // Initial prompt

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = input.value;
            input.value = '';
            output.innerHTML += `<div>$ ${command}</div>`;
            handleCommand(command);
        }
    });
});

function handleCommand(command) {
    let response = '';

    switch (command.trim()) {
        case 'help':
            response = 'Available commands: help, ls, about, contact';
            break;
        case 'about':
            response = 'Hello World! In the World of Markov model, I am solving problems with hit and trial';
            break;
        case 'contact':
            response = 'Drop me a mail at sgnkbhowmick[at]gmail.com';
            break;
        case 'ls':
            response = 'about.txt   projects.txt   blogs';
            break;
        case 'ls blogs':
            response = 'Loading...';
            break;
        case '':
            response= '';
            break;
        default:
            response = `Command not found: ${command}`;
    }

    const output = document.getElementById('output');
    output.innerHTML += `<div>${response}</div>`;
}
