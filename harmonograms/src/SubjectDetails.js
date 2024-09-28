import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import SubjectList from "./SubjectList";

const SubjectDetails = () => {
  const { id } = useParams();
  //const { data: subject, error, isPending } = useFetch(`http://localhost:8000/subjects?id=${id}`);
  const { data: subject, error, isPending } = useFetch('http://localhost:8000/subjects/'+ id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/subjects/' + subject.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="subject-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { subject && (
        <article>
          <h2>{ subject.title }</h2>
          <p>Prowadzący: { subject.prof }</p>
          <p>Data i godzina: { subject.date }, { subject.time }</p>
          <p>Miejsce: { subject.place }</p>
          <div>{ subject.body }</div>
          <button onClick={handleClick}>Usuń</button>
        </article>
      )}
    </div>
  );
}
 
export default SubjectDetails;