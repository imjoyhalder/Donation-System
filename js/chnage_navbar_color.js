document.addEventListener("scroll", function () {
    
    if (window.scrollY > 50) { 
        document.getElementById("main-navbar").classList.remove('bg-orange-100')
        document.getElementById("navbar").classList.add('bg-gray-200',"backdrop-blur-md")
    } 
    else{
        document.getElementById('main-navbar').classList.add('bg-orange-100')
        document.getElementById("navbar").classList.remove('bg-gray-200',"backdrop-blur-md")
    }
});