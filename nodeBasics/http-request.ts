// Approach-1
const http = require('http')

const data = http.request('http://www.google.com',(res) => {
    res.on('data',(chunk) => {
        console.log(`Data :${chunk}`)
    })
    res.on("end",() => {
        console.log('No more Data')
    })
})

data.end()

// Approach-2
// only the get method will fetch and display the information
// no need to specify the end at bottom it will , going to make the call get, and it , call the end method itself
const {get} = require('https')
get('https://google.com',(res) => {
    res.on('data',(chunk) => {
        console.log(`Data :${chunk}`)
    })
    res.on("end",() => {
        console.log('No more Data')
    })
})
