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
      <div>
        <span class="flex items-center font-bold party text-primary">
          <img src={ party } class="icon" />
          固定パーティー
        </span>
        <span class="new rounded-full font-bold bg-primary">
          NEW
        </span>
      </div>
      <div class="card-inner">
        <div class="card-image bg-primary"><img src={ logo } /></div>
        <div class="card-body">
          <header class="card-header">
            <h2 class="card-title justify-center">Tyn Market</h2>
            <p class="flex justify-center items-center">
              <img src={ content } class="icon-small" />
              絶竜詩戦争 [Gaia]
            </p>
          </header>
          <div class="card-activity">
            <h3 class="flex item-title activity-time__header">
              <img src={ clock } class="icon" />
              活動時間
            </h3>
            <dl class="flex activity-time items-center">
              <dt class="activity-time__day">平日</dt>
              <dd class="flex dot-line activity-time__time">
                <span class="number-text bg-white text-around activity-time__start">21:00</span>
                <span class="number-text bg-white activity-time__end">24:00</span>
              </dd>
            </dl>
            <dl class="flex activity-time items-center">
              <dt class="activity-time__day">週末</dt>
              <dd class="flex dot-line activity-time__time">
                <span class="number-text bg-white text-around activity-time__start">14:00</span>
                <span class="number-text bg-white activity-time__end">17:00</span>
              </dd>
            </dl>
            <p class="flex justify-between dot-line goal">
              <span class="flex items-center bg-white item-title">
                <img src={ goal } class="icon" />
                クリア目標
              </span>
              <span class="bg-white number-text text-around">2〜3ヶ月</span>
            </p>
            <p class="flex justify-between dot-line recruit">
              <span class="flex items-center bg-white item-title">
                <img src={ people } class="icon" />
                募集人数
              </span>
              <span class="bg-white number-text text-around">2</span>
            </p>
          </div>
          <div class="card-description">
            <p class="flex justify-between">
              <span class="flex items-center bg-white item-title role__title">
                <img src={ description } class="icon" />
                募集ロール
              </span>
            </p>
            <p class="flex justify-around role">
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
            <div class="flex tag">
              <div class="tag__container">
                <span class="flex items-center tag__item">
                  <img src={ tag } class="tag-icon" />
                  <span>VC有り</span>
                </span>
                <span class="flex items-center tag__item">
                  <img src={ tag } class="tag-icon" />
                  <span>聞き専可</span>
                </span>
                <span class="flex items-center tag__item">
                  <img src={ tag } class="tag-icon" />
                  <span>調整枠有り</span>
                </span>
              </div>
              <div class="tag__container">
                <span class="flex items-center tag__item">
                  <img src={ tag } class="tag-icon" />
                  <span>配信可</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <span class="flex font-bold world">
              <span class="rounded-full world__icon-wrapper bg-primary">
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
