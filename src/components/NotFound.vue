<template>
    <div class="error-page">
      <div>
        <div class="white--text">
          <h1>Not Found</h1>
        </div>
  
        <div class="text-uppercase">
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style lang="scss" scoped>
  //@import '~@/styles/variables.scss';
  .error-page {
    padding: 130px 0;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  
    h1 {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 120px;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 40px;
      line-height: 1;
    }
    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 40px;
        font-weight: 100;
    }
  }
  </style>
  
  
  