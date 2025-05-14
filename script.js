document.addEventListener('DOMContentLoaded', function() {
    // Change text content
    document.getElementById('dynamicText').textContent = 'Text has been changed!';

    // Modify CSS styles
    document.querySelector('h1').style.color = 'blue';

    // Add or remove element
    const toggleButton = document.getElementById('toggleButton');
    const elementContainer = document.getElementById('elementContainer');
    let elementVisible = false;

    toggleButton.addEventListener('click', function() {
        if (elementVisible) {
            // Remove element
            elementContainer.innerHTML = '';
            elementVisible = false;
        } else {
            // Add element
            const newElement = document.createElement('p');
            newElement.textContent = 'This element has been added dynamically!';
            elementContainer.appendChild(newElement);
            elementVisible = true;
        }
    });

    // Update text
    const updateTextButton = document.getElementById('updateTextButton');
    const textInput = document.getElementById('textInput');
    updateTextButton.addEventListener('click', function() {
        document.getElementById('dynamicText').textContent = textInput.value;
    });

    // Change font size
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    fontSizeSelect.addEventListener('change', function() {
        document.querySelector('h1').style.fontSize = this.value;
    });

    // Add list item
    const addListItemButton = document.getElementById('addListItemButton');
    const listItemInput = document.getElementById('listItemInput');
    const itemList = document.getElementById('itemList');
    addListItemButton.addEventListener('click', function() {
        const newItemText = listItemInput.value;
        if (newItemText) {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            listItemInput.value = '';
        }
    });
});
