function toggleVote(button) {
    // Check if the button currently has the 'active' class
    if (button.classList.contains('active')) {
        // If it does, remove it (unvote)
        button.classList.remove('active');
        button.innerText = button.innerText.replace("Saved", "Vote");
        button.innerHTML = button.innerText.replace('<i class="fa-solid fa-check"></i>', ''); 
    } else {
        // If it doesn't, add it (vote)
        button.classList.add('active');
        // Change text to indicate selection
        let originalText = button.innerText;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Saved';
    }
}