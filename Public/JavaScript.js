function uploadPrescription() {
    const fileInput = document.getElementById('file-upload');
    const prescriptionFile = fileInput.files[0];

    if (!prescriptionFile) {
        alert('Please choose a prescription file.');
        return;
    }

    const formData = new FormData();
    formData.append('prescription', prescriptionFile);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
}
