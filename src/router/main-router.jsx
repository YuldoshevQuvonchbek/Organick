import { Home } from "../pages/Home/home";
import { Shop } from "../pages/Shop/shop";
import { ShopSingle } from "../pages/Shop-single/shop-single";
import { Abaut } from "../pages/Abaut/abaut";
export const main_pager = [
  {
    component: <Home />,
  },
  {
    component: <Abaut />,
    path: "about",
  },
  {
    component: <Shop />,
    path: "shop",
  },

  {
    component: <ShopSingle />,
    path: "shopSingle",
  },
];
