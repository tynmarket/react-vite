import { Link } from "react-router-dom";

import face from './face.svg'
import home from './home.svg'
import star from './star-stack.svg'
import add from './add.svg'
import './Layout.css'

export default function Layout() {
  return (
    <div class="layout">
      <div class="brand w-full"></div>
      <header class="header flex items-center w-full">
        <div class="flex justify-end w-global mx-auto">
          <div class="my-character flex justify-between items-center relative">
            <span class="bg-white rounded-full">
              <img src={ face } class="icon" />
            </span>
            <span class="profile flex flex-col">
              <span class="profile__name font-bold">Hikari Senshi</span>
              <span class="profile__free-company">Tosho Markets</span>
            </span>
            <span class="home-world flex items-center">
              <span class="icon-wrapper rounded-full">
                <img src={ home } class="icon" />
              </span>
              Ultima
            </span>
          </div>
        </div>
      </header>
      <div class="global-nav w-full">
        <nav class="nav-bar flex w-global mx-auto">
          <div class="nav-item"></div>
          <div class="nav-item"></div>
          <div class="nav-item"></div>
          <div class="nav-item active font-bold">
            コミュニティ
          </div>
          <div class="nav-item"></div>
          <div class="nav-item"></div>
        </nav>
      </div>
      <div class="cf-nav flex justify-between">
        <div class="flex">
          <Link to="/" class="cf-logo flex font-bold">
            コミュニティ
            <img src={ star } class="icon" />
            ファインダー
          </Link>
          { /* ページごとの表示非表示 */ }
          <div class="cf-dc flex items-center">
            <span class="cf-item flex flex-col">
              <span class="cf-item__title">
                DATA CENTER
              </span>
              <span class="cf-item__text font-bold">
                Gaia
              </span>
            </span>
          </div>
          <div class="cf-world flex items-center border-l-none">
            <span class="cf-item flex flex-col">
              <span class="cf-item__title">
                WORLD
              </span>
              <span class="cf-item__text font-bold">
                Ultima
              </span>
            </span>
          </div>
        </div>
        <div class="right-nav flex items-center">
          <span class="new-page flex justify-center items-center font-bold">
            <img src={ add } class="icon" />
            新規募集を作成
          </span>
          <span class="empty"></span>
          <span class="empty"></span>
        </div>
      </div>
    </div>
  );
}
