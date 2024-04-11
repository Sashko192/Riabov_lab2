let posts = [
    { id: 1, title: "Nike", description: "Опис", image: "nike.jpg", category: "Nike" },
    { id: 2, title: "Adidas", description: "Опис", image: "adidas.jpg", category: "Adidas" },
    { id: 3, title: "Nike", description: "Опис", image: "nike.jpg", category: "Nike" },
    { id: 4, title: "Adidas", description: "Опис", image: "adidas.jpg", category: "Adidas" },
    { id: 5, title: "Nike", description: "Опис", image: "nike.jpg", category: "Nike" },
    { id: 6, title: "Adidas", description: "Опис", image: "adidas.jpg", category: "Adidas" },
    { id: 7, title: "Nike", description: "Опис", image: "nike.jpg", category: "Nike" },
    { id: 8, title: "Adidas", description: "Опис", image: "adidas.jpg", category: "Adidas" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4>${post.title}</h4>
                                    <p>${post.description}</p>
                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

