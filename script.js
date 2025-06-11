document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    
    const messageElement = document.getElementById('message');
    const message = messageElement ? messageElement.value : '';

    const result = document.getElementById('result');
    
    result.innerHTML = `
        <h2 style="color:white;">Submitted Information</h2>
        <p style="color:white;"><strong>First Name:</strong> ${name}</p>
        <p style="color:white;"><strong>Last Name:</strong> ${lastName}</p>
        <p style="color:white;"><strong>Email:</strong> ${email}</p>
        <p style="color:white;"><strong>Contact:</strong> ${contact}</p>
        <p style="color:white;"><strong>Message:</strong> ${message ? message : 'No message provided.'}</p>
    `;
    
    result.style.display = 'block';
    result.style.backgroundColor = '#000';  // black background
    result.style.padding = '20px';
    result.style.borderRadius = '10px';
    result.style.marginTop = '20px';

    document.querySelector('form').reset(); 
    result.scrollIntoView({ behavior: 'smooth' }); 
});
