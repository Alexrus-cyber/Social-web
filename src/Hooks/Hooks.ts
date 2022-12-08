import {useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import type { RootState, AppDispatch } from '../Redux/ReduxStore.tsx'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
   return useSelector((state: RootState) => callback(state));
}