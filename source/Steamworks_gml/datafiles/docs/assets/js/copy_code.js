document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function(codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerHTML = '<i class="fas fa-clipboard"></i>'; // Clipboard icon
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                const originalInnerHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>'; // Check icon
                button.style.backgroundColor = "#28a745"; // Change button to green
                setTimeout(() => {
                    button.innerHTML = originalInnerHTML; // Reset icon
                    button.style.backgroundColor = ""; // Reset button color
                }, 2000); // Reset icon and button color after 2 seconds
            }, (err) => {
                console.error('Failed to copy text: ', err);
            });
        });

        const pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            const highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
});
