"use client"

export default function Boards() {
  const councils = ["ACAC", "SS", "SAC"]
  const acacBoards = Array(6).fill("Lorem")
  const sacBoards = Array(6).fill("Lorem")
  const acacClubs = Array(12).fill("Lorem")
  const sacClubs = Array(6).fill("Lorem")

  const Card = ({ label }: { label: string }) => (
    <div className="border border-gray-300 px-4 py-2 w-28 h-20 flex items-center justify-center gap-2">
      <span className="text-gray-800 text-sm">{label}</span>
    </div>
  )

  return (
    <div className="border border-red-400 mx-auto max-w-5xl my-12 p-4 flex flex-col gap-6">
      {/* Councils */}
      <section>
        <h2 className="text-center text-base font-semibold py-2 border-b border-gray-200">
          Councils
        </h2>
        <div className="flex justify-center gap-12 py-6">
          {councils.map(c => <Card key={c} label={c} />)}
        </div>
      </section>

      {/* Boards Under ACAC */}
      <section>
        <h2 className="text-center text-base font-semibold py-2 border-b border-gray-200">
          Boards Under ACAC
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {acacBoards.map((b, i) => <Card key={i} label={b} />)}
        </div>
      </section>

      {/* Boards Under SAC */}
      <section>
        <h2 className="text-center text-base font-semibold py-2 border-b border-gray-200">
          Boards Under SAC
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {sacBoards.map((b, i) => <Card key={i} label={b} />)}
        </div>
      </section>

      {/* Clubs Under ACAC (Marquee) */}
      <section>
        <h2 className="text-center text-base font-semibold py-2 border-b border-gray-200">
          Clubs Under ACAC (Marquee)
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {acacClubs.map((c, i) => <Card key={i} label={c} />)}
        </div>
      </section>

      {/* Clubs Under SAC (Marquee) */}
      <section>
        <h2 className="text-center text-base font-semibold py-2 border-b border-gray-200">
          Clubs Under SAC (Marquee)
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {sacClubs.map((c, i) => <Card key={i} label={c} />)}
        </div>
      </section>
    </div>
  )
}
