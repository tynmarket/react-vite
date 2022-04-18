import party from './party.svg'
import party_w from './party-white.svg'
import calendar from './calendar.svg'
import star from './star.svg'
import clock from './clock-red.svg'
import person from './person.svg'
import './Page.css'

export default function Page() {
  return (
    <div class="pages">
      { /* Sticky */ }
      <div class="nav-bar flex justify-between w-full bg-primary">
        <div class="flex items-center">
          <img src={ party_w } class="icon-party" />
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
          <span class="nav-item">募集情報</span>
          <span class="nav-item">コミュニティプロフィール</span>
          <span class="nav-item">募集主プロフィール</span>
          <span class="nav-item">コメント</span>
        </div>
      </div>
      <div class="detail flex flex-col w-page mx-auto">
        <div class="header flex justify-between w-page-content border-b">
          <span class="watch invisible"></span>
          <span class="title flex items-center">
            <img src={ party } class="icon" />
            <span class="font-bold">募集情報</span>
            <span class="adjuster"></span>
          </span>
          <span class="watch flex justify-center">
            <span class="flex justify-center items-center text-white font-bold">
              <img src={ star } class="icon" />
              ウォッチリストに登録
            </span>
          </span>
        </div>
        <div class="activity flex justify-between items-center w-page-content border-b">
          <div class="times flex items-center">
            <img src={ clock } class="icon" />
            <div class="times-inner flex flex-col justify-evenly">
              <div class="text-s">活動時間</div>
              <div class="flex justify-between text font-bold">
                <div class="col flex justify-between">
                  <span class="border-box">
                    平日
                  </span>
                  <span class="time flex justify-between dot-line">
                    <span class="pr-8 bg-white-z">
                      21:00
                    </span>
                    <span class="pl-8 bg-white-z">
                      24:00
                    </span>
                  </span>
                </div>
                <div class="col flex justify-between">
                  <span class="border-box">
                    週末
                  </span>
                  <span class="time flex justify-between dot-line">
                    <span class="pr-8 bg-white-z">
                      14:00
                    </span>
                    <span class="pl-8 bg-white-z">
                      17:00
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span class="member flex items-center">
            <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
              <img src={ person } class="icon" />
            </span>
            <span class="member__inner flex flex-col">
              <span class="text-s">アクティブメンバー数</span>
              <span class="text font-bold">999</span>
            </span>
          </span>
        </div>
        <div class="role w-page-content">

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
