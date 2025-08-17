const socialsButton = document.querySelector('.article .btn.btn--icon');
const socialsPopover = document.querySelector('.article__author-social-links[data-visible]');

socialsButton.addEventListener('click', handleSocialsClick);

function handleSocialsClick(e) {
    // Turn the boolean string into a boolean value
    const visible = JSON.parse(socialsPopover.getAttribute('data-visible'));

    if(visible) {
        socialsPopover.setAttribute('data-visible', false);
        socialsPopover.setAttribute('aria-hidden', true);
        socialsButton.setAttribute('aria-expanded', false);
    }
    else {
        socialsPopover.setAttribute('data-visible', true);
        socialsPopover.setAttribute('aria-hidden', false);
        socialsButton.setAttribute('aria-expanded', true);
    }
}