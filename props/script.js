var prop = 'email'
const userData = {
    columns: {
        email: {
            attributes: { type: 'text', name: 'email', className: 'form-control', id: 'email', value: '' },
            handler: function () { },
            validation: {},
        },
        password: {
            attributes: { type: 'password', name: 'password', className: 'form-control', id: 'password', value: '' },
            handler: function () { },
            validation: {},
        },
    },
    get [prop = 'email']() {
        debugger
        console.log('prop: ', prop)
    }
}
var x = userData.columns
console.log(x)
function prova(columns = [], attributes = {}, handler = function () { }, validation = {}) {
    columns.reduce((acc, obj) => {
        debugger
        acc[obj] = {}
    }, {})
}
// prova(['email', 'password', 'passwordConfirmation'])
