export type OrderItemType = {
    title: string;
    additionals: number;
    count: number;
    price: number;
};

export const OrderItem: React.FC<OrderItemType> = ({ title, additionals, count, price }) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className='font-literata min-[744px]:text-orderListTitle text-orderListPhone italic text-[#1F2933]'>{title}</h3>

            <div className="flex justify-between">
                <p className='block font-lato text-[#1F2933] min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>
                    {additionals === 0 ? 'Без' : additionals} додатків
                </p>

                <div className='flex gap-1'>
                    <span className='block text-[#1F2933] font-lato min-[744px]:text-orderAuthDesc text-orderAuthDescPhone'>{count} шт.</span>
                    <span className='block text-[#1F2933] font-literata min-[744px]:text-orderListPrice text-orderListPricePhone italic'>{price} грн</span>
                </div>
            </div>
        </div>
    )
}