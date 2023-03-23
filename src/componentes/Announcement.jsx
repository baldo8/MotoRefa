import styled from "styled-components"

const Container = styled.div`
height: auto;
background-color: lightslategray;
color: whitesmoke;
display: flex;
align-items: center;
justify-content: center;
font-size: 65px;
border-radius:20px;
text-align: center;

`

const Announcement = () => {
  return (
    <Container>
      Promocion envio gratis en tus primeros pedidos
    </Container>
  )
}

export default Announcement
