const downloadResumeBtn = document.getElementById('download-resume');

downloadResumeBtn.addEventListener('click', () => {
    const pdfUrl = 'docs/RESUME_HEMMARAT.pdf'; // replace with your PDF file URL
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RESUME_HEMMARAT.pdf'; // set the file name
    link.click();
});