document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  output.innerHTML += `
        <pre style="font-family: monospace; color: #4CAF50;">
   SSSSS  AAAAA  GGGGG  N   N  IIIII  K   K
   S      A   A  G      NN  N    I    K  K 
   SSSSS  AAAAA  G  GG  N N N    I    KK   
       S  A   A  G   G  N  NN    I    K  K 
   SSSSS  A   A  GGGGG  N   N  IIIII  K   K
        </pre>
    `;
  // Display initial message
  output.innerHTML += `<div>Welcome to Sagnik's Terminal</div>`;
  output.innerHTML += `<div>Type 'help' for available commands</div>`;
  output.innerHTML += `<div>$ </div>`; // Initial prompt

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = input.value;
      input.value = "";
      output.innerHTML += `<div>$ ${command}</div>`;
      handleCommand(command);
    }
  });
});

function displayResponse(response) {
    const output = document.getElementById('output');
    output.innerHTML += `<div style="font-family: monospace; color: white;">${response}</div>`;
}

function handleCommand(command) {
  let response = "";

  switch (command.trim()) {
    case "help":
      response = "Available commands: help, ls, about, contact, joke";
      break;
    case "about":
      response =
        "Hello World! In the World of Markov model, I am solving problems with hit and trial";
      break;
    case "contact":
      response = "Drop me a mail at sgnkbhowmick[at]gmail.com";
      break;
    case "ls":
      response = "about.txt   projects.txt   blogs";
      break;
    case "ls blogs":
      response = "Loading...";
      break;
    case 'joke':
      fetchJoke();
      return;
    case "":
      response = "";
      break;
    default:
      response = `Command not found: ${command}`;
  }

  const output = document.getElementById("output");
  output.innerHTML += `<div>${response}</div>`;
}

async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
        const jokeResponse = await response.json();

        if (jokeResponse.error) {
            throw new Error('Failed to fetch joke');
        }

        // Constructing the joke message
        const jokeMessage = `
            ${jokeResponse.setup}<br>
            ${jokeResponse.delivery}
        `;

        displayResponse(jokeMessage);
    } catch (error) {
        displayResponse('Failed to fetch joke. Please try again later.');
    }
}
