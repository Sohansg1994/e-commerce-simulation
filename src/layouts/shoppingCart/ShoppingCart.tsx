import useCartStore from '../../stores/useCartStote'
import { changeCurrencyFormat } from '../../utils/changeCurrencyFormat';
import { PlusIcon } from '@heroicons/react/16/solid';
import { FaceFrownIcon, TrashIcon } from '@heroicons/react/20/solid';
import { MinusIcon } from '@heroicons/react/20/solid';
import Button from '../../components/elements/Button';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const {
        products,
        grossAmount,
        netAmount,
        discount,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      } = useCartStore((state) => state);
      const navigate=useNavigate()
  return (
    <div className="p-6 bg-white h-full">
     <div className="flex flex-col justify-between h-full ">
        {products.length === 0 ? (
          <div className="flex items-center justify-center flex-col h-full mb-20">
            <FaceFrownIcon className="w-20 text-primary-main/95" />
            <div className="text-lg font-medium mt-3">Your cart is empty</div>
            <div className="font-light text-gray text-center max-w-sm mt-1">
              Please add products to show the card and calculate the prices
            </div>
            <div className='mt-10'>
                <Button
                title='Back to Shop'
                long
                onClick={()=>navigate('/')}
                />
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
          
            <div className="h-full  mt-2 mb-5">
              {products.map((product, index) => {
                return (
                  <div
                    className="flex justify-between items-center text-xs sm:text-sm font-light gap-4 sm:gap-5 mt-3"
                    key={index}
                  >
                    <div className="flex gap-4">
                      <div className="sm:min-w-[26px]">
                        <img className=" h-12 " src={product.product.thumbnail}/>
                      </div>
                      <div className="sm:max-w-[250px] font-semibold flex items-center">
                        {product.product.name}
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-7 items-center">
                      <div className="flex gap-2">
                        <button
                          className={`p-1 ${
                            product.quantity === 1
                              ? "bg-primary-dark/10 hover:bg-primary-dark/20"
                              : "bg-primary-dark/10 hover:bg-black/10"
                          } rounded-md sm:rounded-lg w-6 sm:w-9 h-6 sm:h-9 cursor-pointer group flex justify-center items-center`}
                          onClick={() => decreaseQuantity(product.product.code)}
                        >
                          {product.quantity === 1 ? (
                            <TrashIcon className="w-3 sm:w-5 text-primary-dark" />
                          ) : (
                            <MinusIcon className="w-3 sm:w-5 text-primary-dark group-hover:text-black/70 duration-200" />
                          )}
                        </button>

                        <input
                          readOnly
                          type="text"
                          value={product.quantity}
                          className="border rounded-md sm:rounded-lg border-gray p-1 w-6 sm:w-9 h-6 sm:h-9 text-center"
                        />
                        <button
                          className={`p-1 rounded-md sm:rounded-lg w-6 sm:w-9 h-6 sm:h-9 flex justify-center items-center ${
                            product.quantity >= product.product.stock
                              ? "cursor-not-allowed bg-gray/5"
                              : "hover:bg-black/10 group bg-gray/20"
                          }`}
                          onClick={() => increaseQuantity(product.product.code)}
                        >
                          <PlusIcon
                            className={`w-5 text-gray group-hover:text-black/70 duration-200`}
                          />
                        </button>
                      </div>
                      <div className="text-right w-16 font-semibold">
                        {(
                          (product.quantity * product.product.price) 
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="justify-end">
              <div className="py-4 border-y border-gray">
                <div className="flex justify-between text-sm mb-2">
                  <div className="font-semibold text-gray">Gross Amount</div>
                  <div className="font-semibold text-right">
                    {changeCurrencyFormat(grossAmount)}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="font-semibold text-gray">Discount</div>
                  <div className="font-semibold text-right">
                    {changeCurrencyFormat(discount)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="text-lg text-gray font-medium">Net Amount</div>
                <div className="text-xl font-semibold">
                  {changeCurrencyFormat(netAmount)}
                </div>
              </div>
              <div className="w-full flex justify-end gap-10 mt-20 flex-wrap">
                 <div className='w-full sm:w-48'>
                    <Button
                    title="Clear cart"
                    ghost
                    long
                    onClick={() => {
                        clearCart();
                    }}
                    />
                </div>
                <div className='w-full sm:w-48'>
                    <Button
                        title="Checkout"
                        long
                    
                    />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
     </div>
  )
}
