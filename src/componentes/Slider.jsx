import { ArrowBack, ArrowForward } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: gray;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #dfd3d3;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
`
const Slider = () => {
  return (
    <Container>

      <Arrow>
      <ArrowBack/>
      </Arrow>
      <Arrow>
      <ArrowForward/>
      </Arrow>
     
      
      
    </Container>
  )
}

export default Slider
