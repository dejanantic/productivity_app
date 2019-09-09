const distractionBucket = document.querySelector('.distraction-bucket');

distractionBucket.addEventListener('keyup', function addItem(e) {
    if (e.keyCode !== 13) return;
    const input = document.querySelector('.user-input');
    let text = input.value.trim();
    appendItem(text);
    input.value = '';
    console.log(text);
})

distractionBucket.addEventListener('click', function removeItem(e) {
    if (!(e.target.classList.contains('remove'))) return;
    let li = e.target.closest('li');
    li.remove();
})

function appendItem(text) {
    const bucketList = document.querySelector('.bucket-list');
    bucketList.insertAdjacentHTML('beforeend', `<li>${text}<button class="remove">&times;</button></li>`);
}