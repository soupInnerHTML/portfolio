export async function getFromServer(path: string) {
    const data = await fetch(process.env.REACT_APP_API_BASE_URI + `/${path}.json`)
    return await data.json()
}
