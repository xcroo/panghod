export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-7xl md:text-9xl font-black text-green-400 leading-none">
              PANGO
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              $PANGO
            </h2>

            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Nobody asked for a pangolin.
              <br />
              Now it's on Robinhood Chain.
            </p>

            <button className="mt-10 bg-green-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-all duration-300">
              BUY PANGO
            </button>

            <p className="mt-4 text-gray-500">
              Coming Soon
            </p>

          </div>

          <div className="flex justify-center">

            <div className="pango-wrapper">

              <div className="music music-1">?</div>
              <div className="music music-2">?</div>
              <div className="music music-3">?</div>

              <img
                src="/pango.png"
                alt="PANGO"
                className="pango-dance"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-green-400">
          What is PANGO?
        </h2>

        <div className="mt-8 text-gray-300 text-lg leading-8">
          <p>PANGO is a pangolin.</p>
          <p className="mt-4">That's the project.</p>
          <p className="mt-4">No roadmap.</p>
          <p className="mt-4">No promises.</p>
          <p className="mt-4">No master plan.</p>
          <p className="mt-4">Just a pangolin.</p>
        </div>

      </section>

      {/* WHY */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-green-400">
          Why PANGO?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/5 border border-green-500/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Rolls</h3>
            <p className="mt-4 text-gray-400">
              PANGO rolls into a ball when life gets scary.
            </p>
          </div>

          <div className="bg-white/5 border border-green-500/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Climbs</h3>
            <p className="mt-4 text-gray-400">
              Sometimes it climbs things.
            </p>
          </div>

          <div className="bg-white/5 border border-green-500/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Exists</h3>
            <p className="mt-4 text-gray-400">
              Most importantly, it continues to exist.
            </p>
          </div>

        </div>

      </section>

      {/* TOKEN INFO */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-green-400">
          Token Info
        </h2>

        <div className="mt-10 bg-white/5 border border-green-500/20 rounded-2xl p-8">

          <div className="grid grid-cols-2 gap-6">

            <div className="text-gray-400">Name</div>
            <div>PANGO</div>

            <div className="text-gray-400">Ticker</div>
            <div>$PANGO</div>

            <div className="text-gray-400">Chain</div>
            <div>Robinhood Chain</div>

            <div className="text-gray-400">Contract</div>
            <div>Coming Soon</div>

          </div>

        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-green-400">
          Disclaimer
        </h2>

        <div className="mt-8 text-gray-300 text-lg leading-8">
          <p>PANGO was created for fun.</p>
          <p className="mt-4">Memes and entertainment only.</p>
          <p className="mt-4">Not financial advice.</p>
          <p className="mt-4">It is a pangolin.</p>
        </div>

      </section>

      <footer className="border-t border-green-500/20 mt-20">

        <div className="max-w-6xl mx-auto px-6 py-12 text-center">

          <h2 className="text-4xl font-black text-green-400">
            PANGO
          </h2>

          <p className="mt-4 text-gray-400">
            Just a pangolin doing pangolin things.
          </p>

          <p className="mt-4 text-gray-500">
            Robinhood Chain
          </p>

        </div>

      </footer>

    </main>
  );
}