export const MoleculeName = ({ name = "", blurred = true, onClick }) => {
  return (
    <div
      className={`molecule-name ${blurred ? "textshadow blurry-text" : ""}`}
      onClick={() => onClick(!blurred)}
    >
      <h2
        className={`${blurred ? "textshadow blurry-text" : ""}`}
        onClick={() => onClick(!blurred)}
      >
        {name}
      </h2>
    </div>
  );
};
