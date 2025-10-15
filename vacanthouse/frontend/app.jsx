import React from "react";

export default function App() {
  const houses = [
    {
      id: 1,
      name: "古民家の宿『ひだまり』",
      location: "長野県 松本市",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      description: "木の香りに包まれた、どこか懐かしい空き家です。",
    },
    {
      id: 2,
      name: "海辺の家『しおかぜ』",
      location: "神奈川県 三浦市",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "海風が心地よい、温かみのあるリノベーション物件。",
    },
    {
      id: 3,
      name: "森の隠れ家『こもれび』",
      location: "岐阜県 高山市",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      description: "自然と共に暮らす、穏やかな時間をどうぞ。",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* ヘッダー */}
      <header className="bg-amber-200 shadow-md py-4">
        <h1 className="text-3xl font-bold text-center text-amber-800">
          温かみのある空き家サイト
        </h1>
      </header>

      {/* メインビジュアル */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">「誰かの暮らしを、次へ」</h2>
        <p className="text-gray-600">
          空き家に新しい命を吹き込む、人と家の出会いをつなげます。
        </p>
      </section>

      {/* 空き家カード一覧 */}
      <main className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {houses.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={house.image}
              alt={house.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-amber-700">{house.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{house.location}</p>
              <p className="text-gray-700">{house.description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* フッター */}
      <footer className="text-center py-6 mt-12 bg-amber-100 text-gray-700">
        © 2025 温かみのある空き家サイト
      </footer>
    </div>
  );
}
