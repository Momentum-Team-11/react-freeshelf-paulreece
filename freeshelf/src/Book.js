import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import { Favorite } from "./Favorite";

const Book = ({
  title,
  author,
  url,
  timeElapsed,
  shortDescription,
  coverImageUrl,
  publisher,
  publicationDate,
  detailedDescription,
}) => {
  return (
    <div class="book">
      <h2>
        {title} <Favorite></Favorite>
      </h2>

      <img src={coverImageUrl} alt="Book Cover"></img>

      <h3>{author}</h3>

      <p>{shortDescription}</p>

      <Disclosure>
        <DisclosureButton class="disclosure">More Information</DisclosureButton>

        <DisclosurePanel class="disclosure-panel">
          <p>
            <strong>URL: </strong>
            <a href={url}>{url}</a>
          </p>
          <p>
            <strong>Publisher: </strong>
            {publisher || "Not Listed"}
          </p>
          <p>
            <strong>Publication Date: </strong>
            {publicationDate || "Not Listed"}
          </p>
          <p>
            <strong>Full Description: </strong>
          </p>
          <p>{detailedDescription}</p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export { Book };
