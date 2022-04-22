import { Link } from "react-router-dom";

import Card from "./Card";

import party from './party.svg'
import search from './search.svg'
import tag from './tag.svg'
import './Pages.css'

export default function Expenses() {
  return (
    <main>
      <div class="pages">
        <div class="search flex justify-between">
          <ul class="category flex items-center text-center rounded-8 font-bold">
            <li class="all flex justify-center items-center mx-auto">
              <img src={ party } class="icon mr-8 invisible" />
              <span>
                ALL
                <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
              </span>
            </li>
            <li class="fc flex justify-center items-center mx-auto">
              <img src={ party } class="icon mr-8 invisible" />
              <span>
                フリーカンパニー
                <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
              </span>
            </li>
            <li class="ls flex justify-center items-center mx-auto">
              <img src={ party } class="icon mr-8 invisible" />
              <span>
                LS & CWLS
                <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
              </span>
            </li>
            <li class="party flex justify-center items-center relative mx-auto">
              <img src={ party } class="icon mr-8" />
              <span>
                固定パーティー
                <span class="ml-4 font-11 font-normal text-page-gray">(3)</span>
              </span>
              <span class="bottom-line absolute bg-primary"></span>
            </li>
          </ul>
          <span class="search-button flex items-center rounded-8 text-white font-bold">
            <span class="icon-wrapper flex items-center">
              <img src={ search } class="icon" />
            </span>
            検索
          </span>
        </div>
        <div class="tags flex flex-wrap justify-center mx-auto">
          <span class="title flex items-center mr-8 font-13 font-bold">
            <span class="icon-wrapper flex justify-center items-center mr-6 rounded-full bg-black">
              <img src={ tag } class="icon" />
            </span>
            アピールタグ
          </span>
          <span class="tag mr-4 border-box rounded-15">#VCあり</span>
          <span class="tag mr-4 border-box rounded-15">#聞き専可</span>
          <span class="tag mr-4 border-box rounded-15">#調整枠あり</span>
          <span class="tag mr-4 border-box rounded-15">#昼練習あり</span>
          <span class="tag mr-4 border-box rounded-15">#配信あり</span>
        </div>
        <div class="cards flex flex-wrap">
          <Link to="/page" target="_blank" class="link">
            <Card />
          </Link>
          <Link to="/page" target="_blank" class="link">
            <Card />
          </Link>
          <Link to="/page" target="_blank" class="link">
            <Card />
          </Link>
          <Link to="/page" target="_blank" class="link">
            <Card />
          </Link>
          <Link to="/page" target="_blank" class="link">
            <Card />
          </Link>
        </div>
      </div>
    </main>
  );
}
