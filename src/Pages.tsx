import { Link } from "react-router-dom";

import Card from "./Card";

import search from './search.svg'
import './Pages.css'

export default function Expenses() {
  return (
    <main>
      <div class="pages">
        <div class="search flex justify-between">
          <ul class="">aaa
          </ul>
          <span class="search-button flex items-center rounded-8 text-white font-bold">
            <span class="icon-wrapper flex items-center">
              <img src={ search } class="icon" />
            </span>
            検索
          </span>
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
