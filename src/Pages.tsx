import { Link } from "react-router-dom";

import Card from "./Card";

import party from './party.svg'
import search from './search.svg'
import tag from './tag.svg'
import clock from './clock-black.svg'
import close from './close.svg'
import './Pages.css'

export default function Expenses() {
  return (
    <main>
      <div class="pages">
        <div class="search flex justify-between relative">
          <ul class="category flex items-center rounded-8 shadow-pages font-bold">
            <li class="all">
              <span class="title flex justify-center items-center mx-auto">
                <img src={ party } class="icon mr-8 invisible" />
                <span>
                  ALL
                  <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
                </span>
              </span>
            </li>
            <li class="fc">
              <span class="title flex justify-center items-center mx-auto">
                <img src={ party } class="icon mr-8 invisible" />
                <span>
                  フリーカンパニー
                  <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
                </span>
              </span>
            </li>
            <li class="ls">
              <span class="title flex justify-center items-center mx-auto">
                <img src={ party } class="icon mr-8 invisible" />
                <span>
                  LS & CWLS
                  <span class="ml-4 font-11 font-normal text-page-gray">(0)</span>
                </span>
              </span>
            </li>
            <li class="party">
              <span class="title flex justify-center items-center relative mx-auto">
                <img src={ party } class="icon mr-8" />
                <span>
                  固定パーティー
                  <span class="ml-4 font-11 font-normal text-page-gray">(3)</span>
                </span>
                <span class="bottom-line absolute bg-primary"></span>
              </span>
            </li>
          </ul>
          <button class="open-search flex items-center rounded-8 text-white font-bold transition">
            <span class="icon-wrapper flex items-center">
              <img src={ search } class="icon" />
            </span>
            検索
          </button>
          { /* TODO: レスポンシブ */ }
          <div class="menu rounded-8 shadow-pages bg-white-z letter-03-all">
            <div class="menu-tags flex items-center">
              <div class="title flex items-center font-14 font-bold">
                <span class="icon-wrapper flex justify-center items-center mr-10 rounded-full bg-black">
                  <img src={ tag } class="icon" />
                </span>
                アピールタグ
              </div>
              <div class="tag-select flex items-center text-page-gray">
                <div class="flex items-center relative mh-4">
                  <select class="border-all bg-white font-bold">
                    <option>1. 定型タグを選択</option>
                    <option>VCあり</option>
                    <option>VCなし</option>
                    <option>聞き専可</option>
                    <option>調整枠あり</option>
                    <option>昼練習あり</option>
                    <option>配信あり</option>
                  </select>
                  <span class="arrow text-jet-black">▼</span>
                </div>
                <div class="flex items-center relative mh-4">
                  <select class="border-all bg-white font-bold">
                    <option>2. 定型タグを選択</option>
                    <option>VCあり</option>
                    <option>VCなし</option>
                    <option>聞き専可</option>
                    <option>調整枠あり</option>
                    <option>昼練習あり</option>
                    <option>配信あり</option>
                  </select>
                  <span class="arrow text-jet-black">▼</span>
                </div>
                <div class="flex items-center relative mh-4">
                  <select class="border-all bg-white font-bold">
                    <option>3. 定型タグを選択</option>
                    <option>VCあり</option>
                    <option>VCなし</option>
                    <option>聞き専可</option>
                    <option>調整枠あり</option>
                    <option>昼練習あり</option>
                    <option>配信あり</option>
                  </select>
                  <span class="arrow text-jet-black">▼</span>
                </div>
                <div class="flex items-center relative mh-4">
                  <select class="border-all bg-white font-bold">
                    <option>4. 定型タグを選択</option>
                    <option>VCあり</option>
                    <option>VCなし</option>
                    <option>聞き専可</option>
                    <option>調整枠あり</option>
                    <option>昼練習あり</option>
                    <option>配信あり</option>
                  </select>
                  <span class="arrow text-jet-black">▼</span>
                </div>
                <input class="free ml-4 border-all" type="text" placeholder="自由入力されたタグを検索" />
              </div>
            </div>
            <div class="activity flex items-center border-t">
              <div class="title flex items-center font-14 font-bold">
                <img src={ clock } class="icon mr-8" />
                活動時間
              </div>
              <span class="day flex justify-center items-center border-l font-bold">
                平日
              </span>
              <span class="times dot-line flex justify-between items-center text-page-gray">
                <div class="flex items-center relative">
                  <select class="time mr-3 border-all rounded-8 font-16 font-bold">
                    <option>--:--</option>
                    <option>21:00</option>
                  </select>
                  <span class="arrow from text-jet-black">▼</span>
                </div>
                <div class="flex items-center relative">
                  <select class="time ml-3 border-all rounded-8 font-16 font-bold">
                    <option>--:--</option>
                    <option>21:00</option>
                  </select>
                  <span class="arrow to text-jet-black">▼</span>
                </div>
              </span>
              <span class="day flex justify-center items-center border-l font-bold">
                週末
              </span>
              <span class="times dot-line flex justify-between items-center text-page-gray">
                <div class="flex items-center relative">
                  <select class="time mr-3 border-all rounded-8 font-16 font-bold">
                    <option>--:--</option>
                    <option>21:00</option>
                  </select>
                  <span class="arrow from text-jet-black">▼</span>
                </div>
                <div class="flex items-center relative">
                  <select class="time ml-3 border-all rounded-8 font-16 font-bold">
                    <option>--:--</option>
                    <option>21:00</option>
                  </select>
                  <span class="arrow to text-jet-black">▼</span>
                </div>
              </span>
            </div>
            <div class="others flex justify-end items-center border-t">
              <div class="clear flex justify-center items-center border-l text-white">
                <button class="flex items-center ph-10 rounded-8 font-12 font-bold">
                  <span class="icon-wrapper flex justify-center items-center mr-7 rounded-full bg-jet-black">
                    <img src={ close } class="icon" />
                  </span>
                  検索条件をすべてクリア
                </button>
              </div>
              <button class="search-button flex justify-center items-center text-white font-16 font-bold">
                <img src={ search } class="icon" />
                絞り込む
              </button>
            </div>
          </div>
        </div>
        <div class="tags flex flex-wrap justify-center mx-auto">
          <span class="title flex items-center mr-8 font-13 font-bold">
            <span class="icon-wrapper flex justify-center items-center mr-6 rounded-full bg-black">
              <img src={ tag } class="icon" />
            </span>
            アピールタグ
          </span>
          <span class="tag mr-4 border-box rounded-15 transition">#VCあり</span>
          <span class="tag mr-4 border-box rounded-15 transition">#聞き専可</span>
          <span class="tag mr-4 border-box rounded-15 transition">#調整枠あり</span>
          <span class="tag mr-4 border-box rounded-15 transition">#昼練習あり</span>
          <span class="tag mr-4 border-box rounded-15 transition">#配信あり</span>
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
