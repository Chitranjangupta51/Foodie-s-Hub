
/**
     * Header
     *  -logo
     *  -Nav Items(right side)
     *  -cart
     * Body
     *  -search bar
     *  -RestrauntList
     *   -RestaurantCard
     *    -Image
     *    -Name
     *    -Rating
     *    -Cusines
     * Footer
     *  -Links
     *  -Copyrights
     */

const Title = () => (
  <h1 id="title" key="h2">Foodies Hub</h1>
);

//composing components
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const macDonald = {
  name: "Mac Donald",
  image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/cc77e58f-ae2c-4900-bae2-75feba59e7f4-retina-large.jpg",
  cusines: ["Burger", "American"],
  rating: "4.2"
}

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={macDonald.image} alt="" />
      <h2>{macDonald.name}</h2>
      <h3>{macDonald.cusines.join(" , ")}</h3>
      <h4>{macDonald.rating} Stars</h4>
    </div>
  )
}


const Body = () =>{
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      
    </div>
  )
}

const Footer = () =>{
  return (
    <h4>Footer</h4>
  )
}
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  ); 
}

export default AppLayout;