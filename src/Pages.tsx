import { Link } from "react-router-dom";

import Card from "./Card";

import party from './party.svg'
import search from './search.svg'
import './Pages.css'

export default function Expenses() {
  return (
    <main>
      <div class="pages">
        <div class="search flex justify-between">
          <ul class="category flex items-center text-center font-bold">
            <li class="all"></li>
            <li class="fc"></li>
            <li class="ls"></li>
            <li class="party flex justify-center items-center">
              <img src={ party } class="icon mr-8" />
              <span>
                固定パーティー
                <span class="ml-4 font-11 font-normal">(3)</span>
              </span>
            </li>
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
