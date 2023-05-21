let htmlObj = {
    0: {tag: 'div', tagName : ['divOne', 'divTwo','divThree'] },
    1: {tag: 'ul', tagName: ['list1'] },
    2: {tag: 'div', tagName: ['div1'],}, 
    3: {tag: 'li', tagName: ['li1','li2','li3']}
};


function json2html(object){
    const tags = new Array();
    const elements = new Array();
    for(let key in object){
        if(typeof object[key] === 'object' && Array.isArray(object[key]) == false){
            Object.entries(object[key]).forEach((tag) => {
                if( (typeof tag[0] === 'string') && (typeof tag[1] === 'string')){
                    elements.push(tag[1]);
                } else if(typeof tag[0] === 'string' && tag[1].constructor === Array){
                    tag[1].forEach( varName => {
                        // this[varName] = null;
                        // var element = elements.pop();
                        this[varName] = document.createElement(elements.slice(-1));
                        tags.push(varName);
                    })
                    elements.pop()
                }
                
            })
        }
    }
    console.log(tags)
}
