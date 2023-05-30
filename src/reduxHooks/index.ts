import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"; 
import { AppDispatch, AppState } from "@store/index";

type Dispatch = () => AppDispatch;

export const useAppDispatch: Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;