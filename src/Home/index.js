import DeckList from "../Deck/List";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <DeckList />
    </>
  );
}
