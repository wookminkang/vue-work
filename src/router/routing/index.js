const files = require.context('.', false, /\.js$/);
const routings = [];

files.keys().forEach(key => {
    if (key === './index.js') return
    // if (process.env.NODE_ENV === 'production' && key === './layouts.js') return
    routings.push(files(key).default)
})
console.log(routings)

export default routings
