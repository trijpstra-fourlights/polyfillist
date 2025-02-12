/**
 * Map browser from browserlist to https://cdnjs.cloudflare.com/polyfill/
 * @param browser - browser name
 * @returns
 */
export default function getBrowser (browser: string): string {
    if (browser === 'samsung')
        return 'samsung_mob'

    if (browser === 'and_chr')
        return 'chrome'

    if (browser === 'and_ff')
        return 'firefox'

    return browser
}
