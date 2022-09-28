import util from 'node:util';

const asyncFunc = (v) => Promise.reject(10)

const cb = util.callbackify(asyncFunc);
cb((e, v) => {
    if (e) {
        console.log('rejected : ', e)
    } else {
        console.log('resolved : ', v)
    }
})

function createRoute(obj) {
    this.obj = obj
};
