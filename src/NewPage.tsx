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
      <div class="detail mx-auto">
        <div class="info font-bold">
          コミュニティの情報や募集の概要を入力しよう！
          <span class="font-12 font-bold">*は必須項目です。</span>
        </div>
      </div>
    </div>
  );
}
