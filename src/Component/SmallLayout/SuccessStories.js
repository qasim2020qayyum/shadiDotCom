import React from 'react'



const sStories=[
    {
      p1 : 'I met my fiance on Shadi.com. At first it seemed like a daunting task. But three months later, I came across a profile based in Toronto. Messaged her first and right from start we both had positive feelings. I felt so much at ease in communicating with her. We had similar values and commonality in interests. We are planning to get married soon. With our parents blessing',
      p2 : 'Thank you Shadi.com',
      pName: "Aman",
      location: 'Toranto',
    },
    {
      p1 : 'Renu joined Shadi.com after a strong suggestion from her parents during the pandemic. Ishan caught her interest in her potential match list. She sent him a personal email and Ishan responded back. They exchanged emails, spoke on the phone and video chats for a couple of weeks. They both had similar interests, religious beliefs, Likes and dislikes. They were both keen to meet in person and Ishan & Renu had a great time in their first meeting. They are now married in a romantic small wedding in Seattle. ',
      p2 : 'Thanks Shadi matchmaking',
      pName: 'Renu S',
      location: 'Seattle',
    },
    {
      p1 : 'Last year after signing up for a 6 months term with Shadi.com. Had no Luck initially for some weeks. Few months Later I got matched with a wonderful and caring man. At first I could not imagine or think it was possible to meet my partner on a site. ',
      p2 : 'I am in the San Francisco Bay area with my fiance, soon to be married in the near future. Never give up hope on good things in life! Thank you ',
      pName: 'Marium S',
      location: 'San Francisco',
    },
    {
      p1 : 'After joining Shadi.com for almost a year, I found a nice girl in Los Angeles who seemed to have the qualities that I wanted in a partner. She was everything that I could ask for in a match. We first met outside Costa, because of Covid. Conversations continued for almost 6 months, now we are engaged! Thinking of getting married in 2021.',
      p2 : ' Thank you Shadi.com for your help. ',
      pName: 'Gaurav S',
      location: 'Los Angeles',
    },
]

const SuccessStories = () => {
    
  return (
    <>
    <h1 className=' text-red-600 text-center font-bold text-3xl my-12'>
    SUCCESS STORIES
    </h1>
    {
      sStories.map((elem)=>{
        return(
          <>
          <div className='my-8'>

          
    <div className='w-3/5 h-96 bg-slate-200 hover:bg-slate-300 hover:shadow-lg m-auto rounded-2xl '>
          <div className='text-justify text-2xl py-8 px-20'>
      <p>{elem.p1}</p><br/>
      <p>{elem.p2}</p><br/>
      <p className='font-bold'>{elem.pName}</p>
      <p>{elem.location}</p>
          </div>


    </div>
          </div>
          
          </>
        )

      })
    }

    
    </>
  )
}

export default SuccessStories