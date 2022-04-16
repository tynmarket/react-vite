import { Link } from "react-router-dom";

import Card from "./Card";
import './Pages.css'

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Link to="/page" class="link">
        <Card />
      </Link>
    </main>
  );
}
