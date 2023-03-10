import "./index.css";

const ImageZoom = ({ img, to }) => {
  return (
    <div className="image-zoom">
      <a href={to} target="_blank">
        <img src={img} />
      </a>
    </div>
  );
};

export default ImageZoom;
