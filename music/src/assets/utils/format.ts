export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 1000) + "万"
  } else {
    return count
  }
}
export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?params=${width}y${height}`
}
