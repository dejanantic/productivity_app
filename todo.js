(function () {

    const form = document.querySelector('form');
    const ul = document.querySelector('.bucket-list');
    const input = document.querySelector('#item');
    const button = document.querySelector('.clear');
    const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));

    const liMaker = text => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.className = 'remove-button';
        button.innerHTML = '&times;'
        li.textContent = text;
        li.appendChild(button);
        ul.appendChild(li);
    }

    const removeArrItem = function removeItemFromArray(element) {
        let item = element.firstChild.nodeValue;
        let itemIndex = itemsArray.indexOf(item);
        itemsArray.splice(itemIndex, 1);
    }

    const toggleVisibility = function toggleRemoveAllButtonVisibility() {
        button.hidden = !button.hidden;
    }

    data.forEach(item => {
        liMaker(item);
    });

    form.addEventListener('submit', function addItem(e) {
        e.preventDefault();

        let text = input.value;
        console.log(text);
        liMaker(text);
        itemsArray.push(text);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        input.value = '';
    })

    button.addEventListener('click', function clearDistractionBucket() {
        itemsArray.length = 0;
        localStorage.clear();
        while (ul.firstChild) ul.removeChild(ul.firstChild);
    })

    ul.addEventListener('click', function removeItem(e) {
        if (e.target.className !== 'remove-button') return;
        let item = e.target.closest('li');
        removeArrItem(item);
        item.remove();
        localStorage.setItem('items', JSON.stringify(itemsArray));
    })




})()