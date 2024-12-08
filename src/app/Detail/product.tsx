import { ProductDetailComponent } from "../ProductDetail/Detail";
import Customer from "../ProductDetail/Reviews";
import Outlook from "../ProductDetail/Outlook";

export default function ProductDetail() {
  return (
  <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
   <ProductDetailComponent/>
   <Customer/>
   <Outlook/>
  </div>
  );
}