import { useState, useEffect } from "react";
import Pet from './Pet';

const animals = ["Bird", "Dog", "Cat", "Rabbit", "Reptile"];
const breeds = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets)
  } // Create function inside of render because I have a closure where I can reference the state for the API url.

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
           <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
            />
        </label>
        <label htmlFor="animal">
          Animal
           <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {animals.map(elm => <option value={elm} key={elm}>{elm}</option>)}
           </select>
        </label>
        <label htmlFor="breed">
          Breed
           <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option />
            {breeds.map(elm => <option value={elm} key={elm}>{elm}</option>)}
           </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map(elm => <Pet name={elm.name} animal={elm.animal} breed={elm.breed} key={elm.id}/>)}
    </div>
  );
};

export default SearchParams;