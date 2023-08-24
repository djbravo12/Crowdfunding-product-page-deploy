import { useState } from "react";
import PropTypes from 'prop-types';
import {useGlobalContext} from '../../Context/Context'


const Form = ({ value }) => {

    const [initialInputValue, setInputValue] = useState(parseInt(value))
    const { setPldegeOpen, setTotalCrowdFunding, setTotalBacker, setCheckedValue, setShowThanksModal } = useGlobalContext()

    const sumbitPledgeForm = (e) => {
        setInputValue(parseInt(value))
        setPldegeOpen(false)
        setTotalCrowdFunding(prev => prev + initialInputValue)
        setTotalBacker(prev => prev + 1)
        setCheckedValue(null)
        setShowThanksModal(true)
        e.preventDefault()
    }


    const changeInputValue = (e) => {
        const inputValue = parseInt(e.target.value)
        setInputValue(isNaN(inputValue) || inputValue === 0 ? "" : inputValue)
    }


    return (
        <>
            <form className="flex flex-nowrap gap-4 justify-around mb-4 sm:m-0" onSubmit={sumbitPledgeForm}>
                <div className="relative w-6/12 sm:w-[8rem]">
                    <p className="absolute left-7 top-4 text-darkGray">$</p>
                    <input type="number" name="Input" id="" value={initialInputValue} onChange={changeInputValue} className="border-darkGray pl-10 pr-6 py-4 border-2 w-full h-full rounded-full focus:outline-none focus:border-moderateCyan" />
                </div>
                <button type="submit" className="bg-moderateCyan text-white px-4 py-4 rounded-full w-6/12 sm:w-[8rem]" disabled={initialInputValue >= value ? false : true}>Continue</button>
            </form>
        </>
    )
}


export default Form

Form.propTypes = {
    value: PropTypes.number
}