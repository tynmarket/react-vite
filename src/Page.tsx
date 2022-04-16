import party from './party-white.svg'
import calendar from './calendar.svg'
import './Page.css'

export default function Page() {
  return (
    <div class="pages">
      { /* Sticky */ }
      <div class="nav-bar flex justify-between w-full bg-primary">
        <div class="flex items-center">
          <img src={ party } class="icon-party" />
          <div class="flex flex-col">
            <span class="font-s font-bold">固定パーティー</span>
            <span class="title font-bold">絶竜詩戦争 メンバー募集</span>
            <span class="period flex items-center font-medium">
              <img src={ calendar } class="icon-calendar" />
              募集期間: 2022/05/13 まで
            </span>
          </div>
        </div>
        <div class="party-nav flex items-center font-bold">
          { /* TODO: スムーススクロール */}
          <span class="nav-item active">募集情報</span>
          <span class="nav-item">コミュニティプロフィール</span>
          <span class="nav-item">募集主プロフィール</span>
          <span class="nav-item">コメント</span>
        </div>
      </div>
      <div class="">

      </div>
    </div>
  );
}
