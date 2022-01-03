<script>
export default {
    
}
</script>

<template>
  <div class="container">
    <div class="detail">      
      <div class="top-infos">
        <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" />
        <div class="texts">
          <div class="general">
            <h1>Spider-Man: No Way Home</h1>
            <span class="rate">8.4</span>
            <span class="date">15/12/2021</span>
          </div>          
          <ul class="categories">
            <li>Action</li>
            <li>Adventure</li>
            <li>Science Fiction</li>
          </ul>
          <span>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</span>
        </div>        
      </div>      
      <h2>Cast</h2>
      <ul class="cast">
        <li>
          <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg" />
          <span class="name">Tom Holland</span>
          <span class="title">Peter Parker / Spider-Man</span>
        </li>
        <li>
          <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg" />
          <span class="name">Tom Holland</span>
          <span class="title">Peter Parker / Spider-Man</span>
        </li>
        <li>
          <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg" />
          <span class="name">Tom Holland</span>
          <span class="title">Peter Parker / Spider-Man</span>
        </li>
      </ul>
    </div>    
  </div>
</template>

<style lang="scss" scoped>
.container {  
  display: flex;
  flex-direction: column;
  align-items: center;

  .detail { 
    width: 60%;

    .top-infos { 
      display: flex;
      margin: 1rem 0 1rem 0;

      .texts { 
        margin-left: 1rem;

        .general { 
          display: flex;
          flex-direction: column;

          .rate { 
            width: fit-content;
            background: #27ae60;
            color: white;
            padding: 3px;
            border-radius: 3px 3px 0 0;
            margin-top: 1rem;
          }

          .date {
            width: fit-content;
            background: #34495e;
            color: white;
            padding: 3px;
            font-size: 13px;
            border-radius: 3px 3px 0 0;
            margin-top: 1rem;
          }

        }

        .categories {
          display: flex;
          margin-top: 1rem;
          margin-bottom: 1rem;

          li {
            margin-right: 1rem;
            background: #34495e;
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 13px;
          }

        }

      }
    }

    .cast { 
      display: flex;

      li {
        display: flex;
        margin: 1rem 1rem 0 0;
        flex-direction: column;

        img {
          width: 100px;
        }

        .name {
          font-size: 14px;
        }

        .title {
          font-size: 11px;
        }

      }

    }

  }

}
</style>