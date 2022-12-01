import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// @ts-ignore
import type { RootState, AppDispatch } from '../Redux/ReduxStore.tsx'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector