exports.filter = function*(items, apply, top = items.length){
    let index=0;
    let count = 0;
    while(count< top && index < items.length) {
        if(apply(items[index])) {
            yield items[index];
            count++;
        }
        index++;
    }
}