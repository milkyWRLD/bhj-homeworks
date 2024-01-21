document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById('progress');
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    };

    xhr.send(formData);
});