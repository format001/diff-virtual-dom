import Element from './Element'

function createElement (tag, props, children) {
    return new Element(tag, props, children);
}

function setAttrs (node, prop, value) {
    switch (prop) {
        case 'value':
            if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
                node.value = value;
            } else {
                node.setAttribute(prop, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(prop, value);
            break;
    }
}

function render (vDom) {
    const { type, props, children } = vDom,
        el = document.createElement(type);

    for (let key in props) {
        setAttrs(el, key, props[key]);
    }

    children.map((c) => {
        c = c instanceof Element
            ?
            render(c)
            :
            document.createTextNode(c);

        el.appendChild(c);
    })

    return el;
}

function renderDOM (rDom, rootEL) {
    rootEL.appendChild(rDom);
}

export {
    createElement,
    setAttrs,
    render,
    renderDOM
}