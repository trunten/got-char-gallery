export default function Character({height, race, gender, birth, spouse, death, realm, hair, name, wikiUrl, imgUrl}) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div data-test="component-character" className="card h-100 shadow">
        <div className="card-header">
          <h2 data-test="char-name" className="mb-4 text-center">{name}</h2>
          {/* <div className="img-wrapper card-img-top p-4" style={{height:"300px"}}> */}
            <img data-test="char-img" src={imgUrl} alt={name} className="card-img-top d-block mx-auto mb-4" style={{height: "auto", width: "auto", maxHeight: "200px", minHeight: "200px"}}></img>
          {/* </div> */}
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <ul data-test="char-list" className="list-unstyled">
            {gender && <li data-test="char-gender"><b>Gender:</b> {gender}</li>}
            {race && <li data-test="char-race"><b>Race:</b> {race}</li>}
            {realm && <li data-test="char-realm"><b>Realm:</b> {realm}</li>}
            {spouse && <li data-test="char-spouse"><b>Spouse:</b> {spouse}</li>}
            {birth && <li data-test="char-birth"><b>Date of Birth:</b> {birth}</li>}
            {death && <li data-test="char-death"><b>Date of Death:</b> {death}</li>}
            {height && <li data-test="char-height"><b>Height:</b> {height}</li>}
            {hair && <li data-test="char-hair"><b>Hair:</b> {hair}</li>}
          </ul>
          {wikiUrl && <a data-test="char-wiki" className="mt-2 btn btn-outline-dark w-100 stretched-link" href={wikiUrl}>Wiki</a>}
        </div>
      </div>
    </div>
  );
}