import React from 'react'
import styled from 'styled-components'
import saturn_png from '../../images/saturn_s.svg'
// import carl_audio from '../../audio/quote.mp3'

const Carl = () => {
  return (
    <Main>
      <Window>
        <Sunbeam>
          <EarthBox>
            <Earth />
            <Info>
              <dt>Home</dt>
              <dd></dd>
            </Info>
          </EarthBox>
          <EarthBeam />
        </Sunbeam>
        <LightBox>
          <LightBeam1 />
          <LightBeam2 />
          <LightBeam3 />
          <LightBeam4 />
        </LightBox>

        <Saturn src={saturn_png} />
      </Window>

      <LabelBox>
        <p>Carl Sagan (1934-1996)</p>
        {/* <audio controls autoPlay loop>
          <source src={carl_audio} type='audio/mpeg' />
        </audio> */}
      </LabelBox>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .9);
`

const LabelBox = styled.div`
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  margin: 8px;
  width: 80%;
  z-index: 0;

  padding: 8px;
  max-width: 760px;

  box-sizing: border-box;
  border-radius: 16px;

  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.5);

  p {
    margin: 0;
    color: white;
  }
`

const Window = styled.div`
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  margin: 32px auto;
  height: 320px;
  width: 80%;
  z-index: 0;
  overflow: hidden;

  min-height: 320px;
  max-width: 760px;

  box-sizing: border-box;
  border-radius: 16px;

  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.5);
`

const Sunbeam = styled.div`
  position: absolute;
  height: 100%;
  width: 2em;
  left: 80%;
`

const EarthBox = styled.div`
  z-index: 3;
  /* should not be obstructed */
  position: absolute;
  top: 55%;
  left: 50%;
  height: 2px;
  width: 2px;
`

const Earth = styled.div`
  z-index: 3;
  /* should not be obstructed */
  background-color: #0BB5FF;
  position: absolute;
  top: 55%;
  left: 50%;
  height: 2px;
  width: 2px;

  /* round */
  border-radius: 75px;

  /* blink */
  animation-name: blink;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  @keyframes blink {
    0% { opacity: .3; }
    50% { opacity: 1; }
    100% { opacity: .3; }
  }
`

const Info = styled.dl`
  position: absolute;
  display: block;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin-top: -90%;
  margin-left: 90%;
  padding-left: 100%;
  transition: all 1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 30px;
    left: 16px;
    bottom: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    transform: skew(-45deg, 0deg);
  }

  dt {
    position: absolute;
    left: 50px;
    bottom: 30px;
    width: 300px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1em;
  }
`

const EarthBeam = styled.div`
  z-index: 2;
  background-color: rgba(214, 214, 140, 0.04);
  position: absolute;
  top: -1em;
  height: 120%;
  width: 2em;
  transform: rotate(7deg);
  filter: blur(8px);
`

const LightBox = styled.div`
  z-index: 1;
  /* behind earth and sunbeam */
  background-color: rgba(0, 150, 100, 0.03);
  position: absolute;
  height: 100%;
  width: 60%;
  right: 0;

  /* blur */
  filter: blur(25px);
`

const LightBeam1 = styled.div`
  z-index: 1;
  /* behind earth and sunbeam */
  position: absolute;
  top: -1em;
  height: 120%;

  /* rot */
  transform: rotate(9deg);

  background-color: rgba(200, 32, 0, 0.08);
  width: 5%;
  left: 0;

  filter: blur(4px);
`

const LightBeam2 = styled.div`
  z-index: 1;
  /* behind earth and sunbeam */
  position: absolute;
  top: -1em;
  height: 120%;

  /* rot */
  transform: rotate(9deg);

  background-color: rgba(32, 32, 100, 0.08);
  width: 20%;
  left: 20%;

  filter: blur(10px);
`

const LightBeam3 = styled.div`
  z-index: 1;
  /* behind earth and sunbeam */
  position: absolute;
  top: -1em;
  height: 120%;

  /* rot */
  transform: rotate(9deg);

  background-color: rgba(0, 150, 0, 0.01);
  width: 50%;
  left: 8%;

  filter: blur(10px);
`

const LightBeam4 = styled.div`
  z-index: 1;
  /* behind earth and sunbeam */
  position: absolute;
  top: -1em;
  height: 120%;

  /* rot */
  transform: rotate(9deg);

  background-color: rgba(0, 150, 0, 0.05);
  width: 5%;
  left: 30%;

  filter: blur(4px);
`

const Saturn = styled.img`
  position: absolute;
  height: 150%;
  left: -20em;
  z-index: 4;
`

export default Carl