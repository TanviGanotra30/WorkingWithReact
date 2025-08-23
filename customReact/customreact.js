function customRender(reactElement,container){
    //agr bohot saare attributes honge toh ase problem hogi na
    //so we will use loop

    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)


    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    const propKeys = Object.keys(reactElement.props);
    for(let i = 0; i < propKeys.length; i++) {
        const prop = propKeys[i];
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer);