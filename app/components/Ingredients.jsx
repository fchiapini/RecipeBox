import React      from 'react'
import Ingredient from './Ingredient'

const Ingredients = ({ ingredients }) => (
  <div>
    <h4 className="text-center">Ingredients</h4>
    <table className="table table-bordered">
      <tbody>
        {
          ingredients.split(",").map(function(ingredient, index) {
            return( 
              <Ingredient
                key={index}
                ingredient={ingredient}
              />
            ) 
          })
        }
      </tbody>
    </table>
  </div>
)

export default Ingredients