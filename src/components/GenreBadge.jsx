const GenreBadge = ({ genres }) => {
  return (
    <>
      {genres.map((genre, i) => (
        <span key={`${genre}-${i}`} className="border rounded-full px-4 py-2">
          {genre}
        </span>
      ))}
    </>
  );
};

export default GenreBadge;
