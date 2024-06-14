import image from './space_main.jpg'
import {TextBlock, TitleBlock,  ImageBlock} from './blocks'

const text = new XMLHttpRequest();
text.open('GET', 'text4.txt');
text.onreadystatechange = function() {
    console.log(text.responseText);

    var textElement = document.getElementsByClassName('row')[2];
    textElement.innerHTML = text.responseText;
}
text.send();

export const model1 = [
    new TitleBlock('Галактики', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, black, #8e2de2)', /*linear-gradient(to right, #ff0099, #493240)*/
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
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
    }),
    new TextBlock(text, {
        styles: {
            background: '#20124d',
            padding: '1rem',
            color:'#eeeeee',
            'font-weight': 'bold'
        }
    })
]