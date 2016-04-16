import React                      from 'react'
import RecipeBox                  from '../containers/RecipeBox'
import OpenFormRecipe             from '../containers/OpenFormRecipe'
import { Button, Grid, Row, Col } from 'react-bootstrap'

const appStyle = {
  marginTop: '100px',
  WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
}

const App = () => (
  <Grid>
    <Row className="show-grid">
      <Col style={appStyle} md={6} mdOffset={3}>
        <OpenFormRecipe />
        <RecipeBox />
      </Col>
    </Row>
  </Grid>
)

export default App