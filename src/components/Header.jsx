

function Header({ fetchData}) {
  return (
    <header>
      <h2>Super Hero Generator</h2>
      <button onClick={fetchData}>Generate</button>
    </header>
  )
}

export default Header;
