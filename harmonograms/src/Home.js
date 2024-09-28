import { useState, useEffect } from "react";
import SubjectList from "./SubjectList";
import useFetch from "./useFetch";
import Navbar from "./Navbar";
/*sfc*/
const Home = ( { no } ) => {

    const { data: subjects, isPending, error } = useFetch('http://localhost:8000/subjects');

    const filteredSubjects = subjects?.filter(subject => subject.nr === no);
    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Trwa ładowanie...</div> }
            {<div><h2>Harmonogram { no }</h2></div>}
            {filteredSubjects && <SubjectList
              subjects={filteredSubjects.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                if (dateA - dateB !== 0) {
                  return dateA - dateB;
                }

                const timeA = a.time ? a.time.split(":").map(Number) : [0, 0];
                const timeB = b.time ? b.time.split(":").map(Number) : [0, 0];

                if (timeA[0] !== timeB[0]) {
                  return timeA[0] - timeB[0]; // Sortowanie po godzinach
                }
                return timeA[1] - timeB[1]; // Sortowanie po minutach
              })} 
            />
            }
        </div>
      );
}

export default Home;