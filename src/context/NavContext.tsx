import React, { createContext, useContext, useState } from "react";
import { useScrollPrevent } from "../hooks/useScrollPrevent";

const NavContext = createContext(false);
const NavUpdateContext = createContext<() => void>(() => {});

export function useNav(){
    return useContext(NavContext)
}

export function useNavUpdate(){
    return useContext(NavUpdateContext)
}

export function NavProvider({ children }: any) {
    const [navOpen, setNavOpen] = useState(false);
    const [allowScroll, blockScroll] = useScrollPrevent();

    function toggleNav() {
        setNavOpen((prev: boolean) => !prev)
        !navOpen ? allowScroll() : blockScroll();
    }

    return (
        <NavContext.Provider value={navOpen}>
            <NavUpdateContext.Provider value={toggleNav}>
                {children}
            </NavUpdateContext.Provider>
        </NavContext.Provider>
    )
}