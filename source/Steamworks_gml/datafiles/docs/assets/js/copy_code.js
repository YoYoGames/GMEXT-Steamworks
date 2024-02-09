document.addEventListener('DOMContentLoaded', function() {


    // Select the element with the classes 'icon' and 'icon-home'
    var link = document.querySelector('a.icon.icon-home');
    var githublink = document.querySelector('a.fa.fa-github')
        
    // Change the 'href' attribute
    if (link && githublink) {
        link.href = githublink.href;
    }

    // Select the element with class "icon icon-home" and aria-label "Docs"
    var home_link = document.querySelector('a.icon.icon-home[aria-label="Docs"]');
    home_link.href = 'home.html'

    // Remove the editor icon
    var element = document.querySelector('li.wy-breadcrumbs-aside');
    if (element) {
        element.remove();
    }

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
