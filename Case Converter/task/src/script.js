// Upper case converter
document.getElementById('upper-case').onclick = function() {
    document.getElementById('textarea').value = document.getElementById('textarea').value.toUpperCase();
}


// Lower case converter
document.getElementById('lower-case').onclick = function () {
    document.getElementById('textarea').value = document.getElementById('textarea').value.toLowerCase();
}


// Proper Case converter
document.getElementById('proper-case').onclick = function () {
    let arrayString = document.getElementById('textarea').value.split(" ");
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
    }
    document.getElementById('textarea').value = arrayString.join(' ');
}


// Sentence case converter
document.getElementById('sentence-case').onclick = function () {
    let arrayString = document.getElementById('textarea').value.toLowerCase().replace(/(\.+|:|!|\?)("*|'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|");
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
    }
    document.getElementById('textarea').value = arrayString.join(' ');
}

// Downloading file with entered text
document.getElementById('save-text-file').onclick = function() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById('textarea').value));
    element.setAttribute('download', 'text.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

