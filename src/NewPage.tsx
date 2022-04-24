import party_w from './party-white.svg'
import './NewPage.css'

export default function NewPage() {
  return (
    <div class="new-page">
      <div class="nav-bar flex justify-between w-full bg-primary">
        <div class="flex items-center">
          <img src={ party_w } class="icon-party" />
          <div class="flex flex-col">
            <span class="font-s font-bold">固定パーティー</span>
            <span class="title font-bold">[募集ページ作成]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
