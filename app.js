const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("car-list")
    const car = document.querySelectorAll(".car")
    const cname = storeitems.getElementsByTagName("h4")

    for(var i=0; i < cname.length; i++){
        let match = car[i].getElementsByTagName("h4")[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            car[i].style.display = "";
           }else{
            car[i].style.display = "none";
           }
        }
    }
}

//const cars = document.querySelectorAll(".car");

//cars.forEach(car => {
//  car.addEventListener("click", function() {
//    const carId = this.getAttribute("data-car");
//    location.assign(`car.html?car=${carId}`);
//  });
//});

//cars.forEach(car => {
//    car.addEventListener("click", function(){
//        const carId = this.getAttribute("data-car")
//        displayCar(carId)
//    })
//})

const urlParams = new URLSearchParams(window.location.search);
//const carId = urlParams.get("car");
// use productId to display information about the product

const carInfo = {
    car1: {
      name: "2020 Honda Civic Type R",
      description: "The 2020 Honda Civic Type R is equipped with a 2.0-liter turbocharged four-cylinder engine that pumps out 306 horsepower and outputs 295 lb-ft. of torque. The 2020 Honda Civic Type R horsepower is paired with a six-speed manual transmission, just like the Si model.",
      price: "$21,990",
      color: "Blue exterior, Red interior",
      miles: "39,685 miles",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg"
    },
    car2: {
        name: "2019 Volkswagen Jetta",
        description: "The 2019 VW Jetta is a sensible sedan that offers outstanding fuel economy and upscale features.",
        price: "$19,798",
        color: "White exterior, Black interior",
        miles: "55,346 miles",
        image: "https://hips.hearstapps.com/hmg-prod/images/2021-volkswagen-jetta-mmp-1-1597767712.jpg"
    },
    car3: {
        name: "2013 Hyundai Sonata",
        description: "The 2013 Hyundai Sonata is a good used car. It's among the most fuel-efficient midsize sedans, and its interior is quite comfortable. Above-average reliability, below-average ownership costs, and strong safety scores enhance its desirability.",
        price: "$9,995",
        color: "Silver exterior, Gray interior",
        miles: "112,283 miles",
        image: "https://images.automatrix.com/1/103313/Mj4e6z5Mkpb6.jpg"
    },
    car4: {
        name: "2020 INFINITI Q50",
        description: "The 2020 Q50 offers refined handling and comes standard with a twin-turbocharged V6 engine that has plenty of muscle. This sedan also has a spacious cabin with comfy seats.",
        price: "$26,872",
        color: "Black exterior, Beige interior",
        miles: "15,915 miles",
        image: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11001082/JN1EV7AR2LM252670/2139eb2b478b8e8086b6831137931b60.jpg"
    },
    car5: {
        name: "2017 Honda Ridgeline RTL-T FWD",
        description: "The 2017 Ridgeline is a great compact pickup truck. It comes standard with a punchy V6 engine and all-wheel-drive, and this powertrain makes easy work of pulling a trailer, slogging through inclement weather or just cruising down the highway.",
        price: "$24,876",
        color: "White exterior, Black interior",
        miles: "41,060 miles",
        image: "https://content.homenetiol.com/2000292/2143540/0x0/548210f531294c7abb151dd05578a948.jpg"
    },
    car6: {
        name: "2015 Jeep Renegade",
        description: "The 2015 Jeep Renegade ranks high in subcompact SUV class. It offers a roomy interior, smooth on-pavement drivability, and great off-roading capability.",
        price: "$12,990",
        color: "Black exterior, Red interior",
        miles: "88,632 miles",
        image: "https://i.ytimg.com/vi/1VkQXW7_fU4/maxresdefault.jpg"
    },
    car7: {
        name: "2019 Chevrolet Equinox",
        description: "The 2019 Chevrolet Equinox earns a high ranking in the compact SUV class, mostly because of its stellar predicted reliability rating. It also offers composed handling and roomy seats.",
        price: "$18,455",
        color: "Blue exterior, Gray interior",
        miles: "39,334 miles",
        image: "https://media.ed.edmunds-media.com/chevrolet/equinox/2022/oem/2022_chevrolet_equinox_4dr-suv_premier_fq_oem_1_1600.jpg"
    },
    car8: {
        name: "2019 Honda Passport Sport FWD",
        description: "The 2019 Honda Passport secures a spot in the top half of midsize SUV rankings thanks to its brisk acceleration, poised steering, and a cabin that’s both roomy and upscale.",
        price: "$21,921",
        color: "Blue exterior, Black interior",
        miles: "109,470 miles",
        image: "https://content.homenetiol.com/2000292/2143540/0x0/fecda5c5af3741c799d63c2b02dc51b6.jpg"
    },
    car9: {
        name: "2021 Nissan Rogue",
        description: "The fully redesigned 2021 Nissan Rogue offers a comfortable and spacious interior and gentle handling, but it lacks the athletic ride of many class rivals.",
        price: "$26,250",
        color: "White exterior, Black interior",
        miles: "10,284 miles",
        image: "https://i.ytimg.com/vi/aNBA33D8DcA/maxresdefault.jpg"
    },
    car10: {
        name: "2019 Honda Accord EX-L 1.5T CVT",
        description: "The 2019 Honda Accord ranks highly among midsize cars thanks to its peppy acceleration, balanced handling, huge trunk, and great safety score.",
        price: "$24,000",
        color: "Whtie exterior, unknown interior",
        miles: "34,756 miles",
        image: "https://images.hgmsites.net/lrg/2019-honda-accord-sedan-ex-1-5t-cvt-angular-front-exterior-view_100692554_l.jpg"
    },
    car11: {
        name: "2018 Land Rover Range Rover Sport",
        description: "The Land Rover Rand Rover's off-roading abilities are practically unparalleled, and it comes standard with four-wheel drive and five-passenger seating.",
        price: "$45,490",
        color: "White exterior, Beige interior",
        miles: "55,136 miles",
        image: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002892/SALWR2RK7JA407608/054214f5619e9e28c6056a7daa58f1f6.jpg"
    },
    car12: {
        name: "2020 Ford F-150",
        description: "The 2020 Ford F-150 ranks near the top of the full-size pickup truck class thanks in part to its hearty towing and hauling ability, muscular engine performance, refined handling, and comfy interior.",
        price: "$35,500",
        color: "Gray exterior, Black interior",
        miles: "60,239 miles",
        image: "https://blogmedia.dealerfire.com/wp-content/uploads/sites/1027/2020/08/2021-Ford-F-150-Color-Stone-Gray_o.jpg"
    },
    car13: {
        name: "2020 Jeep Gladiator",
        description: "The 2020 Jeep Gladiator finishes in the top half of compact pickup truck rankings. It’s one of the best off-roaders in the class, and it has spacious, comfortable seats and good towing and hauling capacities.",
        price: "$37,914",
        color: "White exterior, Black interior",
        miles: "27,895 miles",
        image: "https://di-uploads-pod11.dealerinspire.com/hollywoodchryslerjeep/uploads/2019/10/2020-jeep-gladiator-first-drive.jpg"
    },
    car14: {
        name: "2021 Ram 1500",
        description: "The 2021 Ram 1500 finishes near the top of our full-size pickup truck rankings. This truck has almost no flaws. It’s powerful and capable, with a smooth ride and a top-notch interior.",
        price: "$35,995",
        color: "Red exterior, Black interior",
        miles: "31,620 miles",
        image: "https://cdn.jdpower.com/Models/640x480/2021-Ram-1500-HFE.jpg"
    },
    car15: {
        name: "2017 Nissan Titan",
        description: "The 2017 Nissan Titan has an upscale interior, a smooth ride, and strong engine options.",
        price: "$23,455",
        color: "Black exterior, Black interior",
        miles: "64,281 miles",
        image: "https://www.youngernissan.com/blogs/52/wp-content/uploads/2017/02/2017_Nissan_TITAN_PRO_4X_modified_1.jpg"
    },
    car16: {
        name: "2018 Honda Pilot EX AWD",
        description: "The 2018 Honda Pilot finishes in the middle of the competitive midsize SUV class. It offers a smooth ride and abundant interior space.",
        price: "$29,499",
        color: "Red exterior, Black interior",
        miles: "28,315 miles",
        image: "https://static.cargurus.com/images/forsale/2018/02/07/08/41/2018_honda_pilot-pic-8614447571790841498-1024x768.jpeg"
    },
    car17: {
        name: "2016 Honda Fit EX CVT",
        description: "As one of the most well-rounded models in the class, the 2016 Honda Fit is right at home among the best subcompact cars on the market.",
        price: "$15,695",
        color: "Silver exterior, Black interior",
        miles: "58,791 miles",
        image: "https://content.homenetiol.com/2000292/2143540/0x0/4e8cdde8c05442e48fdb508366d8a8f4.jpg"
    },
    car18: {
        name: "2019 Nissan Altima SR AWD",
        description: "The 2019 Nissan Altima ranks in the top half of the midsize car class. It gets great gas mileage, provides a well-mannered ride, and has a spacious, comfortable cabin.",
        price: "$24,999",
        color: "Gray exterior, Black interior",
        miles: "30,057 miles",
        image: "https://blog.consumerguide.com/wp-content/uploads/sites/2/2019/08/20190610_1735400.jpg"
    },
    car19: {
        name: "2018 Nissan Pathfinder Platinum FWD",
        description: "The 2018 Nissan Pathfinder has good safety scores, a refined V6 engine and roomy seats.",
        price: "$23,990",
        color: "Black exterior, Beige interior",
        miles: "82,098 miles",
        image: "https://content.homenetiol.com/2000292/2195320/0x0/870a9762a10a42d1946ec29966051055.jpg"
    },
    car20: {
        name: "2021 Nissan Versa SV CVT",
        description: "The 2021 Nissan Versa ranks near the top of the subcompact car class thanks to its nice interior, roomy trunk, and smooth ride.",
        price: "$16,919",
        color: "Blue exterior, Gray interior",
        miles: "35,039 miles",
        image: "https://images.hgmsites.net/hug/2021-nissan-versa_100770609_h.jpg"
    },
    car21: {
        name: "2018 Volvo S60 T5 Inscription FWD",
        description: "The 2018 Volvo S60 finishes in the middle of our luxury small car rankings. This sedan delivers a smooth ride and has a comfortable interior.",
        price: "$16,950",
        color: "Silver exterior, Beige interior",
        miles: "63,834 miles",
        image: "https://platform.cstatic-images.com/in/v2/1761bc7a-a795-56a6-bbd7-23ecc45abd05/d50b200a-aeb0-4a92-a7e5-5578a50d5472/ZvKDd5q2pFsFC3vMdmbdmavb9e4.jpg"
    },
    car22: {
        name: "2019 Volvo XC60 Inscription T6 AWD",
        description: "The 2019 Volvo XC60 finishes in the middle of our luxury compact SUV rankings. It has a five-star interior and plenty of tech features.",
        price: "$29,195",
        color: "Blue exterior, Black interior",
        miles: "44,481 miles",
        image: "https://www.southeastautoshowroom.com/galleria_images/990/990_p3_l.jpg"
    },
    car23: {
        name: "2021 Tesla Model 3 Standard Range Plus RWD",
        description: "The Tesla Model 3’s rapid acceleration and dynamic handling help it rank near the top of the luxury hybrid and electric car class.",
        price: "$36,999",
        color: "White exterior, Black interior",
        miles: "41,024 miles",
        image: "https://d2q97jj8nilsnk.cloudfront.net/images/IMG_0452.jpg"
    },
    car24: {
        name: "2022 Tesla Model Y Long Range AWD",
        description: "The 2022 Tesla Model Y offers an extensive driving range, lots of standard safety features, a spacious interior, and strong acceleration.",
        price: "$51,999",
        color: "Blue exterior, Black interior",
        miles: "116 miles",
        image: "https://uploads.onlyusedtesla.com/wp-content/uploads/2022/01/11124756/C-V-IMG_0934v-1536x842.jpg"
    },
   
};

const cars = document.querySelectorAll(".car");

cars.forEach(car => {
  car.addEventListener("click", function() {
    const carId = this.getAttribute("data-car");
    location.assign(`car.html#${carId}`);
  });
});

const carId = location.hash.slice(1);
const car = carInfo[carId];
document.getElementById("carName").innerHTML = car.name;
document.getElementById("carDescription").innerHTML = car.description;
document.getElementById("carPrice").innerHTML = car.price;
document.getElementById("carColor").innerHTML = car.color;
document.getElementById("carMiles").innerHTML = car.miles;
document.getElementById("carImage").src = car.image;
