replaceText(document.body)

function replaceText(element) {
    //elements with comments and texts
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) { //3 type text

        if(element.textContent.match(/coronavirus/gi)){
            const newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi ,
            "<span class = 'rainbow'>$1</span>");
            element.replaceWith(newElement)
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'hi')
    }
}

