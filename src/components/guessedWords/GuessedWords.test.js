import {shallow} from 'enzyme'
import {findByTestAttr,checkProps} from '../../../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps =
    {
        guessedWords:[
            {guessedWord: 'chair',letterMatchCount: 3}
        ]
    }
    

const setup =(props={})=>{
    const setupProps ={...defaultProps,...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props',()=>{
    checkProps(GuessedWords,defaultProps)
})

describe('if there is no words guessed',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]})
    })
    test('renders with no errors',()=>{         
        const guessedWordsComp = findByTestAttr(wrapper,'component-guessed-words')
        expect(guessedWordsComp.length).toBe(1)
    })
    test('renders instruction to guess a word',()=>{
        const instructionMsg = findByTestAttr(wrapper,'instruction-msg');
       
        expect(instructionMsg.text().length).not.toBe(0)
    })
})

describe('if there are words guessed',()=>{
    const guessedWords=[
        {guessedWord: 'train',letterMatchCount: 3},
        {guessedWord: 'party',letterMatchCount: 5},
        {guessedWord: 'angle',letterMatchCount: 1}
    ]
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords})
    })
    test('renders without errors',()=>{
        const guessedWordsComp = findByTestAttr(wrapper,'component-guessed-words')
        expect(guessedWordsComp.length).toBe(1)
    })
    test('renders guessed word list',()=>{
        const guessedWordsList = findByTestAttr(wrapper,'list-guessed-words')
        expect(guessedWordsList.length).toBe(1)
    })
    test('correct number of guessed words',()=>{
        const guessedWord = findByTestAttr(wrapper,'guessed-word')
        expect(guessedWord.length).toBe(guessedWords.length)
    })
    test('not render instruction',()=>{})
})