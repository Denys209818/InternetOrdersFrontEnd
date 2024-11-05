export const Footer = () => {
    return (<footer className="relative flex flex-col gap-6 w-full p-10 bg-black">
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h3 className="font-oswald text-footerText uppercase text-white">Щось ще?</h3>

                    <p className="font-lato text-footerP text-silver_gray">
                        вул. Хрещатик, 22, м. Київ, 01001, Україна
                    </p>
                </div>

                <div>
                    <p className="font-lato text-footerP text-white">
                        Будні з 9.00 до 20.00 <br/>
                        Вихідні з 10.00 до 18.00
                    </p>
                </div>
            </div>

            <div className={`
                absolute 
                min-[375px]:top-[100%] 
                min-[1000px]:top-[40px] 
                left-[100%] 
                min-[1000px]:translate-x-negative-right-forkwhite 
                min-[744px]:translate-x-negative-right-forkwhite-tablet 
                min-[375px]:translate-y-negative-right-forkwhite-bottom 
                min-[1000px]:translate-y-0 
                block 
                min-[1000px]:w-[120px]
                min-[375px]:w-[72px]
                `
                }>
                <div className="relative w-full pb-[154.6%]">
                    <div className="absolute top-0 left-0 size-full bg-forkwhite bg-cover"></div>
                </div>
            </div>
        </div>

        <div className="block w-full">
            <div className="flex gap-2">
                <div className="block size-8 p-1">
                    <div className="relative size-full">
                        <div className="absolute top-0 left-0 size-full bg-instagramwhite bg-hover"></div>
                    </div>
                </div>

                <div className="block size-8 p-1">
                    <div className="relative size-full">
                        <div className="absolute top-0 left-0 size-full bg-viberwhite bg-hover"></div>
                    </div>
                </div>

                <div className="block size-8 p-1">
                    <div className="relative size-full">
                        <div className="absolute top-0 left-0 size-full bg-telegramwhite bg-hover"></div>
                    </div>
                </div>
            </div>

            <p className="block p-1 font-lato text-[#CBD2D9] text-menu tracking-tighter">+380 63 888 62 62</p>
            <p className="block p-1 font-lato text-[#CBD2D9] text-menu tracking-tighter">+380 99 888 62 62</p>
        </div>

        <div className="block">
            <h4 className="text-descLi font-lato text-disabled">Політіка конфіденційності</h4>
        </div>
    </footer>);
}