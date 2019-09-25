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
        li.textContent = text;
        ul.appendChild(li);
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




})()