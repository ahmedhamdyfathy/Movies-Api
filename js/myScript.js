$(document).ready(function(){
    $(".loading").fadeOut(1000,function(){
        $("body").css("overflow","auto")
    });
   
});

$(".strip-toggel-menu").click(function(){
    let sideBarToggle = $(".nav-tab-menu").innerWidth();
//window.alert( $(".strip-header-nav").css("left"));
if( $(".strip-header-nav").css("left")=="0px"){
    $(".strip-header-nav").animate({left:`${sideBarToggle}`},50,function(){
        $(".fa-align-justify").toggleClass("fa-times")
       
        $(".nav-tab-menu .item1").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1100);
        $(".nav-tab-menu .item2").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1200);
        $(".nav-tab-menu .item3").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1300);
        $(".nav-tab-menu .item4").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1400);
        $(".nav-tab-menu .item5").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1500);
        $(".nav-tab-menu .item6").animate({
            opacity: "1",
            paddingTop: "20px"
        }, 1600);
        $(".nav-tab-menu .item7").animate({
            opacity: "1",
            paddingTop: "20px"
        }, 1700);

    });
}else{
    $(".strip-header-nav").animate({left:`0px`},50,function(){
        $(".fa-align-justify").toggleClass("fa-times")
        $(".nav-tab-menu li").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 500);


    });
}
 
   
})

// ********* Ajax section ***********
//--------------------------------------------------------------->
var item1 = document.getElementsByClassName('item1')
var myRequest = new XMLHttpRequest();

var posts = [];

 myRequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=17c743ab06006ff4d5dc399e8f4ea812");

myRequest.send();


myRequest.addEventListener("readystatechange",function(){
    if(myRequest.readyState ==4 && myRequest.status == 200 )
    {
        posts = JSON.parse(myRequest.response).results;
        displayPosts()
    }
});


function displayPosts(){
    var cartoon = '';


    for (var i= 0; i< posts.length ; i++){
		 var name = posts[i].name
          ? posts[i].name.length > 40
            ? posts[i].name.slice(0, 40) + "..."
            : posts[i].name
          : posts[i].title.length > 40
          ? posts[i].title.slice(0, 40) + "..."
          : posts[i].title;
		  
		  var overview =
  posts[i].overview.length > 100
    ? posts[i].overview.slice(0, 100) + "..."
    : posts[i].overview;
         
		 
		  var date = posts[i].release_date
		  ? posts[i].release_date.length > 4
            ? posts[i].release_date.slice(0, 40) 
            : posts[i].release_date
          : posts[i].first_air_date.length > 4
          ? posts[i].first_air_date.slice(0, 40) 
          : posts[i].first_air_date;
		  
        
          
        cartoon += `<div class="col-md-4 pb-3">
        <div class="post rounded">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
		<div class=" layer   ">
	     <div class="layers">
	     <h4>${name}</h4>
		 
          <p>${overview}</p>
		  <h3>rate: ${posts[i].vote_average}</h3>
		  <p>${date}</p>
		  </div>
		  </div>
        </div>
		
      </div>`
	  
	 
    }
 document.getElementById('myRow').innerHTML = cartoon;
 
 

}

$(".item1").click(function(){
	
	myRequest.open("GET", 'https://api.themoviedb.org/3/movie/now_playing?api_key=17c743ab06006ff4d5dc399e8f4ea812&language=en-US&page=1')
    myRequest.send();
})

$(".item2").click(function(){
	
	myRequest.open("GET", 'https://api.themoviedb.org/3/movie/popular?api_key=17c743ab06006ff4d5dc399e8f4ea812&language=en-US&page=1')
    myRequest.send();
})
$(".item3").click(function(){
	
	myRequest.open("GET", 'https://api.themoviedb.org/3/tv/top_rated?api_key=17c743ab06006ff4d5dc399e8f4ea812&language=en-US&page=1')
    myRequest.send();
})

$(".item5").click(function(){
	
	myRequest.open("GET", 'https://api.themoviedb.org/3/trending/all/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff')
    myRequest.send();
})

