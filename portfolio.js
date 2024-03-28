function showSummary() {
    hideAllSectionsExcept('summary');
}

function hideAllSectionsExcept(sectionIdToShow) {
    var sections = document.querySelectorAll('.content-section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionIdToShow) {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
}
