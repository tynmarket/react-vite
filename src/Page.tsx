import { Link } from "react-router-dom";

import Card from "./Card";
import './expenses.css'

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Link to="/page" class="link">
        <Card />
      </Link>
    </main>
  );
}
