 import React from 'react';

 class MenuComponent extends React.Component {
     render() {
         return (
             <div>
                 <h1>Our Menu</h1><br></br>
                    <h4>Coffee & Tea</h4><br></br>

                    <h4>{this.props.menu}</h4>
                    <p>{this.props.menu[0].summary}</p><br></br>

                    <h4>{this.props.id[1]}</h4>
                    <p>{this.props.summary[1]}</p><br></br>

                    <h4>CCAFE AU LAIT</h4>
                    <p>Choice of drip coffee with steamed milk on top $5.5</p><br></br>

                    <h4>Black Tea</h4>
                    <p>Assortment of Black Teas $3</p><br></br>
                    <h4>Green Tea</h4>
                    <p>Assortment of Green Teas $3</p><br></br>

                    <h4>Treats</h4><br></br>

                    <h4>Bread Basket</h4>
                    <p>Assortment of fresh baked fruit breads and muffins $5.5</p><br></br>
                
                    <h4>Honey Almond Granola with Fruits</h4>
                    <p>Natural cereal of honey toasted oats, raisins, almonds and dates $8</p><br></br>
                
                    <h4>Belgian Waffle</h4>
                    <p>Vanilla flavored batter with malted flour $10.5</p><br></br>
             </div>
         )
     }
 }
 export default MenuComponent;