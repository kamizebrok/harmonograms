import { Link } from "react-router-dom/cjs/react-router-dom";

/*sfc*/
const SubjectList = ({ subjects, title }) => { 
/*, handleDelete   <button onClick={() => handleDelete(subject.id)}>Usuń</button>*/

    return ( 
        <div className="subject-list">
            {subjects.map((subject) => (
                <div className="subject-preview" key={subject.id}>
                    <Link to = {`/subjects/${subject.id}`}>
                        <h3>{ subject.title }</h3>
                        <p>Prowadzący: { subject.prof }</p>
                        <p>Czas trwania: { subject.len } godziny</p>
                        <p>Data i godzina: { subject.date }, {subject.time} </p>
                        <p>Miejsce: { subject.place }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default SubjectList;