export const mask_date = (v) => {

    var value = ""
    if (v.match(/^\d{2}$/) !== null) {
        value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        value = v + '/';
    }

    return value
}