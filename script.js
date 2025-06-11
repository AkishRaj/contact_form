document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    
    const messageElement = document.getElementById('message');
    const message = messageElement ? messageElement.value : '';

    
    document.getElementById('result').innerHTML = `
        <h2>Submitted Information</h2>
        <p><strong>First Name:</strong> ${name}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong> ${message ? message : 'No message provided.'}</p>
    `;
    document.getElementById('result').style.display = 'block';
    document.querySelector('form').reset(); 
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' }); 
    document.getElementById('result').style.backgroundColor = '#f0f8ff'; 
    document.getElementById('result').style.padding = '20px';
});

