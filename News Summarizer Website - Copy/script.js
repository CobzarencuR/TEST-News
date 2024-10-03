


// Function to filter news based on search input
$(document).ready(function () {
    function filterNews(searchTerm) {
        var newsBoxes = $('.news-box');
        newsBoxes.each(function () {
            var title = $(this).find('h2').text().toLowerCase();
            var summary = $(this).find('p').text().toLowerCase();
            var url = $(this).find('a').text().toLowerCase();
            if (title.includes(searchTerm.toLowerCase()) || summary.includes(searchTerm.toLowerCase()) || url.includes(searchTerm.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Event listener for search input
    $('#search-input').on('input', function () {
        var searchTerm = $(this).val();
        filterNews(searchTerm);
    });
});

//Nav bar button for small resolution
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#check').addEventListener('change', function () {
        var nav = document.querySelector('nav ul');
        if (this.checked) {
            nav.style.left = '0';
        } else {
            nav.style.left = '-100%';
        }
    });
});

//Search bar Icon clicked
document.addEventListener("DOMContentLoaded", function () {
    var searchIcon = document.getElementById("searchIcon");
    var searchBar = document.getElementById("searchBar");

    searchIcon.addEventListener("click", function () {
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block";
        } else {
            searchBar.style.display = "none";
        }
    });
});
