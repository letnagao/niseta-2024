import { useState } from "react";
import "./Comments.css";
import white_arrow from "../../assets/white-arrow.png";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [participated, setParticipated] = useState(false);
  const [eventDetails, setEventDetails] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && newComment.trim()) {
      const comment = {
        name,
        participated,
        eventDetails: participated ? eventDetails : "Não participou",
        text: newComment,
      };
      setComments([...comments, comment]);
      setName("");
      setParticipated(false);
      setEventDetails("");
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h2>Poste seu comentário aqui!</h2>
      <form onSubmit={handleCommentSubmit}>
        {/* Nome do usuário */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          required
        />

        <div className="participation">
          <label>
            Você já participou do Niseta?
            <select
              value={participated ? "Sim" : "Não"}
              onChange={(e) => setParticipated(e.target.value === "Sim")}
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
          </label>
        </div>

        {participated && (
          <input
            type="text"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            placeholder="Digite o ano e país do evento"
          />
        )}

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escreva seu comentário aqui"
          required
        />

        <button type="submit" className="btn dark-btn">
          Enviar <img src={white_arrow} alt="Enviar" />
        </button>
      </form>

      <div className="comment-list">
        <h3>Comentários</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <p><strong>Nome:</strong> {comment.name}</p>
                <p><strong>Participação:</strong> {comment.eventDetails}</p>
                <p><strong>Comentário:</strong> {comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Sem comentários ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
