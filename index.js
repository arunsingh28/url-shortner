const express = require('express')
const app = express()


const url = 'https://benchmarks.ul.com/compare/best-gpus';

app.get('/', (req, res) => {
    const link = url;
    return res.json({
        link
    })
})

app.get('/:link', (req, res) => {

})


const port = process.env.PORT || 80;
app.listen(port, console.log(`server runinng on port ${port}`))