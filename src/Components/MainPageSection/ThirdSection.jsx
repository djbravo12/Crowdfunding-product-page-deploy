import { useGlobalContext } from "../../Context/Context"
import Article from "./Article/Article"

const ThirdSection = () => {

    const { pledgeLeftData: { bambooStand, blackEditionStand, mahoganySpecialEdition } } = useGlobalContext()



    return (
      <section className='bg-white py-4 px-6 lg:px-12 rounded-lg'>
            <div>
                <h2 className='my-2 text-2xl font-bold'>About this project</h2>
                <p className='text-darkGray my-6 text-[0.96rem] tracking-tight lg:tracking-[0.5px] lg:text-base '>
                    <span className='my-2 block'>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    </span>
                    <span className='my-4 block'>
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                    </span>
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <Article articleData={bambooStand} />
                <Article articleData={blackEditionStand} />
                <Article articleData={mahoganySpecialEdition} />
            </div>
        </section>
    )
}

export default ThirdSection