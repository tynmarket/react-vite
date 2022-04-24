import main from './main-visual.png'
import party from './party.svg'
import party_w from './party-white.svg'
import calendar from './calendar.svg'
import star from './star.svg'
import clock from './clock-red.svg'
import person from './person.svg'
import description from './description.svg'
import tank from './tank.svg'
import healer from './healer.svg'
import dps from './dps.svg'
import done from './done.svg'
import people from './people.svg'
import tag from './tag.svg'
import './Page.css'

export default function Page() {
  return (
    <div class="page">
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
      <div class="main-visual relative">
        <img src={ main } />
        <div class="recruiter flex flex-col">
          <h2 class="name flex items-center bg-white rounded-8 font-bold">
            Tyn Market
          </h2>
          <span class="dc flex justify-center font-12 font-bold">Gaia</span>
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
          <div class="member flex items-center">
            <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
              <img src={ person } class="icon" />
            </span>
            <span class="flex flex-col">
              <span class="text-s">アクティブメンバー数</span>
              <span class="text font-bold">2</span>
            </span>
          </div>
        </div>
        <div class="requirement flex justify-between items-center w-page-content border-b">
          <div class="dc flex items-center">
            <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
            </span>
            <span class="flex flex-col">
              <span class="text-s">DATA CENTER</span>
              <span class="text font-bold">Gaia</span>
            </span>
          </div>
          <div class="role flex items-center">
            <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
              <img src={ description } class="icon" />
            </span>
            <span class="flex flex-col">
              <span class="text-s">募集ロール</span>
              <p class="role-inner flex justify-around">
                <span class="done"><img src={ done } class="icon" /></span>
                <span class="tank"><img src={ tank } class="icon" /></span>
                {/* <span class="tank either-one"><img src={ tank } class="icon" /></span> */}
                <span class="healer"><img src={ healer } class="icon" /></span>
                <span class="healer"><img src={ healer } class="icon" /></span>
                {/* <span class="healer either-one"><img src={ healer } class="icon" /></span> */}
                <span class="dps"><img src={ dps } class="icon rotate-90" /></span>
                <span class="done"><img src={ done } class="icon" /></span>
                <span class="dps"><img src={ dps } class="icon rotate-90" /></span>
                <span class="dps"><img src={ dps } class="icon rotate-90" /></span>
              </p>
            </span>
          </div>
          <div class="recruit flex items-center">
            <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
              <img src={ people } class="icon" />
            </span>
            <span class="flex flex-col">
              <span class="text-s">募集人数</span>
              <span class="text font-bold">6</span>
            </span>
          </div>
        </div>
        <div class="tags flex justify-center items-center w-page-content border-b">
          <span class="icon-wrapper flex justify-center items-center rounded-full bg-primary">
            <img src={ tag } class="icon" />
          </span>
          <span class="tag border-box">#自由記入！</span>
          <span class="tag border-box">#VCあり</span>
          <span class="tag border-box">#聞き専可</span>
          <span class="tag border-box">#調整枠あり</span>
          <span class="tag border-box">#昼練習あり</span>
          <span class="tag border-box">#配信あり</span>
        </div>
        <div class="comment">
          自由記入欄
          <br/>
          <br/>
          詳しい募集要項やメンバー情報など
        </div>
      </div>
    </div>
  );
}
