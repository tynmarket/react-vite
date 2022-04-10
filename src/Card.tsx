import logo from './card-img.png'
import clock from './clock.svg'
import './Card.css'

export default function Card() {
  return (
    <div class="card w-96 bg-base-100 shadow-xl" style={{ width: "270px", margin: "auto" }}>
      <figure><img src={ logo } alt="Shoes" /></figure>
      <div class="card-body" style={{ height: "424px", padding: "18px 14px 28px 16px" }}>
        <header>
          <h2 class="card-title">【Gaia】絶竜詩 vc無し 活動日週5以上固定メンバー2名募集@ST or メレー、レンジ</h2>
        </header>
        <div class="card-content">
          <h3 class="flex activity-time__header">
            <img src={ clock } />
            活動時間
          </h3>
          <dl class="flex activity-time items-center">
            <dt class="activity-time__day">平日</dt>
            <dd class="flex activity-time__time">
              <span class="activity-time__start">21:00</span>
              <span class="activity-time__end">24:00</span>
            </dd>
          </dl>
          <dl class="flex activity-time items-center">
            <dt class="activity-time__day">週末</dt>
            <dd class="flex activity-time__time">
              <span class="activity-time__start">14:00</span>
              <span class="activity-time__end">17:00</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
