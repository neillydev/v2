import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const updatePos = () => {
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePos);

        updatePos();

        return () => window.removeEventListener('scroll', updatePos);
    }, []);
    
    return scrollPos;
}