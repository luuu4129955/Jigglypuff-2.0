const string=`
/* css reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #fff2f5;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
.wrapper{
  position:absolute;
  top:8%;
  left:50%;
  animation: shake 4s linear infinite;
}
.face {
  position: absolute;
  left: 50%;
  top: 20px;
  margin-left: -160px;
  border: 2px #723d43 solid;
  width: 320px;
  height: 280px;
  background-color: #f5d7de;
  border-radius: 50%;
}

.hair {
  position: absolute;
  left: 50%;
  top: -26px;
  border-radius: 50%;
  margin-left: -60px;
  border-left: 3px solid #723d43;
  border-bottom: 3px solid #723d43;
  background-color: #f5d7de;
  height: 140px;
  width: 120px;
  transform: rotate(45deg);
}
.hair::before {
  position: absolute;
  top: 68px;
  left: 70px;
  content: "";
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border-right: 2px solid #723d43;
  transform: rotate(-30deg);
}
.hair::after {
  position: absolute;
  top: 2px;
  left: 50px;
  content: "";
  width: 42px;
  height: 84px;
  border-radius: 50%;
  border-right: 2px solid #723d43;
  transform: rotate(4deg);
}
.ear {
  position: absolute;
  background-color: #f5d7de;
  width: 160px;
  height: 200px;
  border: 2px solid #723d43;
  border-radius: 65px 300px 0 / 221px 234px 132px 300px;
  left: 50%;
  margin-left: -40px;
  z-index: -1;
}
.left-ear {
  transform: translateX(-120px) rotate(-12deg);
}
.left-ear::before,
.right-ear::before {
  position: absolute;
  content: "";
  width: 60px;
  height: 60px;
  background-color: #41352a;
}
.left-ear::before {
  transform: translateX(22px) translateY(26px);
}
.right-ear::before {
  transform: translateX(22px) translateY(26px);
}
.right-ear {
  transform: rotateX(158deg) translateX(48px) rotate(168deg);
}
.foot {
  border: 2px solid #723d43;
  position: absolute;
  width: 38px;
  height: 88px;
  border-radius: 50%;
  left: 50%;
  margin-left: -19px;
  top: 270px;
  z-index: -1;
  background-color: #f5d7de;
}
.left-foot {
  transform: translateX(-80px) rotate(70deg);
}
.right-foot {
  transform: translateX(90px) rotate(-70deg);
}
.eye {
  position: absolute;
  border: 2px solid #723d43;
  background-color: #f9eef6;
  width: 98px;
  height: 98px;
  left: 50%;
  margin-left: -49px;
  border-radius: 50%;
  animation: linear 6s wink infinite;
}
.left-eye,.right-eye {
  position: absolute;
  top: 88px;
}
.left-eye{left: 76px}
.right-eye {left:240px }


.eye::before,
.eye::after {
  position: absolute;
  content: "";
  border-radius: 50%;
}
.eye::before {
  border: 2px solid #7a8798;
  background-color: #78a3cd;
  width: 72px;
  height: 72px;
  left: 50%;
  top: 50%;
  margin-top: -36px;
  margin-left: -36px;
}
.eye::after {
  position: absolute;
  content: "";
  border: 2px solid #527cab;
  background-color: #517aad;
  width: 48px;
  height: 48px;
  transform: translateY(12px) translateX(22px);
}
.yuan {
  position: absolute;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateY(16px) translateX(36px);
  z-index: 1;
}
.mouth {
  position: absolute;
  background-color: #f67b94;
  width: 28px;
  height: 40px;
  left: 50%;
  top: 148px;
  margin-left: -14px;
  border-radius: 50%;
  animation: singing 2500ms infinite;
}

.mouth::before {
  content: "";
  position: absolute;
  background-color: #a41020;
  width: 28px;
  height: 20px;
  border-radius: 50% / 100% 100% 0 0;
}
.hand {
  position: absolute;
  border-top: 3px solid #723d43;
  border-right: 3px solid #723d43;
  background-color: #f5d7de;
  width: 90px;
  height: 40px;
  border-radius: 0 90px 160px 0 / 40px;
  left: 50%;
  top: calc(50% + 76px);
}
.left-hand {
  transform: translateX(-110px) rotate(30deg);
}
.right-hand {
  position: absolute;
  left: 260px;
  top:190px;
  border-bottom: 1px solid #723d43;
  animation: shakeRightHand 10s linear infinite;
}

.microphone {
  position: absolute;
  left: 60px;
  top: -50px;
  width: 32px;
  height: 42px;
  border: 2px solid #58502c;
  border-radius: 35%;
  background-color: #568c6d;
}
.microphone::before {
  position: absolute;
  top: 38px;
  left: 6px;
  content: "";
  width: 16px;
  height: 48px;
  border: 3px solid;
  border-color: #f7f7f7 #45372e;
  border-radius: 20%;
  background-color: #45372e;
}

/*添加左右摇身体动画*/
@keyframes shake {
  0%, 50%, 100% { transform: rotate(0deg) }
  25% { transform: rotate(-1deg) }
  75% { transform: rotate(1deg) }
}
/*添加嘴巴唱歌动画*/
@keyframes singing {
  0%, 100%, 20%, 80%, 60% { 
  transform: scaleY(0) 
  }
  30%, 70%, 75% { 
  transform: scaleY(0.2)
  }
  10%, 15% {
  transform: scaleY(1) 
  }
  50%, 55%, 90%, 95% { 
  transform: scaleY(0.8) 
  }
}
/* 添加眨眼动画 */
@keyframes wink {
  0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% { 
  transform: scaleY(1) 
  }
  10%, 20%, 70% { 
  transform: scaleY(0.1) 
  }
}
/*添加挥右手动画*/
@keyframes shakeRightHand {
  0%,50%, 100% { 
  transform: rotate(30deg) ;
  transform-origin:left 
  }
  30% { 
  transform:  rotate(-10deg);
  transform-origin:left 
  }
  80% { 
  transform:rotate(-30deg);
  transform-origin:left }
}
`
export default string;