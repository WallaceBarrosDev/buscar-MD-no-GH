export default async function getMyMd(url: string, file: string): Promise<string> {
  if ((!url || !file) || (typeof url !== 'string' || typeof url !== 'string')) {
    throw new Error('parametros invalidos')
  }

  try {
    const response = await fetch(url+file);
    if(!response.ok) throw new Error("arquivo não encontrado");
    return await response.text();
  } catch(err) {
    console.error(err)
    return ''
  }
}
