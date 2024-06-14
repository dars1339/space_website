import image from './space_main.jpg'
import {TextBlock, TitleBlock,  ImageBlock} from '../blocks'

const text = `
страница1
`

export const model1 = [
    new TitleBlock('бебебе', {
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
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]
