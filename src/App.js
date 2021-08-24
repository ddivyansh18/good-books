import { useState } from "react";
import "./styles.css";

const bookDB = {
  fiction: [
    {
      name: "Harry Potter Series",
      author: "J.K. Rowling",
      rating: "4.5/5"
    },
    {
      name: "The Lord of the Rings Series",
      author: "J.R.R Tolkien",
      rating: "4.5/5"
    },
    {
      name: "The Secret",
      author: "Rhonda Byrne",
      rating: "4/5"
    }
  ],

  biographies: [
    {
      name: "Steve Jobs",
      author: "Walter Issacson",
      rating: "4.5/5"
    },
    {
      name: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      rating: "4.5/5"
    },
    {
      name: "Einstein",
      author: "Walter Issacson",
      rating: "4/5"
    }
  ],

  growth: [
    {
      name: "Deep Work",
      author: "Cal Newport",
      rating: "4.5/5"
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      rating: "4/5"
    },
    {
      name: "Zero To One",
      author: "Peter Thiel",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("growth");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        GoodBooks{" "}
        <span role="img" aria-label="book emoji">
          📕📖{" "}
        </span>
      </h1>
      <h2>Here are my favourite books, select a genre to see related books.</h2>
      <div>
        {Object.keys(bookDB).map((genre) => {
          return (
            <button
              style={{
                cursor: "pointer",
                borderRadius: "0.7rem",
                padding: "0.5rem 1rem",
                margin: "1rem 0.3rem",
                background: "#E5E7EB"
              }}
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}

        <hr />

        <div style={{ textAlign: "center" }}>
          <ul style={{ style: "inline", listStyleType: "none" }}>
            {bookDB[selectedGenre].map((book) => {
              return (
                <li
                  key={book.name}
                  style={{
                    border: "1px solid black",
                    margin: "2rem auto",
                    width: "70%",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: "1.6rem" }}>{book.name}</div>
                  <div style={{ fontSize: "Large" }}> By {book.author}</div>
                  <div style={{ fontSize: "large" }}>{book.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
