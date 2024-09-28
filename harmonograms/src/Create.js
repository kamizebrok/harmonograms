import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [nr, setNr] = useState('1');
  const [body, setBody] = useState('');
  const [prof, setProf] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [len, setLen] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = { title, body, prof, len, date, time, place, nr };

    fetch('http://localhost:8000/subjects/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subject)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Nowy przedmiot</h2>
      <form onSubmit={handleSubmit}>
        <label>Tytuł zajęć:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Harmonogram:</label>
        <select
          value={nr}
          onChange={(e) => setNr(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label>Prowadzący:</label>
        <input 
          type="text" 
          required 
          value={prof}
          onChange={(e) => setProf(e.target.value)}
        />
        <label>Data rozpoczęcia:</label>
          <input 
          type="date" 
          required 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Godzina rozpoczęcia:</label>
          <input 
          type="time" 
          required 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>Czas trwania</label>
        <input 
          type="number"
          step = "0.5"
          required 
          value={len}
          onChange={(e) => setLen(Number(e.target.value))}
        />
        <label>Miejsce zajęć</label>
        <input 
          type="text" 
          required 
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <label>Informacje:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Dodaj przedmiot</button>
      </form>
    </div>
  );
}
 
export default Create;