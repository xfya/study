export function addClass(el, className) {

}


export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s$)')
    return reg.test(el)

}