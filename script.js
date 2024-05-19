function setupLoadMore(buttonSelector, containerSelector, boxClass, initialItems = 4) {
    let loadMoreBtn = document.querySelector(buttonSelector);
    let currentItem = initialItems;

    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll(`${containerSelector} .${boxClass}`)];
        for (let i = currentItem; i < currentItem + 4; i++) {
            if (boxes[i]) {
                boxes[i].style.display = 'inline-block';
            }
        }
        currentItem += 4;
        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

setupLoadMore('#load-more-1', '.box-container-1', 'box-1');
setupLoadMore('#load-more-2', '.box-container-2', 'box-2');
setupLoadMore('#load-more-3', '.box-container-3', 'box-3');
