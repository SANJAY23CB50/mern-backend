import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function Showtimes() {
  const { id } = useParams(); // movieId
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      const res = await API.get("/showtimes");
      setShowtimes(res.data.filter(s => s.movie === id));
    };
    fetchShowtimes();
  }, [id]);

  return (
    <div>
      <h2>Showtimes</h2>
      {showtimes.map((s) => (
        <div key={s._id}>
          <p>{s.date} at {s.time}</p>
          <p>Seats: {s.seats}</p>
        </div>
      ))}
    </div>
  );
}

export default Showtimes;
