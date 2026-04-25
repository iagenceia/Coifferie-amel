export default function Home() {
  return (
    <div className="min-h-screen bg-[#C4B59A]">
      {/* PHOTO ÉQUIPE EN GRAND EN TÊTE */}
      <section className="relative">
        <img
          src="/salon.jpg"
          alt="L'équipe Coifferie Amel"
          className="w-full h-[500px] md:h-[650px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="text-center px-4 pt-24 md:pt-32">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">Coifferie D'Amel</h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg">L'art de sublimer votre beauté naturelle à Issoire</p>
            <a href="https://www.planity.com/la-coifferie-damel-63500-issoire" target="_blank" rel="noopener noreferrer">
              <button className="mt-8 bg-white text-[#4A3F35] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition">
                Réserver sur Planity
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* 8 PHOTOS RÉALISATIONS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#4A3F35]">Nos Réalisations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/coupe-femme.jpg" alt="Coupe" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/ongles.jpg" alt="Ongles" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/maquillage.jpg" alt="Maquillage" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/coupe-femme2.jpg" alt="Coupe 2" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/ongles1.jpg" alt="Ongles 1" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/maquillage1.jpg" alt="Maquillage 1" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/epilation1.jpg" alt="Épilation" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
            <img src="/coupe-femme3.jpg" alt="Coupe 3" className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-[#D4C9B1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#4A3F35]">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Coiffure</h3>
              <p className="text-gray-700 mb-4">Coupe, brushing, couleur</p>
              <p className="text-2xl font-bold text-[#4A3F35]">35€</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Onglerie</h3>
              <p className="text-gray-700 mb-4">Gel, vernis, nail art</p>
              <p className="text-2xl font-bold text-[#4A3F35]">25€</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maquillage</h3>
              <p className="text-gray-700 mb-4">Jour, soirée, mariée</p>
              <p className="text-2xl font-bold text-[#4A3F35]">30€</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Épilation</h3>
              <p className="text-gray-700 mb-4">Visage, corps à la cire</p>
              <p className="text-2xl font-bold text-[#4A3F35]">15€</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE AVEC LES 4 PHOTOS RESTANTES */}
      <section className="py-20 px-6 bg-[#C4B59A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#4A3F35]">Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <img src="/coupe-femme4.jpg" alt="Coupe 4" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
            <img src="/epilation2.jpg" alt="Épilation 2" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
            <img src="/maquillage2.jpg" alt="Maquillage 2" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
            <img src="/ongles2.jpg" alt="Ongles 2" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          </div>
        </div>
      </section>

      {/* Section Contact - REMPLACE TA SECTION RDV PAR ÇA */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#4A3F35]">Nous Contacter</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#4A3F35]">Horaires d'ouverture</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Lundi</span>
                  <span className="font-medium">14h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Mardi - Jeudi</span>
                  <span className="font-medium">09h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span className="font-medium">08h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">08h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium text-red-600">Fermé</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#4A3F35]">Adresse</h3>
              <p className="text-lg mb-6">
                Route de Perrier<br />
                63500 Issoire
              </p>
              <a
                href="tel:0473891078"
                className="text-2xl font-bold text-pink-600 hover:text-pink-700 block mb-6"
              >
                04 73 89 10 78
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Route+de+Perrier+63500+Issoire"
                target="_blank"
                className="inline-block bg-[#4A3F35] text-white px-6 py-3 rounded-full hover:bg-gray-800"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
