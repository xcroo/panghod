export default function Home() {
  const buyLink =
    "https://app.uniswap.org/swap?outputCurrency=0x1527deb13ae41b34450e93b0a6123fafdaaf1b03";

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-400/10 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-300/5 blur-[220px]" />
      </div>
{/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-3">
      <img
        src="/pango.png"
        alt="PANGO"
        className="w-10 h-10 object-contain"
      />

      <span className="font-bold text-xl text-green-400">
        PANGO
      </span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-gray-300">
      <a href="#about" className="hover:text-green-400 transition">
        About
      </a>

      <a href="#why" className="hover:text-green-400 transition">
        Why PANGO
      </a>

      <a href="#token" className="hover:text-green-400 transition">
        Token
      </a>

      <a href="#disclaimer" className="hover:text-green-400 transition">
        Disclaimer
      </a>
    </div>

    <a
      href={buyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition"
    >
      BUY PANGO
    </a>

  </div>
</nav>

{/* HERO */}
<section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

  <div className="text-green-400 tracking-[0.4em] uppercase text-sm mb-4">
    Robinhood Chain
  </div>

  <div className="relative">
    <div className="absolute inset-0 bg-green-500/20 blur-[120px] rounded-full" />

    <img
      src="/pango.png"
      alt="PANGO"
      className="relative w-72 h-72 md:w-96 md:h-96 object-contain pango-float"
    />
  </div>

  <h1 className="mt-8 text-7xl md:text-9xl font-black bg-gradient-to-r from-green-300 via-green-400 to-white bg-clip-text text-transparent">
    PANGO
  </h1>

  <h2 className="mt-4 text-2xl md:text-4xl font-bold">
    $PANGO
  </h2>

  <p className="mt-6 text-xl md:text-2xl text-gray-300">
    Nobody asked for a pangolin.
    <br />
    Now it's on Robinhood Chain.
  </p>

  <a
    href={buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 px-8 py-4 rounded-2xl bg-green-500 text-black font-bold text-lg hover:bg-green-400 transition inline-block"
  >
    BUY PANGO
  </a>

  <div className="grid md:grid-cols-3 gap-4 mt-10 w-full max-w-4xl">

    <a
      href="https://dexscreener.com/robinhood/0xd533bc6fe81ca62950ce2ea677ed4c45c134e301"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/50 hover:bg-white/10 transition"
    >
      <h3 className="text-green-400 font-bold text-lg">
        DexScreener
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        View chart and trading activity.
      </p>
    </a>

    <a
      href="https://www.defined.fi/robinhood/0xd533bc6fe81ca62950ce2ea677ed4c45c134e301?quoteToken=token1&cache=22945"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/50 hover:bg-white/10 transition"
    >
      <h3 className="text-green-400 font-bold text-lg">
        Defined
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Advanced analytics and liquidity.
      </p>
    </a>

    <a
      href="https://www.geckoterminal.com/id/robinhood/pools/0xd533bc6fe81ca62950ce2ea677ed4c45c134e301"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/50 hover:bg-white/10 transition"
    >
      <h3 className="text-green-400 font-bold text-lg">
        GeckoTerminal
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Track price, volume and liquidity.
      </p>
    </a>

  </div>

</section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-green-400">
          What Is PANGO?
        </h2>

        <div className="mt-12 max-w-3xl mx-auto text-center text-lg text-gray-400 leading-9">

          <p>PANGO is a pangolin.</p>

          <p className="mt-4">That's the project.</p>

          <p className="mt-4">No roadmap.</p>

          <p className="mt-4">No promises.</p>

          <p className="mt-4">No master plan.</p>

          <p className="mt-4">Just a pangolin.</p>

        </div>

      </section>

      {/* WHY */}
      <section
        id="why"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-5xl font-bold text-center text-green-400">
          Why PANGO?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              Rolls
            </h3>

            <p className="mt-4 text-gray-400">
              PANGO rolls into a ball when life gets scary.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              Climbs
            </h3>

            <p className="mt-4 text-gray-400">
              Sometimes it climbs things.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-green-400">
              Exists
            </h3>

            <p className="mt-4 text-gray-400">
              Most importantly, it continues to exist.
            </p>
          </div>

        </div>

      </section>

      {/* TOKEN INFO */}
      <section
        id="token"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-5xl font-bold text-center text-green-400">
          Token Information
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Name</p>
            <h3 className="text-2xl font-bold mt-2">PANGO</h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Ticker</p>
            <h3 className="text-2xl font-bold mt-2">$PANGO</h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Chain</p>
            <h3 className="text-2xl font-bold mt-2">
              Robinhood Chain
            </h3>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <p className="text-gray-500">Contract</p>

            <a
              href="https://robinhoodchain.blockscout.com/token/0x1527deB13AE41b34450e93b0A6123fafDAAF1b03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 text-sm break-all hover:text-green-300 hover:underline transition"
            >
              0x1527deb13ae41b34450e93b0a6123fafdaaf1b03
            </a>

            <p className="mt-2 text-xs text-gray-500">
              View on Robinhood Chain Explorer ?
            </p>
          </div>

        </div>

      </section>

      {/* DISCLAIMER */}
      <section
        id="disclaimer"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >

        <h2 className="text-5xl font-bold text-green-400">
          Disclaimer
        </h2>

        <div className="mt-10 text-lg text-gray-400 leading-9">

          <p>PANGO was created for fun.</p>

          <p className="mt-4">
            Memes and entertainment only.
          </p>

          <p className="mt-4">
            Not financial advice.
          </p>

          <p className="mt-4">
            It is a pangolin.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center">

        <h3 className="text-4xl font-bold text-green-400">
          PANGO
        </h3>

        <p className="mt-4 text-gray-400">
          Just a pangolin doing pangolin things.
        </p>

        <p className="mt-2 text-gray-600">
          Robinhood Chain
        </p>

      </footer>

    </main>
  );
}