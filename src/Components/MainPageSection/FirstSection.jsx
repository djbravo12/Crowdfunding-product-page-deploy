import { useState } from "react"
import logo from '/images/logo-mastercraft.svg'
import bookMark from '/images/icon-bookmark.svg'

const FirstSection = () => {
    const [marked, setMarked] = useState(false)

    const isMarked = () => {
        setMarked(!marked)
    }

    return (
        <section className='text-center relative bg-white py-8 px-4 lg:px-14 lg:py-12 rounded-lg'>
            <div className='absolute top-[-10%] left-0 flex justify-center w-full'>
                <img src={logo} alt="" />
            </div>
            <div className='my-5'>
                <h1 className='py-4 lg:py-1 text-2xl font-bold'>Mastercraft Bamboo Monitor Riser</h1>
                <p className='py-2 text-darkGray tracking-tight'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-moderateCyan px-14 lg:px-12 py-2 rounded-[2rem] text-white'>Back this project</button>
                <button className={`${!marked ? "bg-[#B1B1B1]" : "bg-moderateCyanAplha"} flex items-center  rounded-[28px]`} onClick={isMarked}><img src={bookMark} alt="bookmarkImg" /><span className={`hidden lg:block px-4 font-bold ${!marked ? "text-[#2F2F2F]" : "text-darkCyan"}`}>{!marked ? "Bookmark" : "Bookmarked"}</span></button>
            </div>
        </section>
    )
}

export default FirstSection