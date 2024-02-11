<script>
// Load reviews from localStorage when the page loads
window.onload = function() {
    const savedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (savedReviews) {
        const reviewContainer = document.getElementById('review-display');
        savedReviews.forEach(review => {
            const reviewElement = createReviewElement(review);
            reviewContainer.appendChild(reviewElement);
        });
    }
};

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Save the new review to localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.unshift(formObject);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Create elements to display the submitted review
    const reviewContainer = document.getElementById('review-display');
    const reviewElement = createReviewElement(formObject);
    reviewContainer.insertBefore(reviewElement, reviewContainer.firstChild);
    
    // Clear form inputs
    this.reset();
});

// Function to create a review element
function createReviewElement(review) {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review-container');
    reviewElement.innerHTML = `
        <h4><i class='bx bxs-user profile-icon' style='font-size:20px'></i> ${review.name}  (${review.rating}/5)</h4>
        <p>: ${review.opinion}</p>
    `;
    return reviewElement;
}

const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0;
        ratingValue.value = idx + 1;

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            } else {
                allStar[i].style.setProperty('--i', click);
                click++;
            }
        }
    });
});
</script>