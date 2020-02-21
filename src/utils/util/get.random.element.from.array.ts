export function getRandomElementFromArray<T>(data: T[]): T {
  const length = data.length
  const random = Math.round(Math.random() * length)
  return data[random]
}
