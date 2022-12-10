import {useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../Redux/ReduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
   return useSelector((state: RootState) => callback(state));
}