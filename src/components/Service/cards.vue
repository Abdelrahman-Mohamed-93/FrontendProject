<template>
  <!-- <section class="container mt-5">
        <div class="row">
            <div class="col">Test 1</div>
            <div class="col">Test 2</div>
            <div class="col">Test 3</div>
        </div>
    </section> -->
  <!-- so either to do it with the normal bootstrap as shown above or as the bootstrap vue as shown below  -->
  <b-container class="mt-5 m-auto">
    <b-row>
      <b-col>
        <div class="card" style="width: 18rem">
          <img src="../../assets/imgs/idea.svg" class="card-img-top service-logo mt-5" alt="..." />
          <div class="card-body">
            <h5 class="card-title mt-3">Card title</h5>
            <p class="card-text mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </b-col>
        <b-col>
            <div class="card" style="width: 18rem">
                <img src="../../assets/imgs/deliver.svg" class="card-img-top service-logo mt-5" alt="..." />
                <div class="card-body">
                    <h5 class="card-title mt-3">Card title</h5>
                    <p class="card-text mt-3">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                </div>
            </div>
        </b-col>
        <b-col>
            <div class="card" style="width: 18rem">
                <img src="../../assets/imgs/work.svg" class="card-img-top service-logo mt-5" alt="..." />
                <div class="card-body">
                    <h5 class="card-title mt-3">Card title</h5>
                    <p class="card-text mt-3">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                </div>
            </div>
        </b-col>
    </b-row>
  </b-container>
</template>


<style>
    .service-logo{
        height: 15vh;
        width: 20% !important;
        margin: 0 auto;
    }
</style>


<script>
export default {
  name: "Cards",
};
</script>