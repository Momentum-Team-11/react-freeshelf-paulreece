import { bookdata } from "./Data";
import React, { useState } from "react";
import { HomePageHeader } from "./HomePageHeader";
import { Book } from "./Book";

export const BookData = () => {
  return (
    <>
      <HomePageHeader />
      <div className="book-container">
        {bookdata.map((data, key) => {
          return (
            <div key={key}>
              <Book
                title={data.title}
                author={data.author}
                url={data.url}
                timeElapsed={data.timeElapsed}
                shortDescription={data.shortDescription}
                coverImageUrl={data.coverImageUrl}
                publisher={data.publisher}
                publicationDate={data.publicationDate}
                detailedDescription={data.detailedDescription}
                key={data.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

// <table>
//       <tbody>
//         <tr>
//           <td>
//             Title:
//             <h5>{title}</h5>
//           </td>
//           <td>
//             Author:
//             <h5>{author}</h5>
//           </td>
//           <td>
//             URL:
//             <h4>{url}</h4>
//           </td>
//           <td>
//             Time Elapsed:
//             <p>{timeElapsed}</p>
//           </td>
//           <td>
//             Short Description:
//             <p>{shortDescription}</p>
//           </td>
//           <td>
//             Cover Image URL:
//             <p>{coverImageUrl}</p>
//           </td>
//           <td>
//             Publisher:
//             <p>{publisher || "Not Listed"}</p>
//           </td>
//           <td>
//             Publication Date:
//             <p>{publicationDate || "Not Listed"}</p>
//           </td>
//           <td>
//             Detailed Description:
//             <p>{detailedDescription}</p>
//           </td>
//         </tr>
//       </tbody>
//     </table>
