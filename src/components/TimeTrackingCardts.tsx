import ellipsisSvg from '../assets/vectors/icon-ellipsis.svg'
import workSvg from '../assets/vectors/icon-work.svg'
import playSvg from '../assets/vectors/icon-play.svg'
import studySvg from '../assets/vectors/icon-study.svg'
import exerciseSvg from '../assets/vectors/icon-exercise.svg'
import socialSvg from '../assets/vectors/icon-social.svg'
import selfCareSvg from '../assets/vectors/icon-self-care.svg'

interface PropsTypes {
  title: string
  dailyTimings: {
    current: number
    previous: number
  }
  weeklyTimings: {
    current: number
    previous: number
  }
  monthlyTimings: {
    current: number
    previous: number
  }
  timeFrame: string
}

export const TimeTrackingCard = ({ title, dailyTimings, weeklyTimings, monthlyTimings, timeFrame }: PropsTypes) => {
  let bgIconSvg = ''
  let bgColor = ''

  switch (title) {
    case 'Work':
      bgIconSvg = workSvg
      bgColor = 'bg-c-orange-500'
      break
    case 'Play':
      bgIconSvg = playSvg
      bgColor = 'bg-c-lightBlue-500'
      break
    case 'Study':
      bgIconSvg = studySvg
      bgColor = 'bg-c-lightPink-500'
      break
    case 'Exercise':
      bgIconSvg = exerciseSvg
      bgColor = 'bg-c-green-400'
      break
    case 'Social':
      bgIconSvg = socialSvg
      bgColor = 'bg-c-purple-500'
      break
    case 'Self Care':
      bgIconSvg = selfCareSvg
      bgColor = 'bg-c-yellow-400'
      break
    default:
      bgIconSvg = ''
      bgColor = ''
  }

  return (
    <div className={`${bgColor} pt-11 rounded-2xl relative`}>
      <img className="absolute top-0 right-4" src={bgIconSvg} alt="" />
      {/* Content */}
      <div className='bg-c-darkBlue-500 rounded-xl px-8 py-7 mt-1 relative z-10 h-full hover:bg-c-darkBlue-400 cursor-pointer'>
        {/* Header */}
        <header className="flex justify-between items-center mb-2 sm:mb-6">
          <span className="font-medium">{title}</span>
          <button>
            <img className="hover:fill-white" src={ellipsisSvg} alt="" />
          </button>
        </header>
        {/* Body */}
        <div className='flex justify-between items-center lg:flex-col lg:items-start lg:gap-2'>
          <span className='text-[2rem] font-light lg:text-[3.5rem]'>
            {
              timeFrame === 'weekly'
                ? `${weeklyTimings.current}hrs`
                : timeFrame === 'daily'
                  ? `${dailyTimings.current}hrs`
                  : `${monthlyTimings.current}hrs`
            }
          </span>
          <span className='text-c-purple-200 text-[0.9375rem]'>
            {
              timeFrame === 'weekly'
                ? `Last Week - ${weeklyTimings.previous}hrs`
                : timeFrame === 'daily'
                  ? `Yesterday - ${dailyTimings.previous}hrs`
                  : `Last Month - ${monthlyTimings.previous}hrs`
            }
          </span>
        </div>
      </div>
    </div>
  )
}