//import image from './space_main.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './blocks'

const text = new XMLHttpRequest();
text.open('GET', 'text1(2).txt');
text.onreadystatechange = function() {
    console.log(text.responseText);

    var textElement = document.getElementsByClassName('row')[2];
    textElement.innerHTML = text.responseText;
}
text.send();
/*$.get('/docs/file.txt',{},function(content){
    let lines=content.split('\n');

    console.log(`"file.txt" contains ${lines.length} lines`)
    console.log(`First line : ${lines[0]}`)

});*/

export const model = [
    new TitleBlock('типа красивое название', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, black, #8e2de2)', /*linear-gradient(to right, #ff0099, #493240)*/
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
/*    new ImageBlock(image, {
        styles: {
            padding: '1rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),*/
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
    new TextBlock(text.responseText, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })

]
