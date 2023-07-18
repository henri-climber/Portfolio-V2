import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className='test'>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          <h1>{char}</h1>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters