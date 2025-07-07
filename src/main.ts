import converterMdParaHTML from './core/converterMdParaHTML'
import getMyMd from './core/getMyMd'
import './global.css'

const url: string = 'https://raw.githubusercontent.com/WallaceBarrosDev/segundo_cerebro/main/Recursos/JavaScript/'
const file: string = 'Tratamento de erros.md'

const markdown = await getMyMd(url, file)
const html = await converterMdParaHTML(markdown)

const div = document.querySelector(".text_content") as HTMLElement
div.innerHTML = html

