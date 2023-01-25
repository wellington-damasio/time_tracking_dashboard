import userAvatar from '../assets/images/image-jeremy.png'

interface PropsTypes {
  changeTimeFrame: (timeFrame: string) => void
  currentTimeFrame: string
}

export const UserCard = ({ currentTimeFrame, changeTimeFrame }: PropsTypes) => {
  const timeFrames = ['daily', 'weekly', 'monthly']

  return (
    // Card
    <div className='rounded-2xl overflow-hidden bg-c-darkBlue-500 md:col-start-1  md:col-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1  lg:row-end-3 lg:flex lg:flex-col'>
      {/* Header */}
      <header className="bg-c-purple-400 p-8 flex gap-5 rounded-2xl lg:flex-col lg:pb-20">
        <img className="w-16 border-2 border-white rounded-full md:w-20" src={userAvatar} alt="" />
        <div>
          <span className='text-[0.9375rem] text-c-purple-200'>Report for</span>
          <h1 className='text-2xl font-light md:text-4xl'>Jeremy Robson</h1>
        </div>
      </header>
      {/* Body */}
      <div className="flex justify-center items-center text-center py-6 text-c-purple-300 lg:flex-col lg:items-start lg:px-8 lg:gap-5">
        {
          timeFrames.map(timeFrame => {
            return (
              timeFrame === currentTimeFrame
                ? (
                  <button
                    className="w-full text-white capitalize lg:text-left"
                    onClick={() => changeTimeFrame(timeFrame)}
                  >
                    {timeFrame}
                  </button>
                ) : (
                  <button
                    className="w-full hover:text-white capitalize lg:text-left"
                    onClick={() => changeTimeFrame(timeFrame)}
                  >
                    {timeFrame}
                  </button>
                )
            )
          })
        }

      </div>
    </div>
  )
}