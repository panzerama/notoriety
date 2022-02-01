const http = require('http')
const { syncBuiltinESMExports } = require('module')

const count = 3
let queue = []

function displayQueueItem(item) {
    console.log(item.full)
}

function testDone() {
    if (queue.length == 3) {
        // when comparing items a and b
        // sort using index
        // a > b = 1 = true
        queue.sort((a, b) => (a.idx > b.idx) ? 1 : -1)
        queue.forEach(displayQueueItem)
    }
}

function getURL(url, idx) {
    http.get(process.argv[idx + 2], function(response) {
        let full = ""
        response.on('data', function(data) {
            full += data
        })
        response.on('error', console.error)
        response.on('end', function(end) {
            queue.push({ idx, full })
            testDone()
        })
    }).on('error', console.error)
}

function main() {
    for (let i = 0; i < count; i++) {
        getURL(process.argv[i], i)
    }


    // doesn't work, because they're not done running
    // console.log(queue)
}



main()