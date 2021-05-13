export default (string) => {
    const cleanString = string.replace(/,/g,'');

    return cleanString;
}