export function strSlice(str, start = 0, end = 10) {
  return str.substring(start, end);
}

export function picsumImage(id = 1, width = 500, height = 420) {
  return `${process.env.REACT_APP_PHOTO_API}/${id}/${width}/${height}`;
}

export function loremflickrImage(id = 1, width = 500, height = 420) {
  return `//loremflickr.com/${width}/${height}/nature,sports,women?lock=${id}`;
}
