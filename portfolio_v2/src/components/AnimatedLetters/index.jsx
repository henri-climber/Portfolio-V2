import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className='test'>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          <h2>{char}</h2>
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters