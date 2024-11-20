import * as Styles from '../AuthPage/styles';

export const NotFountPage = () => {
    return (<main className={`
        absolute
        ${Styles.largeMainStyle} 
        ${Styles.mainStyle} 
        ${Styles.phoneMainStyle} 
        ${Styles.smallphoneMainStyle} 
        ${Styles.tabletMainStyle}
        bg-[#BBEE85] 
        min-h-height-w-h-t 
        min-[744px]:min-h-height-w-h
        pt-[72px]
        w-full`}>
        <section className='grid grid-cols-12'>
            <h2 className={`
                col-span-12
                font-oswald
                min-[480px]:text-notFoundPreTitle
                text-notFoundPreSmall
                uppercase
            `}>
                шукаєш шаурму?
            </h2>

            <h1 className={`
                font-oswald
                min-[1440px]:text-notFoundTitle
                min-[1000px]:text-notFoundTitlePC
                min-[480px]:text-notFoundTitleTablet
                min-[1000px]:col-span-8
                min-[1440px]:col-span-6
                min-[744px]:col-span-10
                text-notFoundTitleSmall
                col-span-12
                uppercase
            `}>
                Планктон намагався теж, але тут тільки
            </h1>
        </section>
        

        <section className={`
            relative
            min-[1000px]:absolute
            min-[1000px]:left-[100%]
            min-[1440px]:translate-x-negative-x-notfound
            min-[1000px]:translate-x-negative-x-notfoundpc
            min-[1440px]:translate-y-negative-notfound
            min-[1000px]:translate-y-negative-notfoundpc
            left-0
            min-[1000px]:top-[100%]
            min-[744px]:flex
            min-[744px]:gap-x-4
            min-[744px]:items-end
            overflow-hidden
        `}>
            <h1 className={`
                font-oswald
                min-[1440px]:text-errorTitle
                min-[480px]:text-errorTitlePC
                text-errorTitleSmall
                uppercase
            `}>404</h1>

            <div className='block w-[139px]'>
                <div className="relative w-full pb-[171%]">
                    <div className="absolute top-0 left-0 size-full bg-[url('/src/images/PlanctonNotFound.svg')] bg-cover"></div>
                </div>
            </div>
        </section>
    </main>);
}