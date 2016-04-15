import React                      from 'react'
import RecipeBox                  from '../containers/RecipeBox'
import OpenFormRecipe             from '../containers/OpenFormRecipe'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const App = () => (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col md={6} mdOffset={4}>
          <OpenFormRecipe />
          <RecipeBox />
        </Col>
      </Row>  
    </Grid>
  </div>
)

export default App