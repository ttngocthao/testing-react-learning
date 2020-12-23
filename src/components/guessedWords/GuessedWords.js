import React from 'react'
import PropTypes from 'prop-types'
const GuessedWords = (props) => {  
    let contents
    if(props.guessedWords.length===0) {
        contents =<h2 data-test='instruction-msg'>Try to guess the secret word!</h2>
    }else{
        contents =(
        <div data-test='list-guessed-words'>
            <h3>Guessed Words</h3>
            <table className='ui celled table violet inverted'>
                <thead>
                     <tr>
                    <th>Guessed word</th>
                    <th>Matching letters</th>
                </tr>
                </thead>
                <tbody>
                    {props.guessedWords.map((word,index)=>(
                       <tr key={index} data-test='guessed-word'>
                        <td>{word.guessedWord}</td>
                        <td>{word.letterMatchCount}</td>
                       </tr> 
                    ))}
                </tbody>
                
            </table>
        </div>)
    }
    return (
        <div data-test='component-guessed-words' >
           {contents}
        </div>
    )
}
GuessedWords.propTypes ={
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}
export default GuessedWords
