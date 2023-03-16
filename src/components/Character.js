export default function Character({height, race, gender, birth, spouse, death, realm, hair, name, wikiUrl, imgUrl}) {
  return (
    <div data-test="component-character">
      <h2 data-test="char-name">{name}</h2>
      <img data-test="char-img" src={imgUrl} alt={name}></img>
      <ul data-test="char-list">
        {gender && <li data-test="char-gender">Gender: {gender}</li>}
        {race && <li data-test="char-race">Race: {race}</li>}
        {realm && <li data-test="char-realm">Realm: {realm}</li>}
        {spouse && <li data-test="char-spouse">Spouse: {spouse}</li>}
        {birth && <li data-test="char-birth">Date of birth: {birth}</li>}
        {death && <li data-test="char-death">Date of Death: {death}</li>}
        {height && <li data-test="char-height">Height: {height}</li>}
        {hair && <li data-test="char-hair">Hair: {hair}</li>}
        {wikiUrl && <li data-test="char-hair"><a href={wikiUrl}>Wiki</a></li>}
      </ul>
    </div>
  );
}