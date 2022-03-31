const getFiles = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFiles::', () => {
    it('must be a function',() => {
        expect(typeOf(getFiles).toBe('function'))
    })
    it('should return an array with results', async () => {
        expect(await getFiles('/home/MacartyF/Node/lib-markdown/test/files/text1.md')).toEqual(arrayResult)
    })
    it('should return message "don´t have links"', async () => {
        expect(await getFiles('/home/MacartyF/Node/lib-markdown/test/files/without_links.md')).toBe('don´t have links')
    })
})
 