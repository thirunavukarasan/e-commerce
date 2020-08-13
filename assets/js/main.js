var offSet = 0;
var limit = 10;

console.log("test")

function productDetails() {

    // ajax call get student details
    $.ajax({
        url: 'television.json',
        method : 'GET',
        dataType: "json",
        success: function (response) {
            
            function replacer(key, value) {
                return value.replace(/\\"/g, '"');
            }
              
            console.log()
            let r = response[0]['Enities_key_value'].replace(/\\'/g, "")
            console.log(r[1])
            // let t = response[0]['Enities_key_value'].replace(/[^\w\s]/gi, '');
            // console.log(t)

            // console.log(response);
            $("#dataLimit").text(limit);
            $("#dataTotLength").text(response.length);
            console.log(offSet,limit)
            var datalimit = response.slice(offSet,limit)
            datalimit = processData(datalimit);
            console.log(datalimit);
            var datalength = datalimit.length;

            // iteration of data
            for(var i=0; i<datalength; i++) {
                console.log(response[i].Image_url);

                let appendData = `
                                        <div class="row mt-2 border-bottom product-img">
                                            <div class="col-lg-3 col-md-3 col-sm-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <img class="img-tv"
                                                            src="${datalimit[i].Image_url}"
                                                            alt="...">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-8">
                                                        <input type="checkbox" id="telivisonCheck" name="television">
                                                        <label for="telivisonId">Add to Cart</label><br>
                                                    </div>
                                                    <div class="col-4 ">
                                                        <i class="fa fa-heart float-right" id="heart-cus" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-8 mt-2">
                                                <div>
                                                    <h5 id="product-name">
                                                        </h>${datalimit[i]["Product name/ID"]}</h5>
                                                    <button type="button" class="btn btn-success btn-sm ">${datalimit[i].rating} <i class="fa fa-star"
                                                            aria-hidden="true"></i></button><span class="text-muted">  Rating :${datalimit[i].ratingCount}</span>  <span class="text-muted">Reviews: ${datalimit[i].reviews}</span>
                                                    <ul class="product-des d-none d-sm-block">
                                                        <li class="">Netflix|Prime Video|Disney+Hotstar|Yout</li>
                                                        <li class="">Operating System: Android</li>
                                                        <li class="">Ultra HD (4K) 3840 x 2160 Pixels</li>
                                                        <li class="">20 W Speaker Output</li>
                                                        <li class="">60 Hz Refresh Rate</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-4 my-2">
                                                <h3 id="">
                                                    &#8377; ${datalimit[i].offerPrice}</h3>
                                                <ul class="price-section">
                                                    <li class=""><s>&#8377; ${datalimit[i].price}</s></li>
                                                    <li class="">Upto 8000 offer</li>
                                                </ul>
                                            </div>
                                         </div>
                `

                $("#product-des-sec").append(appendData); // append data into front end
            }

        },
        error: function (error) {
            console.log(error);
        }
    }); 
}
productDetails();  // function call


// function for generate random data
function processData(datalimit) {

   datalimit.map((television, index)=>{
    
        television.price = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;  // Basic price

        television.ratingCount = Math.floor(Math.random() * (50000 - 2000 + 1)) + 5000;  // rating count cal
  
        television.reviews = Math.floor(Math.random() * (30000 - 1000 + 1)) + 1000;         // reviews

        television.rating = (Math.random() * (4 - 0 + 1)).toFixed(1);                   // rating 

        television.percentage =Math.floor(Math.random() * (10 - 4 + 1)).toFixed(1);     // percentage of oofer cal

        television.offerPrice = (television.price - ((television.price / 100) * (television.percentage))).toFixed(0); // offer price
 
        // console.log(index);
    });

    console.log(datalimit);
    return datalimit;

}


// function for filter section
function displayFilter(e) {

    console.log("test");

   if($(".filter-section").hasClass("d-none")) {
        $(".filter-section").removeClass("d-none");
        $(".filter-section").addClass("d-block");
   }else {
        $(".filter-section").removeClass("d-block");
        $(".filter-section").addClass("d-none");
   }

    console.log($(".filter-section"));
}

// function for pagenation 
function nextPage() {
    console.log("test");

    offSet += 10;
    limit += 10;
    console.log("**************************8")
    productDetails();

    $("#dataLimit").text(limit);


}