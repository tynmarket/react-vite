import face from './face.svg'
import home from './home.svg'
import star from './star.svg'
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
          { /* TODO: リンク */ }
          <div class="nav-item active font-bold">
            コミュニティ
          </div>
          <div class="nav-item"></div>
          <div class="nav-item"></div>
        </nav>
      </div>
      <div class="cf-nav flex justify-between">
        <div class="flex">
          <div class="cf-logo flex font-bold">
            コミュニティ
            <img src={ star } class="icon" />
            ファインダー
          </div>
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
        <div>

        </div>
      </div>
    </div>
  );
}
