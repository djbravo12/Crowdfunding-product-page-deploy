import PropTypes from 'prop-types';
import Form from '../../Forms/Form'


const PledgeModalCompo = ({ checkSelectedValue, pledgeData, checkedValue }) => {

    return (
        <>
            <div className={`border rounded-lg ${pledgeData.countLeft == 0 ? "opacity-40" : ""} ${checkedValue === pledgeData.pledgeValue ? "border-2 border-moderateCyan" : "border-inherit"}`}>
                <div className="grid gap-4 lg:gap-2 grid-cols-1 lg:grid-cols-[30px_2fr] px-7 py-5  ">
                    <div className="col-start-1 col-end-2 lg:col-start-1 lg:col-end-3 mb-2 sm:my-2  flex gap-3 order-1">
                        <input type="radio" name="Pledge" disabled={pledgeData.countLeft === 0 ? true : false} id={pledgeData.id} checked={checkedValue == pledgeData.pledgeValue} value={pledgeData.pledgeValue} onChange={checkSelectedValue} className={`mt-3 sm:mt-0 h-6 w-6  appearance-none align-middle relative border-2 border-inherit rounded-full  after:content-[''] after:absolute after:hidden after:top-[4px] after:left-[4px] after:rounded-full after:border-[6px] after:border-moderateCyan  checked:after:block  ${pledgeData.countLeft == 0 ? "hover:border-inherit cursor-not-allowed" : "hover:border-moderateCyan cursor-pointer"}`} />
                        <div className="sm:flex sm:gap-4 sm:items-start sm:ml-3">
                            <label htmlFor={pledgeData.id} className={`text-[0.9rem] font-semibold ${pledgeData.countLeft == 0 ? "hover:text-inherit cursor-not-allowed" : "hover:text-moderateCyan cursor-pointer"}  `}>{pledgeData?.pldegeCategory}</label>
                            <p className="text-moderateCyan tracking-tighter text-[0.9rem] font-medium">{pledgeData?.pledgeAmountP}</p>
                        </div>
                    </div>
                    <p className="order-3  my-2 lg:m-0 lg:col-start-3 lg:col-end-4 lg:order-2"><span className=" text-xl font-bold mr-1">{pledgeData.countLeft}</span> <span className="text-darkGray"> left</span></p>
                    <p className="order-2 lg:ml-3 text-darkGray text-[0.91rem]  lg:tracking-normal tracking-tight leading-6 lg:order3 lg:col-start-2 lg:col-end-4 lg:my-2 "> {pledgeData?.pledgeDescription}</p>
                </div>
                <div className={`${checkedValue === pledgeData.pledgeValue ? "block" : "hidden"} `} >
                    <div className="border-t-2  border-darkGrayAlpha px-7  py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center">
                        <p className="mt-2 mb-5 sm:mb-0 text-darkGray">Enter your pledge</p>
                        <Form value={pledgeData.pledgeValue} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PledgeModalCompo


PledgeModalCompo.propTypes = {
    checkSelectedValue: PropTypes.func,
    showForm: PropTypes.number,
    pledgeData: PropTypes.object,
    checkedValue: PropTypes.number
}