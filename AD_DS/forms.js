//wrapper = container
//form = surveyform



function myfunction(){	
	

	if(document.getElementById('a1').checked){
		var q1=1;		
	}
	else if(document.getElementById('a2').checked){
		var q1=2;		
	}
	else if(document.getElementById('a3').checked){
		var q1=0;		
	}


	if(document.getElementById('b1').checked){
		var q2=0;		
	}
	else if(document.getElementById('b2').checked){
		var q2=2;		
	}
	else if(document.getElementById('b3').checked){
		var q2=1;		
	}



	if(document.getElementById('c1').checked){
		var q3=2;		
	}
	else if(document.getElementById('c2').checked){
		var q3=1;		
	}
	else if(document.getElementById('c3').checked){
		var q3=0;		
	}

	if(document.getElementById('d1').checked){
		var q4=0;		
	}
	else if(document.getElementById('d2').checked){
		var q4=2;		
	}
	else if(document.getElementById('d3').checked){
		var q4=1;		
	}

	if(document.getElementById('e1').checked){
		var q5=2;		
	}
	else if(document.getElementById('e2').checked){
		var q5=1;		
	}
	else if(document.getElementById('e3').checked){
		var q5=0;		
	}


	if(document.getElementById('f1').checked){
		var q6=2;		
	}
	else if(document.getElementById('f2').checked){
		var q6=1;		
	}
	else if(document.getElementById('f3').checked){
		var q6=0;		
	}


	if(document.getElementById('g1').checked){
		var q7=2;		
	}
	else if(document.getElementById('g2').checked){
		var q7=1;		
	}
	else if(document.getElementById('g3').checked){
		var q7=0;		
	}
	else if(document.getElementById('g4').checked){
		var q7=3;		
	}
	



	if(document.getElementById('h1').checked){
		var q8=1;		
	}
	else if(document.getElementById('h2').checked){
		var q8=0;		
	}
	else if(document.getElementById('h3').checked){
		var q8=2;		
	}



	if(document.getElementById('i1').checked){
		var q9=2;		
	}
	else if(document.getElementById('i2').checked){
		var q9=1;		
	}
	else if(document.getElementById('i3').checked){
		var q9=0;		
	}

	var jsonData={	
	Q1: q1,
	Q2: q2,
	Q3: q3,
	Q4: q4,
	Q5: q5,
	Q6: q6,
	Q7: q7,
	Q8: q8,
	Q9: q9
}



var xhr = new XMLHttpRequest();
                        xhr.open("POST", "https://icapapi.herokuapp.com/", true);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send(JSON.stringify(jsonData));
                        xhr.onload = function () {
                            
                            if (this.status == 200) {
                                var data = JSON.parse(this.responseText);


                                if(data.Career[1] == "1"){
                                	document.getElementById("career").innerHTML=`We recomend you to take up "Data Science" as a career option based on your responses!` + "<br>" +
                                	`The following are some resources you can use for exploring this domain:` + "<br><br>" +
                                	`https://www.simplilearn.com/tutorials/data-science-tutorial/what-is-data-science`+ "<br>" +
                                	`https://www.innoarchitech.com/blog/what-is-data-science-does-data-scientist-do
                                	`;
                                }
                                else if(data.Career[1] == '2')
                                {                                	
                                	document.getElementById("career").innerHTML=`We recomend you to take up "Font_end Development" as a career option based on your responses!` + "<br>" +
                                	`The following are some resources you can use for exploring this domain:`+ "<br><br>" +
                                	`https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html` + "<br>" +
                                	`https://skillcrush.com/blog/skills-to-become-a-front-end-developer/
                                	`;
                                }
                                else if(data.Career[1] == '3'){
                                	document.getElementById("career").innerHTML=`We recomend you to take up "Internet of Things or Blockchain" as a career option based on your responses!`+ "<br>" +
                                	`The following are some resources you can use for exploring this domain:`+ "<br><br>" +
                                	`https://www.oracle.com/in/internet-of-things/what-is-iot/`+ "<br>" +
                                	`https://www.euromoney.com/learning/blockchain-explained/what-is-blockchain
                                	`;
                                }
                                else if(data.Career[1] == '0'){

                                	document.getElementById("career").innerHTML=`We recomend you to take up "Back-End developer" as a career option based on your responses!` + 
                                	`The following are some resources you can use for exploring this domain:` + "<br><br>" +

                                	`https://www.techslang.com/definition/what-is-backend-development/` + "<br>" +
                                	`https://www.guru99.com/what-is-backend-developer.html`;
                                }                             
                            }
                        };


	
}









