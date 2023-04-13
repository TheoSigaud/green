<template>
    <body>
        <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="/" class="logo">Green<em> Concession</em></a>
                        <ul class="nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/cars" class="active">Cars</a></li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="section section-bg" id="call-to-action" style="background-image: url('/banner-image-1-1920x500.webp')">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <br>
                        <br>
                        <h2><small><del>$12 999</del></small> <em>$11 779</em></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="trainers">
        <div class="container">
            <br>
            <br>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="/car-image-1-1200x600.webp" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/car-image-1-1200x600.webp" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/car-image-1-1200x600.webp" alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            
            <br>
            <br>

            
            <div class="row" id="tabs">
              <div class="col-lg-4">
                <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                  <li><a class="nav-link active" id="v-pills-un-tab" data-toggle="pill" href="#v-pills-un" role="tab" aria-controls="v-pills-un" aria-selected="true"><i class="fa fa-cog"></i> Vehicle Specs</a></li>
                  <li><a class="nav-link" id="v-pills-deux-tab" data-toggle="pill" href="#v-pills-deux" role="tab" aria-controls="v-pills-deux" aria-selected="false"><i class="fa fa-info-circle"></i> Vehicle Description</a></li>
                  <li><a class="nav-link" id="v-pills-trois-tab" data-toggle="pill" href="#v-pills-trois" role="tab" aria-controls="v-pills-trois" aria-selected="false"><i class="fa fa-plus-circle"></i> Vehicle Extras</a></li>
                  <li><a class="nav-link" id="v-pills-quatre-tab" data-toggle="pill" href="#v-pills-quatre" role="tab" aria-controls="v-pills-quatre" aria-selected="false"><i class="fa fa-phone"></i> Contact Details</a></li>
                </ul>
              </div>
              <div class="col-lg-8">
                <section class="tab-content" id="v-pills-tabContent" style="width: 100%;">
                  <article  class="tab-pane fade show active" id="v-pills-un" role="tabpanel" aria-labelledby="v-pills-un-tab">
                    <h4>Vehicle Specs</h4>

                    <div class="row">
                       <div class="col-sm-6">
                            <label>Type</label>
                       
                            <p>Used vehicle</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Make</label>
                       
                            <p>Lorem ipsum dolor sit</p>
                       </div>

                       <div class="col-sm-6">
                            <label> Model</label>
                       
                            <p>Lorem ipsum dolor sit</p>
                       </div>

                       <div class="col-sm-6">
                            <label>First registration</label>
                       
                            <p>05/2010</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Mileage</label>
                       
                            <p>5000 km</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Fuel</label>
                       
                            <p>Diesel</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Engine size</label>
                       
                            <p>1800 cc</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Power</label>
                       
                            <p>85 hp</p>
                       </div>


                       <div class="col-sm-6">
                            <label>Gearbox</label>
                       
                            <p>Manual</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Number of seats</label>
                       
                            <p>4</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Doors</label>
                       
                            <p>2/3</p>
                       </div>

                       <div class="col-sm-6">
                            <label>Color</label>
                       
                            <p>Black</p>
                       </div>
                    </div>
                  </article>
                  <article  class="tab-pane fade" id="v-pills-deux" role="tabpanel" aria-labelledby="v-pills-deux-tab">
                    <h4>Vehicle Description</h4>
                    
                    <p>- Colour coded bumpers <br> - Tinted glass <br> - Immobiliser <br> - Central locking - remote <br> - Passenger airbag <br> - Electric windows <br> - Rear head rests <br> - Radio <br> - CD player <br> - Ideal first car <br> - Warranty <br> - High level brake light <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                   </article>
                  <article  class="tab-pane fade" id="v-pills-trois" role="tabpanel" aria-labelledby="v-pills-trois-tab">
                    <h4>Vehicle Extras</h4>

                    <div class="row">   
                        <div class="col-sm-6">
                            <p>ABS</p>
                        </div>
                        <div class="col-sm-6">
                            <p>Leather seats</p>
                        </div>
                        <div class="col-sm-6">
                            <p>Power Assisted Steering</p>
                        </div>
                        <div class="col-sm-6">
                            <p>Electric heated seats</p>
                        </div>
                        <div class="col-sm-6">
                            <p>New HU and AU</p>
                        </div>
                        <div class="col-sm-6">
                            <p>Xenon headlights</p>
                        </div>
                    </div>
                  </article>
                  <article  class="tab-pane fade" id="v-pills-quatre" role="tabpanel" aria-labelledby="v-pills-quatre-tab">
                    <h4>Contact Details</h4>

                    <div class="row">   
                        <div class="col-sm-6">
                            <label>Name</label>

                            <p>John Smith</p>
                        </div>
                        <div class="col-sm-6">
                            <label>Phone</label>

                            <p>123-456-789 </p>
                        </div>
                        <div class="col-sm-6">
                            <label>Mobile phone</label>
                            <p>456789123 </p>
                        </div>
                        <div class="col-sm-6">
                            <label>Email</label>
                            <p><a href="#">john@carsales.com</a></p>
                        </div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
        </div>
    </section>
    </body>
</template>