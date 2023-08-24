/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react"
import PropTypes from 'prop-types';


const context = createContext()


export const DataProvider = ({ children }) => {

    const [totalCrowdfunding, setTotalCrowdFunding] = useState(89914)
    const [totalBacker, setTotalBacker] = useState(5007)
    const [showthankModal, setShowThanksModal] = useState(false)
    const [progressBarValue, setProgressBarValue] = useState(0)
    const [checkedValue, setCheckedValue] = useState(null)
    const [isPledgeOpen, setPldegeOpen] = useState(false)
    const [pledgeLeftData, setpledgeLeftData] = useState({
        'bambooStand': { id: "bambooStand", countLeft: 101, pledgeValue: 25, pldegeCategory: "Bamboo Stand", pledgeDescription: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.", pledgeAmountP: 'Pledge $25 or more' },
        'blackEditionStand': { id: "blackEditionStand", countLeft: 64, pledgeValue: 75, pldegeCategory: "Black Edition Stand", pledgeDescription: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.", pledgeAmountP: "Pledge $75 or more" },
        "mahoganySpecialEdition": { id: "mahoganySpecialEdition", countLeft: 0, pledgeValue: 200, pldegeCategory: "Mahogany Special Edition", pledgeDescription: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.", pledgeAmountP: "Pledge $200 or more" }
    })



    useEffect(() => {
        setProgressBarValue(Math.floor((totalCrowdfunding / 100000) * 100))
    }, [totalCrowdfunding])


    const pledgemodalFunBtn = () => {
        document.body.style.overflow = "auto"
        setPldegeOpen(false)
        setCheckedValue(null)
    }


    return <context.Provider value={{ totalCrowdfunding, setTotalCrowdFunding, progressBarValue, totalBacker, setTotalBacker, isPledgeOpen, setPldegeOpen, pledgeLeftData, setpledgeLeftData, pledgemodalFunBtn, checkedValue, setCheckedValue, showthankModal, setShowThanksModal }}>
        {children}
    </context.Provider>
}


export const useGlobalContext = () => { return useContext(context) }


DataProvider.propTypes = {
    children: PropTypes.object
}


