const string=`
.puff * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.puff::before,
.puff::after {
  box-sizing: border-box;
}
body {
  background-color: #fff2f5;
  position: relative;
  min-height: 100vh;
}
.puff{
width: 300px;
height: 300px;
border-radius: 50%;
background-color:#723d43;
}

`
export default string;