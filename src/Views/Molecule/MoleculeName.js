export const MoleculeName = ({ name = "", blurred, onClick }) => {
  return (
    <div
      className={`molecule-name ${blurred ? "textshadow blurry-text" : ""}`}
      onClick={() => onClick(!blurred)}
    >
      <h2>
        Molecule name:
        <span className={`${blurred ? "textshadow blurry-text" : ""}`}>
          {name}
        </span>
      </h2>
    </div>
  );
};
