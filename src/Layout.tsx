import face from './face.svg'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div class="brand w-full"></div>
      <header class="header flex items-center w-full">
        <div class="header__inner flex justify-end mx-auto">
          <div class="my-character flex justify-between items-center">
            <span class="bg-white rounded-full">
              <img src={ face } class="icon" />
            </span>
            <span class="profile flex flex-col">
              <span class="profile__name font-bold">Hikari Senshi</span>
              <span class="profile__free-company">Tosho Markets</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
