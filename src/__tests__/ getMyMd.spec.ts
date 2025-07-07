import getMyMd from "../core/getMyMd";

describe('Test param', () => {
  
  it('se os parametros não forem string', async () => {
    const url = 1; const file = 1
    
    await expect(getMyMd(url, file)).rejects.toThrowError('parametros invalidos')
  })

  it('se os parametros forem vazios', async () => {
    const url = undefined; const file = undefined

    await expect(getMyMd(url, file)).rejects.toThrowError('parametros invalidos')
  })

  it('', async () => {
    const url = 'string'; const file = 'string'

    expect(await getMyMd(url, file)).toBe('')
  })
})
