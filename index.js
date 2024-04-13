function submitData(usersName, usersEmail) {
    const usersData = {
        name: usersName,
        email: usersEmail
    };

    const dataObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(usersData)
    };

    return fetch('http://localhost:3000/users', dataObject)
        .then(response => response.json())
        .then(data => {
            // Assuming there's an element in your HTML where you want to show the ID or some result
            document.body.innerHTML = `User ID: ${data.id}`; // Example of output, adjust as needed
        })
        .catch(error => {
            // Handle errors by appending the error message to the DOM
            document.body.innerHTML = `Error: ${error.message}`;
        });
}