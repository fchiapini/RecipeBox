import React      from 'react'
import Ingredient from './Ingredient'

const Ingredients = ({ ingredients }) => (
  <ul>
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
  </ul>
)

export default Ingredients