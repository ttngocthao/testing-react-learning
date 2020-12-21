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
    
})