$(".item6").click(function(){
	
	myRequest.open("GET", 'https://api.themoviedb.org/3/movie/upcoming?api_key=17c743ab06006ff4d5dc399e8f4ea812&language=en-US&page=1')
    myRequest.send();
})



// ********* End Ajax section ***********
//--------------------------------------------------------------->

//*************************** section form validation ***********


function myfunction(){
	
	$("a[href^='#contact']").click(function(){
    let hrefLink = $(this).attr("href") ;
   let sectionOffset = $(hrefLink).offset().top;

    $("html , body").animate({scrollTop:sectionOffset},1000);
})
				
			/*$(".item7").click(function(){
			let x = $(document).height();
			let y=  $("#contact").height();
			let z = x - y;
			
				$("html , body").animate({scrollTop: `-$(z)`},1000);
			})*/
		};
myfunction();

$("#validationCustom01").blur(function(){
	 let nameVal = $("#validationCustom01").val();
	  console.log(nameVal);
         var letters = /^[A-Za-z]+$/;
			 
		 
		 if(nameVal.match(letters)){
		 console.log("tama")
	    $("#panel").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel").slideDown("slow");}
	     
		 
  });
  
  $("#validationCustom02").blur(function(){
	 let nameVal02 = $("#validationCustom02").val();
	  //console.log(nameVal02);
         var letters02 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			 
		 if(nameVal02.match(letters02)){
		 console.log("tama")
	    $("#panel02").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel02").slideDown("slow");}
	      
  });
	 
  $("#validationCustom03").blur(function(){
	 let nameVal03 = $("#validationCustom03").val();
	  //console.log(nameVal03);
         var letters03 = /^[0-9]+$/;
			 
		 if(nameVal03.match(letters03)){
		 console.log("tama")
	    $("#panel03").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel03").slideDown("slow");}
	      
  });
  
  $("#validationCustom04").blur(function(){
	 let nameVal04 = $("#validationCustom04").val();
	  //console.log(nameVal04);
         var letters04 = /^[0-9]+$/;
			 
		 if(nameVal04.match(letters04)){
		 console.log("tama")
	    $("#panel04").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel04").slideDown("slow");}
	      
  });
  
  $("#validationCustom05").blur(function(){
	 let nameVal05 = $("#validationCustom05").val();
	  //console.log(nameVal05);
         var letters05 = /^[A-Za-z]\w{7,14}$/;
			 
		 if(nameVal05.match(letters05)){
		 console.log("tama")
	    $("#panel05").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel05").slideDown("slow");}
	      
  });
  
  $("#validationCustom06").blur(function(){
	 let nameVal06 = $("#validationCustom06").val();
	  //console.log(nameVal06);
         var letters06 = /^[A-Za-z]\w{7,14}$/;
			 
		 if(nameVal06.match(letters06)){
		 console.log("tama")
	    $("#panel06").slideUp("slow");
		
   }else{
	   console.log("mss tamta")
	   $("#panel06").slideDown("slow");}
	      
  });
    
  //*************************** End section form validation ***********



  
/*function searchMovies(searchTerm){
	posts =[];
	
	var cartoon = ``;
	for (var i=0; i< posts.length ;i++){
		
		 if(name.toLowerCase().includes(searchTerm.toLowerCase()) == true 
        || overview.toLowerCase().includes(searchTerm.toLowerCase()) == true || posts[i].vote_average.toLowerCase().includes(searchTerm.toLowerCase()) == true)
		{
			
			  cartoon += `<div id="myDiv"  class="col-md-4 pb-3">
        <div class="post rounded">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
		<div class=" layer   ">
	     <div class="layers">
	     <h4>${name}</h4>
		 
          <p>${overview}</p>
		  <h3>rate: ${posts[i].vote_average}</h3>
		  <p>${date}</p>
		  </div>
		  </div>
        </div>
		
      </div>`;
			
		}
		else
		{
			console.log("@@");
			
		}
	}
	
	document.getElementById('myRow').innerHTML = cartoon;
}*/
