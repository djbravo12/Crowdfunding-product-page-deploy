import { useGlobalContext } from "../../Context/Context"
import PledgeModalCompo from './PledgeModalComp/PledgeModalComp'

const PledgeModal = () => {

    const { isPledgeOpen, pledgeLeftData, pledgemodalFunBtn, showForm, checkedValue, setCheckedValue } = useGlobalContext()
    const { bambooStand, blackEditionStand, mahoganySpecialEdition } = pledgeLeftData

    const checkSelectedValue = (e) => {
        const value = parseInt(e.target.value)
        setCheckedValue(value)
    }

    return (
        <>

            <div className={`${isPledgeOpen ? "block" : "hidden"} fixed top-0 left-0  w-full h-full overflow-auto bg-[#00000066] grid place-items-center `}>
                <section className="bg-white px-6 py-6 lg:py-10 mt-[7rem]  rounded-xl lg:max-w-2xl w-[90%] ">
                    <div className="flex justify-between mt-2 mb-4">
                        <span className="font-bold">Back this project</span>
                        <button className="" onClick={pledgemodalFunBtn}><img src="./images/icon-close-modal.svg" alt="closeMenu.icon" /></button>
                    </div>
                    <p className="mb-6 text-darkGray  text-[0.9rem]">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    <div className="flex flex-col gap-6 " >
                        <div className={`border rounded-lg ${showForm == 0 ? "border-2 border-moderateCyan" : "border-inherit"}`}>
                            <div className="grid grid-cols-1 lg:gap-1 lg:grid-cols-[30px_2fr] px-7 py-4 ">
                                <div className="col-start-1 col-end-2 lg:col-start-1 lg:col-end-3 mb-2 lg:my-2 flex gap-3">
                                    <input type="radio" name="Pledge" id="noPledge" value={0} checked={checkedValue == 0} onChange={checkSelectedValue} className=" h-6 w-6  appearance-none align-middle relative border-2 border-inherit rounded-full after:content-['']  hover:border-moderateCyan after:absolute after:hidden after:top-[4px] after:left-[4px] after:rounded-full after:border-[6px] after:border-moderateCyan  checked:after:block" />
                                    <label htmlFor="noPledge" className="font-semibold hover:text-moderateCyan  lg:ml-3">Pledge with no reward</label>
                                </div>

                                <p className="col-start-1 col-end-3  lg:col-start-2 lg:col-end-4 lg:ml-3 lg:my-1 my-4 text-darkGray text-[0.91rem] lg:tracking-normal  tracking-tight leading-6">Choose to support us without a reward if you simply believe in our project. As a backer,
                                    you will be signed up to receive product updates via email.</p>
                            </div>
                        </div>
                        <PledgeModalCompo checkSelectedValue={checkSelectedValue} showForm={showForm} pledgeData={bambooStand} checkedValue={checkedValue} />
                        <PledgeModalCompo checkSelectedValue={checkSelectedValue} showForm={showForm} pledgeData={blackEditionStand} checkedValue={checkedValue} />
                        <PledgeModalCompo checkSelectedValue={checkSelectedValue} showForm={showForm} pledgeData={mahoganySpecialEdition} checkedValue={checkedValue} />
                    </div>
                </section>
            </div>
        </>
    )

}




export default PledgeModal