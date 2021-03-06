import styled from 'styled-components'
import { Header, Container } from 'semantic-ui-react'

export const JumboHeader = styled(Header)`
  font-size: 5rem;
  color: white;
  width: 100%;
  z-index: 3 !important;
`

export const Jumbotron = styled.div`

  background-size: ${props =>
    props.contain ? 'contain !important' : 'cover !important'};
  filter: ${props => `grayscale(${props.grayscale})`};
  background-position: ${props => props.backgroundPosition};
  background-repeat: no-repeat !important;

  background-image: ${props => `url("${props.src}")`};

  height: ${props => (props.fullHeight ? '85vh !important' : '50vh')};
  display: grid;
  @media only screen and (max-width: 1024px) {
    margin-top: -1rem;
  }
`
export const JumboMessage = styled.div`
  background-color: rgba(0, 0, 0, 0) !important;
  margin: auto;
  padding: 2rem;
`

export const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "main"
    "space"
    "footer";
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
`
export const MobileOnlyDiv = styled.div`
  @media only screen and (min-width: 1024px) {
    display: none !important;
  }
`
export const DesktopOnlyDiv = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none !important;
  }
`

export const GridContainer = styled(Container)`
  min-height: 50vh;
  display: grid !important;
  align-content: center;
  justify-items: center;
`
