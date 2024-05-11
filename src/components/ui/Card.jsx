import image from "../../assets/image.png";

export default function Card({ title, body }) {
  return (
    <div
      id="card-container"
      className="bg-white w-[580px] rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div id="image-container" className="bg-gradient">
        <img src={image} alt="ya" />
      </div>

      <div>
        <h2 className="text-7xl">{title}</h2>
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
