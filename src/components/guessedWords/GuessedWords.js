import React from 'react'
import PropTypes from 'prop-types'
const GuessedWords = (props) => {   
    return (
        <div data-test='component-guessed-words' >
           {props.guessedWords.length===0 ? <h2 data-test='instruction-msg'>Try to guess the secret word!</h2>:<h2>Table of guessed words here</h2>}
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
