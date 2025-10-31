

export const useUser = async (url) => {
    try {
        const res = await fetch(url);
        const response = res.json();
        return response;
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}