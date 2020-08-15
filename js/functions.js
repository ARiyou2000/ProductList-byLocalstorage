function show(itemsList) {
    clearList()

    // Check kind of data sort
    if ($('input[name=sort]:checked').val() == 'nameSort') {
        sortName(itemsList)
    } else {
        sortPage(itemsList)
    }

    let panelAddress = document.getElementById('displayPanel')
    itemsList.forEach((value, index, array) => {
        let itemDiv = document.createElement("div")
        let itemName = document.createElement("h1")
        let itemPages = document.createElement("p")
        let itemDelete = document.createElement("button")

        itemName.textContent = value.name
        itemPages.textContent = value.pages
        itemDelete.textContent = 'Delete'

        itemDiv.id = 'item-' + value.name

        itemDiv.classList.add('item', 'border', 'rounded', 'mx-2', 'my-1')
        itemName.classList.add('itemName', 'd-inline-block', 'item-heading', 'col-5')
        itemPages.classList.add('itemPages', 'd-inline-block', 'item-text', 'col-5', 'ml-1')
        itemDelete.classList.add('btn', 'btn-danger', 'itemDelete')

        itemDelete.setAttribute('onclick', 'deleteItem(this)')

        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemPages)
        itemDiv.appendChild(itemDelete)
        // itemDiv.appendChild(document.createElement('hr'))
        panelAddress.appendChild(itemDiv)
    })
}

function showAll() {
    createArray()
    show(booksList)
    document.getElementById('filter-name').value = ''
    document.getElementById('filter-pages').value = ''
}

function clearList() {
    document.querySelectorAll('.item').forEach((value, index, array) => {
        value.remove()
    })
}

function enablePageInput() {
    // document.getElementById('filter-name').value = ''
    document.getElementById('filter-pages').disabled = false
    document.getElementById('filter-name').disabled = true
    document.getElementById('filter-pages').focus()
    showAll()
}

function enableNameInput() {
    // document.getElementById('filter-pages').value = ''
    document.getElementById('filter-pages').disabled = true
    document.getElementById('filter-name').disabled = false
    document.getElementById('filter-name').focus()
    showAll()
}

function deleteItem(btnDelete) {
    // $('#deleteModal-name').value = btnDelete.parentElement.querySelector("h1").textContent
    // $('#deleteModal-page').textContent = btnDelete.parentElement.querySelector("p").textContent

    // $('#deleteWarningModal').modal()

    let bookName = btnDelete.parentElement.querySelector("h1").textContent
    let bookPage = btnDelete.parentElement.querySelector("p").textContent
    if (window.confirm(`Are you sure to delete following data?\n\nBook Name: ${bookName}        Pages Number: ${bookPage}`)) {
        localStorage.removeItem(bookName)
    }
    showAll()
}

function addItem() {
    let nameIn = document.getElementById('modal-input-name').value
    let pageIn = document.getElementById('modal-input-pages').value
    if (nameIn.length != 0 && pageIn.length != 0) {
        localStorage.setItem(nameIn, pageIn)
        document.getElementById('modal-input-name').value = ''
        document.getElementById('modal-input-pages').value = ''
    } else {
        alert('Please fill all inputs')
    }
    showAll()
}

function showModal() {
    // document.getElementById('deleteWarningModal').modal(show)
    // modalAddress.modal()

}

function sortName(itemList) {
    itemList.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
        } else {
            return 0
        }
    })
}

function sortPage(itemList) {
    itemList.sort((a, b) => {
        if (parseInt(a.pages) > parseInt(b.pages)) {
            return 1
        } else if (parseInt(a.name) < parseInt(b.name)) {
            return -1
        } else {
            return 0
        }
    })
}