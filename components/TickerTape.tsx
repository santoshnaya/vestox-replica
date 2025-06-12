'use client'

const TickerTape = () => {
  const tickerItems = [
    "Like & Follow from you. New free to use projects from us.",
    "Like & Follow from you. New free to use projects from us.",
    "Like & Follow from you. New free to use projects from us.",
    "Like & Follow from you. New free to use projects from us."
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white py-2 overflow-hidden z-40">
      <div className="ticker-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-8">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-sm font-medium">{item}</span>
              <span className="text-red-400">❤️</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TickerTape 