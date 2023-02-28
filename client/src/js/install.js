const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // Store the event for later use
    deferredPrompt = event;

    // Show the install button
    butInstall.style.display = 'block';
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide the install button
    butInstall.style.display = 'none';

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
    } else {
        console.log('PWA installation rejected');
    }

    // Clear the deferredPrompt variable
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null;
});
