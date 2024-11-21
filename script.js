document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const teamSlideshow = document.getElementById('teamSlideshow');
    const teamMembers = teamSlideshow.querySelectorAll('.team-member');
    let currentMember = 0;

    function showNextMember() {
        // Remove active class from all members
        teamMembers.forEach(member => {
            member.classList.remove('active');
        });

        // Add active class to current member
        teamMembers[currentMember].classList.add('active');

        // Increment member index
        currentMember = (currentMember + 1) % teamMembers.length;
    }

    // Show first member initially
    showNextMember();

    // Set interval to change members every 5 seconds
    setInterval(showNextMember, 5000);
});