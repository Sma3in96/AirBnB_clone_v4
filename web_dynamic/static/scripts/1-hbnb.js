document.addEventListener("DOMContentLoaded", function() {
    const amenity = $("[data-id]")
    let list = []
    for (let ame of amenity) {
        if (ame.checked === true) {
            list.push(ame.attributes['data-name'].nodeValue);
        } else {
            list.pop(ame.attributes['data-name'].nodeValue)
        }
    }
    $('.amenities h4').text(list.join(', '));
});
