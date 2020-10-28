searchInput = document.querySelector(".search");
searchIcon = document.querySelector(".search-icon");
faqContent = document.querySelectorAll(".faq-content");
dropdownMenu = document.querySelectorAll(".dropdown-menu");

searchInput.addEventListener("input", function(e) {
    if (searchInput.value !== "") {
        searchIcon.style.display = 'inline-block';
    } else {
        searchIcon.style.display = 'none';
    }
})

searchIcon.addEventListener("click", function(e) {
    alert("This feature has not been implemented");
})

faqContent.forEach(faqSection => {
    faqSection.addEventListener("click", function(e) {
        arrowButton = document.querySelector(".arrow-button");
        // console.log(lastElementChild)
        if (faqSection.childNodes[3].style.transform == "rotate(180deg)") {
            faqSection.lastElementChild.style.maxHeight = '0';
            faqSection.childNodes[3].style.transform = "rotate(0deg)";
            faqSection.childNodes[3].style.transitionProperty = 'all';
            faqSection.childNodes[3].style.transitionDuration = '.3s';
        } else {
            faqSection.lastElementChild.style.maxHeight = '2000px';
            faqSection.childNodes[3].style.transform = "rotate(180deg)";
            faqSection.childNodes[3].style.transitionProperty = 'all';
            faqSection.childNodes[3].style.transitionDuration = '.3s';
            faqSection.childNodes[3].style.transitionTimingFunction = "ease-in-out";
        }


    })
})

const menuIcon = document.querySelector('#menu-icon');
const faqContainer = document.querySelector(".faq-sidenav-container");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener('click', function(e) {
    faqContent.forEach(faqSection => {
        faqSection.style.display = "block";
    })
    menuIcon.classList.toggle("show");
    faqContainer.classList.toggle("active");
    overlay.classList.toggle("show-overlay");

})



searchInput.addEventListener('keyup', function(e) {
    faqContent.forEach(faqSection => {
        if (searchInput.value !== "") {
            faqSection.style.cssText = 'border-bottom: 0';
            faqSection.childNodes[5].style.marginTop = '0';
            faqSection.childNodes[3].style.display = 'none';
            faqSection.childNodes[1].style.display = 'none';
            faqSection.lastElementChild.style.maxHeight = '300px';

        } else {
            faqSection.style.cssText = 'border-bottom: 1px solid #4D4D4';
            faqSection.childNodes[5].style.marginTop = '10px';
            faqSection.childNodes[3].style.display = 'block';
            faqSection.lastElementChild.style.maxHeight = '0';
            faqSection.childNodes[1].style.display = 'inline-block';
        }
        console.log(faqSection.style.cssText)

    })
})