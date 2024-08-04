
/**
 * Needs to be run in a render function to get random value
 * @returns a random fallback image path
 */
export const generateRandomFallbackImage = () => {
    return `/fallback/fallback${Math.floor(Math.random() * 10) + 1}.jpg`;
}