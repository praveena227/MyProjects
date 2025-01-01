import React from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="menuPage">
      <div className="menuPageContent">
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Explore Menu</h1>
          </div>
          {[
             {
              title: "Tiffins",
              image: "https://i.pinimg.com/736x/bf/e1/48/bfe1487299320d4c521b34a07e6329fb.jpg",
            },
            {
              title: "Soups",
              image: "https://i.pinimg.com/736x/ed/67/9d/ed679d07242e7fbea26db6478e632533.jpg",
            },
            {
              title: "Fish & Sea food",
              image: "https://i.pinimg.com/736x/4b/83/68/4b83688b9129198eb9bb7eb23c888e5f.jpg",
            },
            {
              title: "Veg Starters",
              image: "https://i.pinimg.com/736x/f4/71/73/f471735fa5564f9994437200410aaf5e.jpg",
            },
            {
              title: "Breads",
              image: "https://i.pinimg.com/736x/91/0d/dd/910dddbbd0808d9bb699f56d5253fb9a.jpg",
            },
            {
              title: "Naan",
              image: "https://i.pinimg.com/736x/0f/8f/fc/0f8ffcd48069083389ed5e9dfda45737.jpg",
            }, 
            {
              title: "Biriyani",
              image: "https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg",
            },
            {
              title: "Fried Rice",
              image: "https://i.pinimg.com/736x/50/10/70/501070b8ad052e84ffbc51dda93b80b2.jpg",
            },
            {
              title: "Paneer Butter Masala",
              image: "https://i.pinimg.com/736x/da/f3/98/daf3988311896ed002a1d75f3702870c.jpg",
            },
            {
              title: "Indian Thali",
              image: "https://i.pinimg.com/736x/f5/76/f3/f576f36364ab240e00aab48bbd9e657b.jpg",
            },          
            {
              title: "Chicken Shawrama",
              image: "https://i.pinimg.com/736x/45/93/97/459397c238463aa6d2a612d23e824f03.jpg",
            },
            {
              title: "Pizza",
              image: "https://i.pinimg.com/736x/78/75/13/787513f528db6279289e087f9d951e2f.jpg",
            },
            {
              title: "Pasta",
              image: "https://i.pinimg.com/736x/f5/8b/02/f58b02db03d5e4b818c01bb271f86f32.jpg",
            },
            {
              title: "French Fries",
              image: "https://i.pinimg.com/736x/aa/a1/78/aaa1783a5565b9177c4cb76479a457a2.jpg",
            },
            {
              title: "Salad",
              image: "https://i.pinimg.com/736x/d1/9e/43/d19e43e516e75178cb0d582429b21613.jpg",
            },
            {
              title: "Snacks",
              image: "https://i.pinimg.com/736x/5d/5c/e0/5d5ce0cef66e5a5682e007dce04a2667.jpg",
            },
            {
              title: "Burgers",
              image: "https://i.pinimg.com/736x/3b/6c/c6/3b6cc651e4cd1cbc7fa7d559a5b81810.jpg",
            },
            {
              title: "Sandwiches",
              image: "https://i.pinimg.com/736x/8a/a9/9f/8aa99f7977538a21fe72a987bf2ed383.jpg",
            },
            {
              title: "Cookies",
              image: "https://i.pinimg.com/736x/d8/e2/8d/d8e28d0eb0ca8c61eca9de3fb58df7f2.jpg",
            },
            {
              title: "Cheese Cakes",
              image: "https://i.pinimg.com/736x/f6/96/61/f69661451863c327ea54181cc1af3eff.jpg",
            },
            {
              title: "Desserts",
              image: "https://i.pinimg.com/736x/70/44/96/704496fe5a89a0e082560550b17ac434.jpg",
            },
            {
              title: "Sizzling Brownie",
              image: "https://i.pinimg.com/736x/1f/28/e0/1f28e020f1f5401a273adf902c61f2e7.jpg",
            },
            {
              title: "IceCreams",
              image: "https://i.pinimg.com/736x/8f/04/08/8f040878ff990436bc5a1674d307719b.jpg",
            },
            {
              title: "waffles",
              image: "https://i.pinimg.com/736x/86/39/db/8639db5f79597d3cfddf8f16e5fb7d4d.jpg",
            },
            {
              title: "Fruit Juices",
              image: "https://i.pinimg.com/736x/db/43/2c/db432cd3feddebe5f9fb477b229d52f6.jpg",
            },
            {
              title: "IceCream Shakes",
              image: "https://i.pinimg.com/736x/57/62/f0/5762f0d20af785a27d0f01da2c2975b9.jpg",
            },
            {
              title: "Milkshakes",
              image: "https://i.pinimg.com/736x/18/53/8f/18538f53113d91aa614b7db0bba50a06.jpg",
            },
            {
              title: "Rainbow Shakes",
              image: "https://i.pinimg.com/736x/a6/2e/77/a62e77f2b43a5784d5b49b427f278c83.jpg",
            },
            {
              title: "Thickshakes",
              image: "https://i.pinimg.com/736x/21/3f/06/213f06f7cf4cbb8649e2493afe4e7932.jpg",
            },
            
          ].map((menuItem, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="menu-item-card shadow p-3 mb-3">
                <img
                  src={menuItem.image}
                  className="menu-item-image w-100"
                  alt={menuItem.title}
                />
                <h1 className="menu-card-title">{menuItem.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <button onClick={goToHome} className="backToHomeBtn">
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default MenuPage;