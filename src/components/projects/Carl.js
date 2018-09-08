import React from 'react'
import styled from 'styled-components'

const Carl = () => {
  return (
    <Window>
      <Sunbeam>
        <EarthBox>
          <Earth />
        </EarthBox>

        <EarthBeam />
      </Sunbeam>
			{/* <div id="sunbeam">
				<!-- contain earth -->
				<div id="earth-box">
					<!-- earth -->
					<div id="earth"></div>
					<!-- info tag for earth -->
					<dl class="infos fade">
						<dt>Home</dt>
						<dd></dd>
					</dl>
				</div>

				<!-- vertical sunbeam on earth background -->
				<div id="earth-beam"></div>
      </div> */}
      
    </Window>
  )
}

const Window = styled.div`
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  margin: 32px auto;
  height: 320px;
  width: 80%;
  z-index: 0;
  overflow: hidden;
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

export default Carl


/* window to space */


// #earth-box {
  // z-index: 3;
  // /* should not be obstructed */
  // position: absolute;
  // top: 55%;
  // left: 50%;
  // height: 2px;
  // width: 2px;
// }
// /* planet earth */

// #earth {
  // z-index: 3;
  // /* should not be obstructed */
  // background-color: #0BB5FF;
  // position: absolute;
  // top: 55%;
  // left: 50%;
  // height: 2px;
  // width: 2px;

  // /* round */
  // -webkit-border-radius: 75px;
  // -moz-border-radius: 75px;

  // /* blink */
  // animation-name: blink;
  // animation-duration: 5s;
  // animation-iteration-count: infinite;
  // animation-fill-mode: both;
// }
// /* blink animation for earth */

// @keyframes blink {
//   0% {
//     opacity: .3;
//   }
//   50% {
//     opacity: 1;
//   }
//   100% {
//     opacity: .3;
//   }
// }
// /* sunbeam suspending earth */

// #earth-beam {
  // z-index: 2;
  // /* behind earth 3 */
  // background-color: rgba(214, 214, 140, 0.04);
  // position: absolute;
  // top: -1em;
  // height: 120%;
  // width: 2em;

  // /* rotated */
  // -ms-transform: rotate(7deg);
  // /* IE 9 */
  // -webkit-transform: rotate(7deg);
  // /* Chrome, Safari, Opera */
  // transform: rotate(7deg);

  // /* blur */
  // -webkit-filter: blur(8px);
  // -moz-filter: blur(8px);
  // -o-filter: blur(8px);
  // -ms-filter: blur(8px);
  // filter: blur(8px);
// }
// /* additional light from camera */

// #light-box {
//   z-index: 1;
//   /* behind earth and sunbeam */
//   background-color: rgba(0, 150, 100, 0.03);
//   position: absolute;
//   height: 100%;
//   width: 60%;
//   right: 0;

//   /* blur */
//   -webkit-filter: blur(25px);
//   -moz-filter: blur(25px);
//   -o-filter: blur(25px);
//   -ms-filter: blur(25px);
//   filter: blur(25px);
// }

// .lightbeam {
//   z-index: 1;
//   /* behind earth and sunbeam */
//   position: absolute;
//   top: -1em;
//   height: 120%;

//   /* rot */
//   -ms-transform: rotate(9deg);
//   /* IE 9 */
//   -webkit-transform: rotate(9deg);
//   /* Chrome, Safari, Opera */
//   transform: rotate(9deg);
// }

// .lightbeam-blur-4 {
//   -webkit-filter: blur(4px);
//   -moz-filter: blur(4px);
//   -o-filter: blur(4px);
//   -ms-filter: blur(4px);
//   filter: blur(4px);
// }

// .lightbeam-1 {
//   background-color: rgba(200, 32, 0, 0.08);
//   width: 5%;
//   left: 0;
// }

// .lightbeam-2 {
//   background-color: rgba(32, 32, 100, 0.08);
//   width: 20%;
//   left: 20%;
// }

// .lightbeam-blur-10 {
//   -webkit-filter: blur(10px);
//   -moz-filter: blur(10px);
//   -o-filter: blur(10px);
//   -ms-filter: blur(10px);
//   filter: blur(10px);
// }

// .lightbeam-3 {
//   background-color: rgba(0, 150, 0, 0.01);
//   width: 50%;
//   left: 8%;
// }

// .lightbeam-4 {
//   background-color: rgba(0, 150, 0, 0.05);
//   width: 5%;
//   left: 30%;
// }

// #saturn {
//   position: absolute;
//   height: 150%;
//   left: -20em;
//   z-index: 4;
// }
// /* tribute text */

// #tribute-description {
//   position: relative;
//   margin: 3em auto;
//   height: 2em;
//   width: 80%;
//   color: #4c4c4c;
//   text-align: right;
// }
// /* hover info */

// .infos:hover {
//   opacity: 1;
// }

// .infos {
//   position: absolute;
//   display: block;
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   margin-top: -90%;
//   margin-left: 90%;
//   padding-left: 100%;
// }

// .fade {
//   -webkit-transition: all 1s ease-in-out;
//   -moz-transition: all 1s ease-in-out;
//   -o-transition: all 1s ease-in-out;
//   transition: all 1s ease-in-out;
// }

// .infos dt {
//   position: absolute;
//   left: 50px;
//   bottom: 30px;
//   width: 300px;
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 1em;
// }
// /* arrow */

// .infos:before {
//   position: absolute;
//   content: '';
//   width: 15px;
//   height: 30px;
//   left: 16px;
//   bottom: 0;
//   border-top: 1px solid rgba(255, 255, 255, 0.5);
//   border-left: 1px solid rgba(255, 255, 255, 0.5);
//   transform: skew(-45deg, 0deg);
// }
