var booksList = []

// localStorage.setItem('java', 900)
// localStorage.setItem('python', 200)
// localStorage.setItem('Javascript', 500)
// localStorage.setItem('C#', 250)

function createArray() {
    // for (i = 0; i < booksList.length; i++) {
    //     booksList.pop()
    // }
    booksList = []
    for (i = 0; i < localStorage.length; i++) {
        let keyName = localStorage.key(i)
        let value = localStorage.getItem(keyName)

        booksList.push({name: keyName, pages: value})
    }
}

showAll()
showAll()

document.getElementById('filter-pages').addEventListener('input', (ev) => {
    // const tempArray = []
    // booksList.forEach((value, index, array) => {
    //     if (value.pages <= ev.target.value) {
    //         tempArray.push(value)
    //     }
    // })
    // show(tempArray)

    const tempArray = booksList.filter((value, index, array) => {
        return parseInt(value.pages) < parseInt(ev.target.value)
    })
    show(tempArray)
})

document.getElementById('filter-name').addEventListener('input', (ev) => {
    // const tempArray = []
    // booksList.forEach((value, index, array) => {
    //     if (value.name.toLowerCase().includes(ev.target.value.toLowerCase())) {
    //         tempArray.push(value)
    //     }
    // })
    // show(tempArray)

    const tempArray = booksList.filter((value, index, array) => {
        return value.name.toLowerCase().includes(ev.target.value.toLowerCase())
    })
    show(tempArray)
})