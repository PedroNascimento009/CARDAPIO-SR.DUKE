function openTabs(IdTab) {
    var category = document.getElementsByClassName('main-category');

    for (var i = 0; i < category.length; i++) {
        category[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";
}