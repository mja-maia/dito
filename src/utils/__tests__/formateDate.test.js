import formateDate from '../formatDate'

describe('utils/formateDate', () => {
    it('should formate from ISO 8601 pattern to dd/mm/yyyy pattern', () => {
        const inputData = '2016-09-22T13:57:32.2311892-03:00'
        const expectedData = '22/09/2016'
        const result = formateDate(inputData)

        expect(result).toBe(expectedData)
    })
    
    it('should formate from milliseconds pattern to dd/mm/yyyy pattern', () => {
        const inputData = 1549644864418
        const expectedData = '08/02/2019'
        const result = formateDate(inputData)

        expect(result).toBe(expectedData)
    })
})
