document.addEventListener('DOMContentLoaded', function () {
   
    // Create local storage
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    const savedListStyle = localStorage.getItem('listStyle') || 'list-style1';

    // Apply saved preferences
    document.getElementById('theme').value = savedTheme;
    document.getElementById('list-style').value = savedListStyle;
    applyPreferences();

    // Add items to the list
    const dynamicList = document.getElementById('dynamic-list');
    const items = ['Apple', 'Banana', 'Watermelon', 'Grape', 'Strawberry'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        dynamicList.appendChild(li);
    });

    // Event listener for theme and list
    document.getElementById('theme').addEventListener('change', applyPreferences);
    document.getElementById('list-style').addEventListener('change', applyPreferences);
});

function applyPreferences() {

    // Selected theme and list style
    const selectedTheme = document.getElementById('theme').value;
    const selectedListStyle = document.getElementById('list-style').value;

    // Apply selected preferences
    document.body.className = selectedTheme;
    document.getElementById('dynamic-list').className = selectedListStyle;

    // Save preferences to local storage
    localStorage.setItem('theme', selectedTheme);
    localStorage.setItem('listStyle', selectedListStyle);
}
