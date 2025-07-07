import { marked } from "marked";

export default async function converterMdParaHTML(arquivo_md: string): Promise<string> {
  if (!arquivo_md || arquivo_md == undefined) throw new Error("Arquivo MarkDown vazil");

  return await marked(arquivo_md);
}
