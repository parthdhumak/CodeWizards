// Add an event listener to the upload button
document.getElementById('upload-btn').addEventListener('click', function() {
    // Open a file input dialog for the user to select a file
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Only allow image files

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            // Implement file upload functionality here
            alert('File selected: ' + file.name);
        } else {
            alert('No file selected.');
        }
    });

    fileInput.click(); // Trigger file input dialog
});
