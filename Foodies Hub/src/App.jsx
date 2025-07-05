
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

const Title = (
  <h1 id="title" key="h2">Foodies Hub</h1>
);

//composing components
const HeaderComponent = () => {
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

// const AppLayout = () => {
//   return (
//     <div>Hello</div>
//   ); 
// }

export default HeaderComponent;