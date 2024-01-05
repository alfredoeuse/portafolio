function toggleSelect(id) {
    var select = document.getElementById(id);
    if (select.style.display === 'none') {
        select.style.display = 'block';
    } else {
        select.style.display = 'none';
    }
}


function ver(id) {
    document.getElementById(id).style.display = 'block';
}

function ocultar(id) {
    document.getElementById(id).style.display = 'none';
}