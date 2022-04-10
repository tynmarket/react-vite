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
        </div>
      </div>
    </div>
  );
}
