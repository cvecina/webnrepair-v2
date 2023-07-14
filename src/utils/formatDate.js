export function formatDate(date) {
    let fecha = new Date(date);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    return `${dia}/${mes}/${year}`;
}

export function formatDateWithTime(date) {
    let fecha = new Date(date);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    return `${hora}:${minutos} ${dia}/${mes}/${year}`;
}