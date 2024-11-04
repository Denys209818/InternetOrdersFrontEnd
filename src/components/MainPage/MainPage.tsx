import React from 'react';
import * as Styles from './styles';
import CardMenu from '../custom/CardMenu';
import Button from '../custom/Button';
import LiItem from '../custom/LiItem';

export const MainPage: React.FC = () => {
    const sectionStyles = `
        ${Styles.sectionLargeStyle}
        ${Styles.sectionPhoneStyle}
        ${Styles.sectionSmallphoneStyle}
        ${Styles.sectionStyle}
        ${Styles.sectionTabletStyle}
        overflow-hidden
        `;

    return (<main className={
        `
        block
        bg-[#9CC2FF] 
        w-full
        min-h-height-w-h-t 
        min-[744px]:min-h-height-w-h
        pt-[328px]
        `
        }>

        <section className={`max-w-[1440px] m-auto ${sectionStyles}`}>
            <h2 className='font-oswald text-headerLess'>Шаурма, піцца, млинці</h2>
            <h1 className='relative block font-oswald text-headerHuge'>
                Створи своє– <br/>обирай інгредієнти сам!

                <div className='absolute top-0 left-[100%] translate-x-negative-left-fork translate-y-negative-top-fork z-10 block w-52'>
                    <div className="relative pb-[154%]">
                        <div className="absolute top-0 left-0 size-full bg-[url('/src/images/Fork.svg')]"></div>
                    </div>
                </div>
            </h1>

            <div className="grid grid-cols-12 gap-x-5 pt-[120px]">
                <CardMenu title='Шаурма' type='shawarma' />

                <CardMenu title='Піца' type='pizza' />

                <div className="flex items-center justify-center col-span-3 size-full">
                    <h2 className='font-oswald text-cardChoice uppercase'>Буде дуже смачно</h2>
                </div>

                <CardMenu title='Млинці' type='cakes' />

                <div className='col-start-4 col-end-10 py-16'>
                    <Button title='Перейти до меню' background='black' sizeBtn='huge'/>
                </div>
            </div>
        </section>

        <section className={'bg-[#FFE9DE] ' + sectionStyles}>
            <div className="max-w-[1440px] m-auto">
                <div className='block w-52'>
                    <div className='relative block pb-[77%]'>
                        <div className="absolute left-0 top-0 size-full bg-[url('/src/images/HandCheese.svg')] bg-cover"></div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-x-6 pt-16">
                    <div className="flex flex-col gap-6 col-start-1 col-end-7">
                        <h2 className='font-oswald text-headerLess uppercase'>Що робить нас найкращіми?</h2>

                        <p className='font-lato text-paragraph'>
                            Ми віримо, що їжа може бути і смачною, і збалансованою! Ми використовуємо лише якісні інгредієнти.  Але це ще не все – ми вже прорахували білки, жири та вуглеводи, щоб вам було зручно планувати своє харчування на день. 
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 pb-[72px] justify-center items-center col-start-7 col-end-13">
                        <LiItem
                            title='Конструктор страв'
                            description='Наш конструктор страв допоможе створити ідеальне поєднання смаків.'
                            type='chat'
                        />

                        <LiItem
                            title='Підрахунок кБЖУ'
                            description='Страви з даними про білки, жири та вуглеводи. Вашого гармонійного харчування.'
                            type='pie'
                        />

                        <LiItem
                            title='На зручний час'
                            description='Замовляйте наперед і вкажіть зручний для вас час готовності замовлення.'
                            type='time'
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className={'bg-[#FFFFFF] py-[72px] ' + sectionStyles}>
            <div className="grid grid-cols-12 items-end gap-x-5 max-w-[1440px] m-auto">
                <div className='flex items-end gap-5 col-start-1 col-end-10'>
                    <h1 className='font-oswald text-headerHuge uppercase text-right'>Щось?<br/>Ще</h1>

                    <p className='font-oswald text-else uppercase'>
                        Загляньте у соцмережі за рецептами клієнтів, але тихіше – Планктон десь близько!
                    </p>
                </div>

                <div className="col-start-1 col-end-2 pt-[90px]">
                    <div className='mx-[15px] w-full'>
                        <div className="relative block w-full pb-[136.3%]">
                            <div className="absolute top-0 left-0 size-full bg-cover bg-[url('/src/images/Plancton.svg')]"></div>
                        </div>
                    </div>
                </div>

                <div className='col-start-2 col-end-13 pt-[90px]'>
                    <div className='relative left-[40px] flex gap-5'>
                        <div className='relative size-[325px] shrink-0 border-2 border-black'>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new1.png')]"></div>
                        </div>

                        <div className='relative size-[325px] shrink-0 border-2 border-black'>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new2.png')]"></div>
                        </div>

                        <div className='relative size-[325px] shrink-0 border-2 border-black'>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new3.png')]"></div>
                        </div>

                        <div className='relative size-[325px] shrink-0 border-2 border-black'>
                            <div className="absolute size-full bg-cover bg-[url('/src/images/new4.png')]"></div>
                        </div>
                    </div>
                </div>

                <div className='col-start-4 col-end-10 py-16'>
                    <Button title='Instagram' additionalImage='instagram' background='black' sizeBtn='huge'/>
                </div>
            </div>
        </section>
    </main>);
}