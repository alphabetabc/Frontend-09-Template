function kmp(source, pattern) {
    // table
    const table = new Array(pattern.length).fill(0);
    {
        // i:自重复的次数, j:已重复的次数
        let i = 1,
            j = 0;

        while (i < pattern.length) {
            //
            if (pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }
        }
        console.log(table);
    }
    {
        // i:source的位置, j: pattern的位置
        let i = 1,
            j = 0;
        while (i < source.length) {
            if (pattern[j] === source[i]) {
                ++i;
                ++j;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }

            if (j === pattern.length) {
                return true;
            }
        }
        return false;
    }
    // match
}

console.log(kmp('abc1abcaddabcab1ca', 'abcabca'));
