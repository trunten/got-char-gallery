import Character from "./Character";
import json from "../data/characterData.json";
export default function CharacterGallery() {
  return (
    <div data-test="component-char-gallery" className="container-fluid">
      <div className="row">
        {json.map(character => <Character key={character._id} {...character} />)}
      </div>
    </div>
  );
}