


function If (props) {

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChild = props.children.filter(child => {
        return child != elseChild
    })

    if(props.test)
        return ifChild;
    else
        return elseChild;
}

function Else (props) {
    return props.children;
}

module.exports = {
    If,
    Else
}