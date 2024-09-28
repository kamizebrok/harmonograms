import { useState, useEffect } from "react";
import HoursList from "./HoursList";
import useFetch from "./useFetch";
/*sfc*/
const HomeStats = () => {
    const { data: subjects } = useFetch('http://localhost:8000/subjects');

    const checkForCollisions = (subjects) => {
        const professors = {};
      
        // Grupowanie zajęć według profesorów
        subjects.forEach((subject) => {
          const { date, time, len, prof } = subject;
      
          const startTime = new Date(`${date}T${time}`);
          const endTime = new Date(startTime.getTime() + len * 60 * 1000); // Dodanie długości zajęć do czasu rozpoczęcia
      
          if (!professors[prof]) {
            professors[prof] = [];
          }
      
          // Sprawdzanie kolizji dla obecnych zajęć profesora
          const hasCollision = professors[prof].some((session) => {
            return (
              (startTime >= session.startTime && startTime < session.endTime) || // Zajęcia zaczynają się w trakcie innych
              (endTime > session.startTime && endTime <= session.endTime) ||     // Zajęcia kończą się w trakcie innych
              (startTime <= session.startTime && endTime >= session.endTime)     // Zajęcia obejmują inne zajęcia
            );
          });
      
          if (!hasCollision) {
            professors[prof].push({ startTime, endTime });
          }
        });
      
        // Zwracamy, czy są jakiekolwiek kolizje
        return Object.keys(professors).some(prof => professors[prof].length < subjects.filter(s => s.prof === prof).length);
    };
      

    const [hasCollisions, setHasCollisions] = useState(false);
    useEffect(() => {
        if (subjects) {
          setHasCollisions(checkForCollisions(subjects)); // Sprawdzanie kolizji
        }
      }, [subjects]);


    return ( 
        <div className="stats">
            {subjects && <HoursList subjects={subjects} title = "Ilość godzin" />}
            <br />
            {hasCollisions ? (
                <p>Uwaga! Jeden z profesorów ma kolizję w harmonogramie.</p>
                ) : (
                <p>Brak kolizji w harmonogramie.</p>
            )}
        </div>
      );
}

export default HomeStats;