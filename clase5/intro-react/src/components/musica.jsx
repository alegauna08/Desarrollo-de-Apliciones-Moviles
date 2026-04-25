const musica = ['rock', 'pop', 'reggaeton', 'cumbia', 'tango', 'salsa', 'merengue', 'bachata', 'hip hop', 'trap'];

export default function Musica() {
  return (
    <>
      <h1 className='musica'>Musica</h1>
      <ul className='musica'>
        {musica.map((genero, index) => (
          <li key={index}>{genero}</li>
        ))}
      </ul>
    </>
  )
}
