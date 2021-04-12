export const convertDate = inputFormat => {
    const pad = s => {
      return s < 10 ? '0' + s: s;
    }
    var date = new Date(inputFormat);
    return [pad(date.getDate()), pad(date.getMonth() + 1),date.getFullYear()].join('-');
}