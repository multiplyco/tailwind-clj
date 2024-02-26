let isString = value => typeof value === 'string' || value instanceof String;

let scanClojure = content => {
    var a = [];

    // Match keyword classes
    const keywordMatches = content.matchAll(/:([^\s\]\)]+)/g);
    for (const match of keywordMatches) {
        const res = match[1];

        //console.log(res);
        a.push(res);
    }

    // Match string classes
    const stringMatches = content.matchAll(/\"([^\"]+?)\"/g);
    for (const match of stringMatches) {
        const res = match[1];

        //console.log(res);
        // Split string by whitespace
        if (isString(res)) {
            const splitMatch = res.match(/\S+/g)

            //console.log(splitMatch);
            for (const n in splitMatch){
                const w = splitMatch[n];
                //console.log(w);
                a.push(w);
            }
        }
    }

    return a;
}

module.exports = {scanClojure: scanClojure};