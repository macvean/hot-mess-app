"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SaveIcon, RotateCcwIcon } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface SliderState {
  lateToClass: number
  lostCharger: number
  riskyText: number
  procrastination: number
}

const sarcasticMessages = [
  "Wow, you really have your life together. We're impressed. 🙄",
  "At least you're consistently chaotic. We love that for you. 💅",
  "Your hot mess energy is immaculate today. Keep it up? 🔥",
  "This is giving 'main character in a rom-com.' We stan. ✨",
  "Iconic behavior, honestly. No notes. 👑",
  "Your chaos is on brand. Stay authentic, bestie. 💖",
  "Not you being a walking disaster again. It's fine, we're all fine. 🫠",
  "The bar was on the floor and you still found a way to trip over it. 💫",
  "Absolutely feral energy today. We respect it. 🦝",
  "At this point, being a mess is your aesthetic. Own it. 🌸",
]

export default function HotMessTracker() {
  const [sliders, setSliders] = useState<SliderState>({
    lateToClass: 0,
    lostCharger: 0,
    riskyText: 0,
    procrastination: 0,
  })

  const [savedScores, setSavedScores] = useState<Array<{ score: number; date: string; message: string }>>([])
  const [showSaved, setShowSaved] = useState(false)

  // Load saved scores from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hotMessScores")
    if (saved) {
      setSavedScores(JSON.parse(saved))
    }
  }, [])

  const totalScore = sliders.lateToClass + sliders.lostCharger + sliders.riskyText + sliders.procrastination
  const maxScore = 400 // 4 sliders * 100 max each
  const percentage = (totalScore / maxScore) * 100

  const getEmoji = (percentage: number) => {
    if (percentage < 10) return "😇"
    if (percentage < 25) return "🙂"
    if (percentage < 40) return "😅"
    if (percentage < 55) return "😰"
    if (percentage < 70) return "🥴"
    if (percentage < 85) return "😵‍💫"
    return "🔥"
  }

  const getMessage = (percentage: number) => {
    const index = Math.min(Math.floor(percentage / 10), sarcasticMessages.length - 1)
    return sarcasticMessages[index]
  }

  const handleSliderChange = (key: keyof SliderState, value: number[]) => {
    setSliders((prev) => ({ ...prev, [key]: value[0] }))
  }

  const handleSave = () => {
    const newScore = {
      score: totalScore,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      message: getMessage(percentage),
    }
    const updated = [newScore, ...savedScores].slice(0, 10) // Keep only last 10
    setSavedScores(updated)
    localStorage.setItem("hotMessScores", JSON.stringify(updated))
    setShowSaved(true)
  }

  const handleReset = () => {
    setSliders({
      lateToClass: 0,
      lostCharger: 0,
      riskyText: 0,
      procrastination: 0,
    })
    setShowSaved(false)
  }

  return (
    <div className="w-full max-w-2xl">
      <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm shadow-2xl border-2 border-border">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-murrey mb-3 text-balance">Hot Mess Tracker</h1>
          <p className="text-muted-foreground text-lg">{"How chaotic was your day? Let's find out."}</p>
        </div>

        {/* Animated Emoji Face */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="text-8xl md:text-9xl animate-float transition-all duration-300" key={getEmoji(percentage)}>
              {getEmoji(percentage)}
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-2xl font-bold text-murrey">{totalScore}</span>
              <span className="text-sm text-muted-foreground ml-1">/ {maxScore}</span>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6 mb-8">
          <SliderInput
            label="Late to class"
            value={sliders.lateToClass}
            onChange={(value) => handleSliderChange("lateToClass", value)}
          />
          <SliderInput
            label="Lost charger"
            value={sliders.lostCharger}
            onChange={(value) => handleSliderChange("lostCharger", value)}
          />
          <SliderInput
            label="Sent risky text"
            value={sliders.riskyText}
            onChange={(value) => handleSliderChange("riskyText", value)}
          />
          <SliderInput
            label="Procrastination"
            value={sliders.procrastination}
            onChange={(value) => handleSliderChange("procrastination", value)}
          />
        </div>

        {/* Motivational Message */}
        {totalScore > 0 && (
          <div className="mb-6 p-4 bg-muted rounded-lg border-2 border-old-rose/40">
            <p className="text-center text-base md:text-lg font-medium text-murrey italic">{getMessage(percentage)}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Button
            variant="outline"
            onClick={handleSave}
            className="border-2 border-old-rose text-murrey hover:bg-old-rose hover:text-white bg-transparent"
          >
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Result
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-2 border-tea-green text-murrey hover:bg-tea-green hover:text-murrey bg-transparent"
          >
            <RotateCcwIcon className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Saved Scores */}
        {showSaved && savedScores.length > 0 && (
          <div className="mt-8 pt-8 border-t-2 border-border">
            <h3 className="text-xl font-bold text-murrey mb-4 text-center">Your Chaos History</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {savedScores.map((item, index) => (
                <div
                  key={index}
                  className="p-3 bg-background rounded-lg border border-border flex justify-between items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
                    <div className="text-sm italic text-foreground">{item.message}</div>
                  </div>
                  <div className="text-2xl font-bold text-murrey shrink-0">{item.score}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

function SliderInput({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (value: number[]) => void
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-bold text-murrey w-8 text-right">{value}</span>
      </div>
      <Slider value={[value]} onValueChange={onChange} max={100} step={1} className="cursor-pointer" />
    </div>
  )
}
