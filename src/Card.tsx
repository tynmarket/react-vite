import logo from './card-img.png'
import './Card.css'

export default function Card() {
  return (
    <div class="card w-96 bg-base-100 shadow-xl" style={{ width: "270px", margin: "auto" }}>
      <figure><img src={ logo } alt="Shoes" /></figure>
      <div class="card-body" style={{ height: "424px", padding: "18px 14px 28px 16px" }}>
        <header>
          <h2 class="card-title">【Gaia】絶竜詩 vc無し 活動日週5以上固定メンバー2名募集@ST or メレー、レンジ</h2>
        </header>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
