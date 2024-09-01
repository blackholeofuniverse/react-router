// This way of fetching api is fast and optimized
export const gitInfoLoader = async () => {
    const respone = await fetch("https://api.github.com/users/blackholeofuniverse")
    return respone.json()
}