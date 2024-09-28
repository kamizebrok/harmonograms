/*sfc*/
const HoursList = ({ subjects, title }) => { 
    /*, handleDelete   <button onClick={() => handleDelete(subject.id)}>Usuń</button>*/
    const professors = subjects.reduce((acc, subject) => {
        if (acc.has(subject.prof)) {
          // Dodajemy czas trwania do już istniejącego prowadzącego
          acc.set(subject.prof, acc.get(subject.prof) + subject.len);
        } else {
          // Dodajemy nowego prowadzącego z początkowym czasem trwania
          acc.set(subject.prof, subject.len);
        }
        return acc;
      }, new Map());
    const totalHours = Array.from(professors.values()).reduce((sum, hours) => sum + hours, 0);

        return ( 
            <div className="professor-list">
                <h2>{ title }</h2>
                <br />
                {Array.from(professors).map(([prof, totalLen]) => (
                <div className="professor-preview" key={prof}>
                    <h3>{prof}</h3>
                    <p>Łączny czas trwania zajęć: {totalLen}</p>
                </div>
      ))}
      <br />
      <h3>Suma wszystkich: {totalHours}</h3>
    </div>
  );
    }
     
    export default HoursList;