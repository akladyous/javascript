function isNumerc(...args) {
    debugger
    console.log(args)
    
    return /^-?\d+$/.test(this)
};

isNumerc.apply([1,2,3])