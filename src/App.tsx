import { TimeTrackingCard } from "./components/TimeTrackingCardts"
import { UserCard } from "./components/UserCard"
import activities from '../src/api/data.json'
import { useState } from "react"

export const App = () => {
  const [timeFrame, setTimeFrame] = useState('weekly')
  const changeTimeFrame = (timeFrame: string) => {
    setTimeFrame(timeFrame)
  }

  const userActivities = activities
  return (
    <div className="grid place-items-center font-c-defaultFamily bg-c-darkBlue-600 text-white min-h-[100vh] text-lg py-20">
      {/* Cards Container */}
      <div className="grid w-11/12 mx-auto gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 max-w-[68.5rem]">
        <UserCard changeTimeFrame={changeTimeFrame} currentTimeFrame={timeFrame} />

        {/* Activities */}
        {
          userActivities.map(activity => {
            const dailyTimings = activity.timeframes.daily
            const weeklyTimings = activity.timeframes.weekly
            const monthlyTimings = activity.timeframes.monthly
            return (
              <TimeTrackingCard
                title={activity.title}
                dailyTimings={dailyTimings}
                weeklyTimings={weeklyTimings}
                monthlyTimings={monthlyTimings}
                timeFrame={timeFrame}
              />
            )
          })
        }
      </div>
    </div>
  )
}
