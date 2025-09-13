// Не готово. Некоторые тест кейсы падают

const frame = (text, char) => {
    const maxLength = text.length === 1 ? text[0].length : text.sort((a, b) => b.length - a.length)[0].length

    const topAndBottomBorder = Array(maxLength + 4).fill(char).join('')
    const leftBorder = `\n${char}`
    const rightBordr = `${char}\n`

    const wordsSeparator = ` ${char}\n${char} `

    const formattedWords = text.map(((value, index) => {
        if (index === 0) value

        const temp = value.split('')
        const filler = Array(maxLength - value.length).fill(' ')
        temp.push(...filler)
        
        const formattedValue = temp.join('')

        return formattedValue
    }))

    const combinedWords = formattedWords.join(wordsSeparator)

    return `${topAndBottomBorder}${leftBorder} ${combinedWords} ${rightBordr}${topAndBottomBorder}`;
};