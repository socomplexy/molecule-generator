export const MoleculeName = ({ name = "", blurred, onClick }) => {
  return (
    <div
      className={`molecule-name ${blurred ? "textshadow blurry-text" : ""}`}
      onClick={() => onClick(!blurred)}
    >
      <h2>Molecule name:</h2>
      <h2 className={`${blurred ? "textshadow blurry-text" : ""}`}>{name}</h2>
    </div>
  );
};
