export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-900">
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2 text-pink-700">Coifferie Amel</h1>
          <p className="text-lg text-gray-600">Salon de coiffure à Issoire</p>
        </div>
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 mb-8 text-center">
          <p className="font-semibold text-green-800">⭐ 100% recommandé sur 6 avis clients</p>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <a href="tel:+33473891090" className="bg-blue-600 text-white text-center py-4 rounded-xl text-lg font-semibold shadow-lg">
            📞 Appeler : 04 73 89 10 90
          </a>
          <a href="https://wa.me/33685747421" target="_blank" className="bg-green-600 text-white text-center py-4 rounded-xl text-lg font-semibold shadow-lg">
            💬 WhatsApp : 06 85 74 74 21
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center space-y-4">
          <div>
            <p className="font-bold text-gray-700 mb-2">📍 Adresse</p>
            <a href="https://maps.google.com/?q=224+route+de+perrier,+63500+Issoire" target="_blank" className="text-blue-600 hover:underline">
              224 route de perrier<br/>63500 Issoire
            </a>
          </div>
          <div className="pt-2">
            <p className="font-bold text-gray-700 mb-2">✉️ Email</p>
            <a href="mailto:amelleyra@gmail.com" className="text-blue-600 hover:underline">amelleyra@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}
