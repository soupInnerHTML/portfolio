import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { DispatchType, StoreType } from '../store';

export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector
export const useTypedDispatch = () => useDispatch<DispatchType>()
