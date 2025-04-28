export const pushToLocalStorage = (key: string, item: any) => {
    const arrayForPush = readAllFromLocalStorage(key) || []
    arrayForPush.push(item)
    localStorage.setItem(key, JSON.stringify(arrayForPush))
}

export const readAllFromLocalStorage = (key: string): any => {
    const items = localStorage.getItem(key)
    return items ? JSON.parse(items) : [];

}

export const pushAllToLocalStorage = (key: string, item: any): any => {
    localStorage.setItem(key, JSON.stringify(item))
}