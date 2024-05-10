export default function Card({ img, title, body }) {
  return (
    <div id="card-container"
     className = "bg-red-200  rounded-lg border bg-card text-card-foreground shadow-sm">
      <div id="image-container">
        <img src="'" alt="" />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>{/* pagination here*/}</div>

      <div>
        <div></div>
        <div>
          <button>Skip</button>
        </div>
      </div>
    </div>
  );
}
