export const formatDate = (time) => {
    let date = new Date(time);
    let options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };
    return date.toLocaleDateString('en', options);
}
