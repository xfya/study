export function addClass(el, className) {
    if (hasClass(el, className)) {
        return;
    }

    let newClass = el.className.split(' ');
    newClass.push(className)
    el.className = newClass.join(" ")

}


export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s$)')
    return reg.test(el.className)
}

export function getDate(el, name, val) {
    const name1 = 'data-' + name
    if (val) {
        return el.setAttribute(name1, val)
    } else {
        return el.getAttribute(name1)
    }
}