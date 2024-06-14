import image from './space_main.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './blocks'

const text = 'main text'
/*$.get('/docs/file.txt',{},function(content){
    let lines=content.split('\n');

    console.log(`"file.txt" contains ${lines.length} lines`)
    console.log(`First line : ${lines[0]}`)

});*/

export const model = [
    new TitleBlock('Пособие по астрономии для учеников основной школы', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, black, #8e2de2)', /*linear-gradient(to right, #ff0099, #493240)*/
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        'колонка текста1',
        'колонка текста2',
        'колонка текста3'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '1rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '1000px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
/*    new TextBlock(text, {
        styles: {
            background: '#20124d',
            padding: '1rem',
            color:'#eeeeee',
            'font-weight': 'bold'
        }
    })*/

]
