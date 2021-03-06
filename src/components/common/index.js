import LoadingComponent from './LoadingComponent';
import NavigationBar from './NavigationBar';
import DropdownMenu from './DropdownMenu';
import ImagesGallery from './ImagesGallery';
import ImagesUploader from './ImagesUploader';
import MarketplaceFeed from './MarketplaceFeed';
import ProductCard from './ProductCard';
import CartCard from './CartCard';
import Payments from './Payments';
import OrderSummary from './OrderSummary';
import ContactInfo from './ContactInfo';
import ShippingInfo from './ShippingInfo';
import PaymentMethod from './PaymentMethod';
import BillingAddress from './BillingAddress';
import NavLoadingSkeleton from './NavLoadingSkeleton';
import ProductCardSkeleton from './ProductCardSkeleton';
import FormSelect from './FomSelect';
import Feedback from './Feedback';

// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export {
  NavigationBar,
  LoadingComponent,
  DropdownMenu,
  ImagesGallery,
  ImagesUploader,
  MarketplaceFeed,
  ProductCard,
  CartCard,
  Payments,
  OrderSummary,
  ContactInfo,
  ShippingInfo,
  PaymentMethod,
  BillingAddress,
  ProductCardSkeleton,
  NavLoadingSkeleton,
  FormSelect,
  Feedback,
};
