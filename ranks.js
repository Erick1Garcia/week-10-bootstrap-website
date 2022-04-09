let id = 0;

document.getElementById('add').addEventListener('click' , () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('sport').value;
    row.insertCell(2).innerHTML = document.getElementById('reason').value;
    let actions = row.insertCell(3);

    document.getElementById('name').value = ''
    document.getElementById('sport').value = ''
    document.getElementById('reason').value = ''
});