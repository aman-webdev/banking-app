"use client"

import balanceAtom from "../atoms/balance"
import {useRecoilValue} from "recoil"

const useAtom = () => {
    const balance = useRecoilValue(balanceAtom)
    return balance
}

export default useAtom