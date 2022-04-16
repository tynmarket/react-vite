import face from './face.svg'
import home from './home.svg'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div class="brand w-full"></div>
      <header class="header flex items-center w-full">
        <div class="header__inner flex justify-end mx-auto">
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
    </>
  );
}
