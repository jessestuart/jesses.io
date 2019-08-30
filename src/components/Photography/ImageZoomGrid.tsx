import styled from 'styled-components'

export default styled.div`
  position: relative;
  display: grid;
  gap: 0.25em;
  grid-auto-rows: auto;
  // grid-auto-rows: minmax(4em, auto);
  // grid-auto-rows: 50vh;

  @media (min-width: 46em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 45em) {
    grid-template-columns: repeat(2, 1fr);
  }
  // @media (min-width: 60em) {
  //   grid-template-columns: repeat(auto-fill, repeat(3, 1fr));
  // }
  // @media (max-width: 60em) and (min-width: 45em) {
  //   grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  // }
  // @media (max-width: 45em) {
  //   grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  // }
`
