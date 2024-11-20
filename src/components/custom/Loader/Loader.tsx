import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        }
    }, []);

    return (<div className={`
        fixed
        z-10
        top-0
        left-0
        size-full
        bg-[#0000008f]
    `}>
        <div className={`
            absolute
            top-[50%]
            left-[50%]
            block
            w-[240px]
            h-[280px]
            bg-[url('/src/images/Loader.svg')]
            bg-cover
            bg-center
            animate-scalest
            origin-center
        `}>

        </div>
        
    </div>);
}

export default Loader;