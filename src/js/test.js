
const patches = {
    0: [
        {
            type: 'ATTR',
            attrs: {
                class: 'list-wrap',
                style: 'width: 300px; height: 200px; background-color: orange'
            }
        }
    ],
    2: [
        {
            type: 'ATTR',
            attrs: {
                class: 'title',
            }
        }
    ],
    3: [
        {
            type: 'TEXT',
            text: '特殊列表项'
        }
    ],
    6: [
        {
            type: REMOVE,
            index: 6
        }
    ],
    7: [
        {
            type: REPLACE,
            newNode: Element
        }
    ]
}




