import { useGlobalContext } from "../../../Context/Context"
import PropTypes from 'prop-types';


const Article = ({ articleData }) => {

    const { setPldegeOpen } = useGlobalContext()

    const rewardButton = () => {
        setPldegeOpen(true)
        document.body.style.overflow = "hidden"
    }


    return (
        <article className={`border px-8 py-4 lg:p-6 rounded-xl ${articleData.countLeft == 0 ? "opacity-25" : ""}`} >
            <div className="flex flex-col lg:flex-row justify-between lg:py-4 ">
                <h3 className='font-bold my-2 lg:m-0'>{articleData.pldegeCategory}</h3>
                <p className='text-moderateCyan font-medium'>{articleData.pledgeAmountP}</p>
            </div>
            <p className='my-4 text-darkGray text-[0.91rem] tracking-tight'>
                {articleData.pledgeDescription}
            </p>
            <div className="lg:flex   lg:mt-6 lg:mb-4 lg:flex-row lg:justify-between  ">
                <p className='my-6 lg:m-0 flex items-center gap-2'>
                    <span className='text-3xl font-extrabold'>{articleData.countLeft}</span>
                    <span className='text-darkGray'>left</span>
                </p>
                <button className={`px-4 py-3  lg:py-4 lg:px-10 rounded-full text-white ${articleData.countLeft == 0 ? "bg-darkGray" : "bg-moderateCyan"}`}
                    onClick={rewardButton}
                    disabled={articleData.countLeft == 0 ? true : false}>
                    {articleData.countLeft > 0 ? "Select Reward" : "Out of Stock"}
                </button>
            </div>

        </article >
    )
}



export default Article


Article.propTypes = {
    articleData: PropTypes.object
}