import getMyMd from './core/getMyMd'
import './global.css'

const url: string = 'https://raw.githubusercontent.com/WallaceBarrosDev/segundo_cerebro/main/Recursos/JavaScript/'
const file: string = 'Tratamento de erros.md'

const markdown = await getMyMd(url, file)
const textContent = document.querySelector(".text_content") as HTMLElement;

textContent.textContent = markdown
