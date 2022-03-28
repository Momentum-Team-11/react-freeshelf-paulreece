import { useState } from "react";

const Favorite = () => {
  const [isFavorite, setFavorite] = useState("");
  return (
    <>
      <button
        class="favorite"
        onClick={() => (isFavorite ? setFavorite("") : setFavorite(" ⭐"))}
      >
        Favorite
      </button>
      {isFavorite}
    </>
  );
};
export { Favorite };
