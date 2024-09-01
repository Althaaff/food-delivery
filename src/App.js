import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import BannerName from "./components/BannerName";
import SubMenuContainer from "./components/SubMenuContainer";
import MenuCard from "./components/MenuCard";
import { Items, MenuItems } from "./components/Data";
import { useContext, useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import DebitCard from "./components/DebitCard";
import CartItem from "./components/CartItem";
import { useContextValue } from "./components/redux/StateProvider";
// import { tailspin } from 'ldrs'
// tailspin.register();

// Default values shown

function App() {

  // Main Dish State :
  const [isMainData, setIsMainData] = useState(
    Items.filter((element) => element.itemId === 'buger01')
  );
    
  const [{cart}, dispatch] = useContextValue();

  console.log('cart: ', cart)

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));

      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // MenuCard Active toggle:
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    console.log(menuCards);

    function setMenuCardActive() {
      // console.log("Hii");
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  const setData = (itemId) => {
    setIsMainData(Items.filter((element) => element.itemId === itemId));
  }

  console.log('filterData :', setData);

  return (
    <div className="App">
      {/* Header Container */}
      <Header />

      {/* Main Container */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Althaf"} discount={"20"} link={"#"} />
            <img
              src="data:image/png;base64,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"
              alt="img"
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {
                isMainData && isMainData.map((data) => {
                  console.log('data: ', data);

                  return (
                    <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={
                      data.imgSrc
                    }
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                  )
                })
              }
              
            </div>
          </div>
        </div>

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

        {!cart ? (
          <div></div>
        ) : (
          <div className="cartCheckOutContainer">
           <SubMenuContainer name={"Carts Items"} />

            <div className="cartContainer">
              <div className="cartItems">
                { cart && cart.map((data) => (
                  <CartItem 
                   key={data.id}
                   itemId={data.id}
                   name={data.name}
                   imgSrc={data.imgSrc}
                   price={data.price}
                />
                )) }
              </div>
            </div>

            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ 45.0</span>
              </p>
            </div>

            <button className="checkOut">
              Check Out
            </button>
          </div>
        )}
        </div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />

          <MenuContainer link={"#"} icon={<Chat />} />

          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />

          <MenuContainer link={"#"} icon={<Favorite />} />

          <MenuContainer link={"#"} icon={<SummarizeRounded />} />

          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
