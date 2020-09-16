export const actionGenerator = (type, payload = {}) => ({ type, payload })

export const getLocalstorage = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const setLocalstorage = (key, item) => {
  try {
    localStorage.setItem(key, JSON.stringify(item))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}
