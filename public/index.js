'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


/* Nom : BIRAMAH 
	Prenom : Rafiatou
	Groupe : IF1 */

function convertDate(str){
	var re = /[0-9]+/g;
	var result= re[Symbol.match](str);
	var dateLoc =  new Date(result[0], result[1], result[2]);
	return dateLoc;
}

function getDays (BeginDate, returnDate)
{
	var MS_PER_DAY = 1000 * 60 * 60 * 24;
	var begin = convertDate(BeginDate).getTime();
	var end = convertDate(returnDate).getTime();
	

	return Math.floor(end- begin) /MS_PER_DAY +1;
}

function ex1(rentals)
{
	var i = 0;
	var j =0;
	var d = [];
	
	
	while(j<cars.length)
			{
				 d[i] = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				
				rentals[i].price = cars[j].pricePerDay * d[i]+ cars[j].pricePerKm*rentals[i].distance;
				console.log(rentals[i].price);
				
			j++	;
			i++;
	}
	
}

function ex2(rentals)
{
	var i = 0;
	var j =0;
	var y =0;
	var d = 0;
	var price_decrease = 0;

	while(j<cars.length)
			{
				 d = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				 price_decrease = 0;
				for(y =1; y<=d ; y++)
					{

						if(y==1)
						{
							
							price_decrease += cars[j].pricePerDay;
						}
						if(y>1 && y<5)
						{
							price_decrease += cars[j].pricePerDay*0.9;
							
						}	
						if(y>4 && y<11 )
						{
							price_decrease += cars[j].pricePerDay*0.7;
						}
						if(y>10)
						{
								price_decrease += cars[j].pricePerDay*0.5;
						
						}
				}
				rentals[i].price = price_decrease+cars[j].pricePerKm*rentals[i].distance;
				console.log(rentals[i].price);
				
			j++	;
			i++;
	}
}


function ex3(rentals)
{
	var i = 0;
	var j =0;
	var y =0;
	var d = 0;
	var price_decrease = 0;

	while(j<cars.length)
			{
				 d = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				 price_decrease = 0;
				for(y =1; y<=d ; y++)
					{
						if(y==1)
						{
							price_decrease += cars[j].pricePerDay;
						}
						if(y>1 && y<5)
						{	
							price_decrease += cars[j].pricePerDay*0.9;	
						}	
						if(y>4 && y<11 )
						{
							price_decrease += cars[j].pricePerDay*0.7;
						}
						if(y>10)
						{
								price_decrease += cars[j].pricePerDay*0.5;		
						}
				}
				rentals[i].price = price_decrease+cars[j].pricePerKm*rentals[i].distance;
				rentals[i].commission.insurance= 15*rentals[i].price / 100;
				rentals[i].commission.assistance = 1*d;
				rentals[i].commission.drivy = rentals[i].commission.insurance - rentals[i].commission.assistance;

				console.log("Insurance: " +rentals[i].commission.insurance);
				console.log("assistance: " + rentals[i].commission.assistance);
				console.log("drivy: "+ rentals[i].commission.drivy);
				
			j++	;
			i++;
	}
}
/***** Exercice 4 *****/

function exo4(rentals)
{

	var i = 0;
	var j =0;
	var y =0;
	var d = 0;
	var price_decrease = 0;

	while(j<cars.length)
			{
				 d = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				 price_decrease = 0;
				for(y =1; y<=d ; y++)
					{
						if(y==1)
						{
							price_decrease += cars[j].pricePerDay;
						}
						if(y>1 && y<5)
						{	
							price_decrease += cars[j].pricePerDay*0.9;	
						}	
						if(y>4 && y<11 )
						{
							price_decrease += cars[j].pricePerDay*0.7;
						}
						if(y>10)
						{
								price_decrease += cars[j].pricePerDay*0.5;		
						}
				}
				rentals[i].price = price_decrease+cars[j].pricePerKm*rentals[i].distance;
				rentals[i].commission.insurance= 15*rentals[i].price / 100;
				rentals[i].commission.assistance = 1*d;
				rentals[i].commission.drivy = rentals[i].commission.insurance - rentals[i].commission.assistance;

				

				if(rentals[i].options.deductibleReduction == true)
				{
					rentals[i].commission.drivy+= 4*d;
				}
				
				console.log("price: " + rentals[i].commission.drivy);
			j++	;
			i++;
	}
}


//Recherche Actors

function s_Actor(str){
	var i = 0;
 while(i<actors.length){
    if (actors[i].rentalId==str)
      return i;
  i++;
  }
}

function ex5(actors){
 
var i = 0;
	var j =0;
	var y =0;
	var d = 0;
	var price_decrease = 0;

	while(j<cars.length)
			{
				 d = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				 price_decrease = 0;
				for(y =1; y<=d ; y++)
					{
						if(y==1)
						{
							price_decrease += cars[j].pricePerDay;
						}
						if(y>1 && y<5)
						{	
							price_decrease += cars[j].pricePerDay*0.9;	
						}	
						if(y>4 && y<11 )
						{
							price_decrease += cars[j].pricePerDay*0.7;
						}
						if(y>10)
						{
								price_decrease += cars[j].pricePerDay*0.5;		
						}
				}
				rentals[i].price = price_decrease+cars[j].pricePerKm*rentals[i].distance;
				rentals[i].commission.insurance= 15*rentals[i].price / 100;
				rentals[i].commission.assistance = 1*d;
				rentals[i].commission.drivy = rentals[i].commission.insurance - rentals[i].commission.assistance;

				

				if(rentals[i].options.deductibleReduction == true)
				{
					rentals[i].commission.drivy+= 4*d;
				}
				
				//console.log("price: " + rentals[i].commission.drivy);
			j++	;
			i++;
	}
  for (i=0; i<rentals.length;i++){
   
	console.log(actors[s_Actor(rentals[i].id)].payment[0].amount=rentals[i].price);
    console.log(actors[s_Actor(rentals[i].id)].payment[1].amount=rentals[i].price-rentals[i].commission.insurance*2);
    console.log(actors[s_Actor(rentals[i].id)].payment[2].amount=rentals[i].commission.insurance);
    console.log(actors[s_Actor(rentals[i].id)].payment[3].amount=rentals[i].commission.assistance);
    console.log(actors[s_Actor(rentals[i].id)].payment[4].amount=rentals[i].commission.drivy);

  }
  
}

// Recherche des rentals
function s_Rental(str){
	var j = 0;
  for (j=0; j<rentals.length;j++){
    if (rentals[j].id==str)
      return j;
  }
}

function ex6(rentalModifications){
	var i =0;
  while(i<rentalModifications.length){
    if (rentalModifications[i].pickupDate)
    {
    	rentals[s_Rental(rentalModifications[i].rentalId)].pickupDate=rentalModifications[i].pickupDate;
    } 
    if (rentalModifications[i].distance) 
    {
    	rentals[s_Rental(rentalModifications[i].rentalId)].distance=rentalModifications[i].distance;
    }
    if (rentalModifications[i].returnDate) 
    {
    		rentals[s_Rental(rentalModifications[i].rentalId)].returnDate=rentalModifications[i].returnDate;
   	}
   	console.log(rentals[s_Rental(rentalModifications[i].rentalId)].pickupDate);
   	console.log(rentals[s_Rental(rentalModifications[i].rentalId)].distance);
   	console.log(rentals[s_Rental(rentalModifications[i].rentalId)].returnDate);
    i++;
  }
  
}

