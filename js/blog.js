
// document.getElementById('blog-btn')
//     .addEventListener('click', function() {
//         window.location.href = '/blog.html';  // Corrected method
//     });

// document.getElementById('home-btn')
//     .addEventListener('click', function() {
//         window.location.href = '/index.html';
// });
    
document.getElementById('blog-btn')
    .addEventListener('click', function() {
        window.location.href = window.location.origin + '/Donation-System/blog.html';
    });

document.getElementById('home-btn')
    .addEventListener('click', function() {
        window.location.href = window.location.origin + '/Donation-System/index.html';
    });
