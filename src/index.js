const isString = (value) => typeof value === 'string' || value instanceof String;

const scanClojure = (content) => {
    const a = [];

    // Match keyword classes
    const keywordMatches = content.matchAll(/:([^\s\])]+)/g);
    for (const match of keywordMatches) {
        const res = match[1];

        a.push(res);

        if (isString(res)) {
            const splitMatch = res.match(/[^.]+/g)

            for (const n in splitMatch) {
                const w = splitMatch[n];
                a.push(w);
            }
        }
    }

    // Match string classes
    const stringMatches = content.matchAll(/"([^"]+?)"/g);
    for (const match of stringMatches) {
        const res = match[1];

        if (isString(res)) {
            const splitMatch = res.match(/\S+/g)

            for (const n in splitMatch) {
                const w = splitMatch[n];
                a.push(w);
            }
        }
    }

    return a;
}

module.exports = {scanClojure};
