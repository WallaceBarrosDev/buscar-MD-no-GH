export default async function getMyMd(url: string, file: string): Promise<string> {
  try {
    const response = await fetch(url+file);
    if(!response.ok) throw new Error("arquivo não encontrado");
    return await response.text();
  } catch(err) {
    console.error(`Erro ${err}`)
    return 'Erro na requisição'
  }
}
