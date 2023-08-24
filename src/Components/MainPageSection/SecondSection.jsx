import {useGlobalContext} from '../../Context/Context'

const SecondSection = () => {

    const { totalCrowdfunding, progressBarValue, totalBacker } = useGlobalContext()


    return (

        <section className='bg-white my-6 rounded-lg'>
            <div className=' text-center py-8 px-6 lg:px-12'>
                <div className="flex flex-col lg:flex-row items-center lg:text-left ">
                    <p className='lg:mr-[4rem]'>
                        <span className=' block text-3xl font-bold my-2 lg:m-0 lg:mb-2'>${totalCrowdfunding.toLocaleString('en-US')}</span>
                        <span className='block text-darkGray text-sm'>of $100,000 backed</span>
                    </p> 
                    <p className='my-4 lg:m-0 lg:ml-10 lg:mr-20 '>
                        <span className='block text-3xl font-bold my-2 lg:m-0 lg:mb-2'>{totalBacker.toLocaleString('en-US')}</span>
                        <span className='block text-darkGray text-sm'>total backers</span>
                    </p>
                    <p className='my-4 lg:m-o lg:ml-20'>
                        <span className='block text-3xl font-bold my-2 lg:m-0 lg:mb-2'>56</span>
                        <span className='block text-darkGray text-sm'>days left</span>
                    </p>
                </div>
                <progress id="progress-bar" value={progressBarValue} max='100'></progress>
            </div>
        </section>

    )
}

export default SecondSection