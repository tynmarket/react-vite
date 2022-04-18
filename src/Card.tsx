import logo from './card-img.jpg'
import party from './party.svg'
import content from './content.svg'
import clock from './clock.svg'
import people from './people.svg'
import goal from './goal.svg'
import tank from './tank.svg'
import healer from './healer.svg'
import dps from './dps.svg'
import done from './done.svg'
import tag from './tag.svg'
import description from './description.svg'
import world from './world.svg'
import './Card.css'

export default function Card() {
  return (
    <div class="card">
      <div class="card-upper">
        <span class="party flex items-center text-primary font-bold">
          <img src={ party } class="icon" />
          固定パーティー
        </span>
        <span class="new bg-primary rounded-full font-bold">
          NEW
        </span>
      </div>
      <div class="card-inner">
        <div class="card-image bg-primary"><img src={ logo } /></div>
        <div class="card-body">
          <header class="summary">
            <h2 class="user-name card-title justify-center text-l">Tyn Market</h2>
            <p class="content flex justify-center items-center">
              <img src={ content } class="icon" />
              絶竜詩戦争 [Gaia]
            </p>
          </header>
          <div class="activity">
            <h3 class="time-title item-title flex">
              <img src={ clock } class="icon" />
              活動時間
            </h3>
            <span class="row flex justify-between items-center mb-2 pl-4">
              <span class="border-box font-bold">平日</span>
              <span class="time flex justify-between dot-line">
                <span class="pr-8 text-l bg-white-z">21:00</span>
                <span class="pl-8 text-l bg-white-z">24:00</span>
              </span>
            </span>
            <span class="row flex justify-between items-center mb-2 pl-4">
              <span class="border-box font-bold">週末</span>
              <span class="time flex justify-between dot-line">
                <span class="pr-8 text-l bg-white-z">14:00</span>
                <span class="pl-8 text-l bg-white-z">17:00</span>
              </span>
            </span>
            <p class="activity-goal row flex justify-between dot-line">
              <span class="item-title flex items-center bg-white-z">
                <img src={ goal } class="icon" />
                クリア目標
              </span>
              <span class="pl-8 text-l bg-white-z">2〜3ヶ月</span>
            </p>
            <p class="activity-recruit row flex justify-between dot-line">
              <span class="item-title flex items-center bg-white-z">
                <img src={ people } class="icon" />
                募集人数
              </span>
              <span class="pl-8 text-l bg-white-z">2</span>
            </p>
          </div>
          <div class="description">
            <p class="flex justify-between">
              <span class="role__title item-title flex items-center bg-white-z">
                <img src={ description } class="icon" />
                募集ロール
              </span>
            </p>
            <p class="role flex justify-around">
              <span class="role__done"><img src={ done } class="role__icon" /></span>
              <span class="role__tank"><img src={ tank } class="role__icon" /></span>
              {/* <span class="role__tank role__either-one"><img src={ tank } class="role__icon" /></span> */}
              <span class="role__healer"><img src={ healer } class="role__icon" /></span>
              <span class="role__healer"><img src={ healer } class="role__icon" /></span>
              {/* <span class="role__healer role__either-one"><img src={ healer } class="role__icon" /></span> */}
              <span class="role__dps"><img src={ dps } class="role__icon rotate-90" /></span>
              <span class="role__done"><img src={ done } class="role__icon" /></span>
              <span class="role__dps"><img src={ dps } class="role__icon rotate-90" /></span>
              <span class="role__dps"><img src={ dps } class="role__icon rotate-90" /></span>
            </p>
            <div class="tag flex">
              <div class="tag__container">
                <span class="tag__item flex items-center">
                  <img src={ tag } class="tag__icon" />
                  <span>VCあり</span>
                </span>
                <span class="tag__item flex items-center">
                  <img src={ tag } class="tag__icon" />
                  <span>聞き専可</span>
                </span>
                <span class="tag__item flex items-center">
                  <img src={ tag } class="tag__icon" />
                  <span>調整枠あり</span>
                </span>
              </div>
              <div class="tag__container">
                <span class="tag__item flex items-center">
                  <img src={ tag } class="tag__icon" />
                  <span>配信可</span>
                </span>
                <span class="tag__item flex items-center">
                  <img src={ tag } class="tag__icon" />
                  <span>昼練習あり</span>
                </span>
              </div>
            </div>
          </div>
          <div class="extra">
            <span class="world flex font-bold">
              <span class="world__icon-wrapper rounded-full bg-primary">
                <img src={ world } class="icon" />
              </span>
              JA
            </span>
          </div>
        </div>
        <div class="card-footer text-right">
          <span class="font-bold">募集期間: 2022/05/13 まで</span>
        </div>
      </div>
    </div>
  );
}
