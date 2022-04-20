import { Link } from "react-router-dom";

import Card from "./Card";
import './Pages.css'

export default function Expenses() {
  return (
    <main>
      <div class="pages">
        <div class="search flex justify-between">
          <div class="">aaa</div>
          <div class="">bbb</div>
        </div>
        <div class="cards">

        </div>
      </div>
      <Link to="/page" class="link">
        <Card />
      </Link>
    </main>
  );
}
