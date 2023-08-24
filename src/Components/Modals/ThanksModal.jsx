import { useGlobalContext } from "../../Context/Context"

const ThanksModal = () => {

    const { showthankModal, setShowThanksModal } = useGlobalContext()

    const modalFunBtn = () => {
        setShowThanksModal(!showthankModal)
        document.body.style.overflow = "auto"
    }


    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#00000066] grid place-items-center ${showthankModal ? "block" : "hidden"}`}>

            <div className="bg-white w-[90%] max-w-lg flex flex-col items-center px-4 py-5 lg:px-10 lg:py-10 text-center rounded-xl">
                <img src="./images/icon-check.svg" alt="icon-check" width='60' className="my-2  lg:w-20" />
                <h1 className="text-xl font-bold my-3 lg:mt-8 lg:mb-0">Thanks for your support!</h1>
                <p className="my-6 lg:mt-3 tracking-tight text-darkGray">
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button className="bg-moderateCyan py-3 px-8 rounded-full my-4 text-white hover:bg-darkCyan " onClick={modalFunBtn}>Got it!</button>
            </div>
        </div>
    )
}

export default ThanksModal