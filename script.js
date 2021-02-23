
//GET BOOK


async function getBook(flag) {
   
  



   let res;
   if (flag === undefined) {
       res = await fetch('https://www.anapioficeandfire.com/api/books');

      currentPage = 1;
      functionName="getBook";


   }
   else {
      $(".card ").remove();
      $(".paginationBar").remove();
      $("h2").remove();

      res = await fetch('https://www.anapioficeandfire.com/api/books?page=' + flag);
   }




   let response = await res.json();

   if(response.length===0){
      var apologize=document.createElement('h2');
      apologize.setAttribute('class','p-5')
      apologize.innerHTML="Oops!!No Page Found.";
      document.body.append(apologize)
   }
   console.log(response);






   let row = document.createElement('div');
   row.setAttribute('class', 'row justify-content-around')
   document.body.append(row);


   for (i = 0; i < response.length; i++) {
      //col
      let col = document.createElement('div')
      col.setAttribute('class', 'col-lg-4 ');
      row.append(col)


      //CARD

      let card = document.createElement('div');
      card.setAttribute('class', 'card m-3');
      col.append(card);

      //LIST


      let ul = document.createElement('ul');
      ul.setAttribute('class', 'list-group list-group-flush')
      card.append(ul)

      //header

      let header = document.createElement('div');
      header.setAttribute('class', 'list-group-item');
      header.style.backgroundColor = "#e6e6e6";
      header.style.color = "black"
      header.innerHTML = "<h5>" + response[i].name + "</h5>";
      ul.append(header);

      //Author

      let author = document.createElement('li');
      author.setAttribute('class', 'list-group-item');
      author.innerHTML = 'Author : ' + response[i].authors;
      ul.append(author)

      //Publisher

      let publisher = document.createElement('li');
      publisher.setAttribute('class', 'list-group-item');
      publisher.innerHTML = 'Publisher : ' + response[i].publisher;
      ul.append(publisher)

      //COUNTRY


      let country = document.createElement('li');
      country.setAttribute('class', 'list-group-item');
      country.innerHTML = 'Country : ' + response[i].country;
      ul.append(country)


      //RELEASED


      let released = document.createElement('li');
      released.setAttribute('class', 'list-group-item');
      released.innerHTML = 'Released : ' + response[i].released.slice(0, 10);
      ul.append(released)

      //MEDIATYPE


      let mediaType = document.createElement('li');
      mediaType.setAttribute('class', 'list-group-item');
      mediaType.innerHTML = 'Media Type : ' + response[i].mediaType;
      ul.append(mediaType)




      //NUMBER ODF PAGES


      let numberOfPages = document.createElement('li');
      numberOfPages.setAttribute('class', 'list-group-item');
      numberOfPages.innerHTML = 'Number Of Pages : ' + response[i].numberOfPages;
      ul.append(numberOfPages)

   }
navigation("bookBar")
}



//GET CHARACTER


async function getCharacter(flag) {
   let res;
   if (flag === undefined) {
       res = await fetch('https://www.anapioficeandfire.com/api/characters');

      currentPage = 1;
      functionName="getCharacter";


   }
   else {
      $(".card ").remove();
      $(".paginationBar").remove();
      $("h2").remove();
      res = await fetch('https://www.anapioficeandfire.com/api/characters?page=' + flag);
   }

   if(response.length===0){
      var apologize=document.createElement('h2');
      apologize.setAttribute('class','p-5')
      apologize.innerHTML="Oops!!No Page Found.";
      document.body.append(apologize)
   }

   let response = await res.json();
   console.log(response);


   let row = document.createElement('div');
   row.setAttribute('class', 'row justify-content-around ')
   document.body.append(row);

   for (i = 0; i < response.length; i++) {
      //col
      let col = document.createElement('div')
      col.setAttribute('class', 'col-lg-4 ');
      row.append(col)


      //CARD

      let card = document.createElement('div');
      card.setAttribute('class', 'card m-3');
      col.append(card);

      //LIST


      let ul = document.createElement('ul');
      ul.setAttribute('class', 'list-group list-group-flush')
      card.append(ul)

      //ALIASES

      let header = document.createElement('div');
      header.setAttribute('class', 'list-group-item');
      header.style.backgroundColor = "#e6e6e6";
      header.style.color = "black"
      header.innerHTML = "<h5>" + response[i].aliases + "</h5>";
      ul.append(header);

      //GENDER

      let gender = document.createElement('li');
      gender.setAttribute('class', 'list-group-item');
      gender.innerHTML = 'Gender : ' + response[i].gender;
      ul.append(gender)

      //BOOKS

      let book = document.createElement('div');
      book.setAttribute('class', 'list-group-item');
      ul.append(book)
      getName(response[i].books);

      async function getName(url) {

         book.innerHTML = "BOOKS : ";
         for (j = 0; j < url.length; j++) {

            let getReq = await fetch(url[j])
            let res = await getReq.json();
            if (url.length === 1) {
               book.innerHTML = book.innerHTML + res.name;
            }
            else if (url.length > 1) {
               if (j === url.length) {
                  book.innerHTML = book.innerHTML + res.name;

               }
               else {
                  book.innerHTML = book.innerHTML + res.name + ',';

               }

            }

         }


      }






   }

  navigation("characterBar")

}

//GET HOUSE

var functionName;


async function getHouse(flag) {



   if (flag === undefined) {
      url = 'https://www.anapioficeandfire.com/api/houses';

      currentPage = 1;
      functionName="getHouse";


   }
   else {
      $(".card ").remove();
      $(".paginationBar").remove();
      $("h2").remove();
      url = 'https://www.anapioficeandfire.com/api/houses?page=' + flag;
   }

   let res = await fetch(url)
   let response = await res.json();

   if(response.length===0){
      var apologize=document.createElement('h2');
      apologize.setAttribute('class','p-5')
      apologize.innerHTML="Oops!!No Page Found.";
      document.body.append(apologize)
   }
   console.log(response);


   let row = document.createElement('div');
   row.setAttribute('class', 'row justify-content-around')
   document.body.append(row);


   for (i = 0; i < response.length; i++) {
      //col
      let col = document.createElement('div')
      col.setAttribute('class', 'col-lg-4 ');
      row.append(col)


      //CARD

      let card = document.createElement('div');
      card.setAttribute('class', 'card m-3');
      col.append(card);

      //LIST


      let ul = document.createElement('ul');
      ul.setAttribute('class', 'list-group list-group-flush')
      card.append(ul)

      //header

      let header = document.createElement('div');
      header.setAttribute('class', 'list-group-item');
      header.style.backgroundColor = "#e6e6e6";
      header.style.color = "black"
      header.innerHTML = "<h5>" + response[i].name + "</h5>";
      ul.append(header);

      //REGION

      let region = document.createElement('li');
      region.setAttribute('class', 'list-group-item');
      if (response[i].region.length === 0) {
         region.innerHTML = 'Region : Not Available';

      }
      else {
         region.innerHTML = 'Region : ' + response[i].region;

      }
      ul.append(region)

      //COATSOFARMS

      let coatOfArms = document.createElement('li');
      coatOfArms.setAttribute('class', 'list-group-item coatOfArms');


      if (response[i].coatOfArms.length === 0) {
         coatOfArms.innerHTML = 'Coat Of Arms : Not Available';


      }
      else {
         coatOfArms.innerHTML = 'Coat Of Arms : ' + response[i].coatOfArms;

      }



      ul.append(coatOfArms)

      //words


      let words = document.createElement('li');
      words.setAttribute('class', 'list-group-item');

      if (response[i].words.length === 0) {
         words.innerHTML = 'Words : Not Available ';

      }
      else {
         words.innerHTML = 'Words : ' + response[i].words;

      }

      ul.append(words)


      //overlord


      let overlord = document.createElement('li');
      overlord.setAttribute('class', 'list-group-item');
      overlord.innerHTML = 'Over Lord : ';
      getOverLord(response[i].overlord);

      async function getOverLord(url) {

         try {
            let res1 = await fetch(url)
            let res2 = await res1.json();
            overlord.innerHTML = overlord.innerHTML + res2.name;

         }
         catch {
            overlord.innerHTML = overlord.innerHTML + "Not Available";

         }



      }
      ul.append(overlord)

   }
   navigation("houseBar");

}
var currentPage;

function navigation(pageReq) {

   let nav = document.createElement('nav');
   nav.setAttribute('class', 'mt-5 paginationBar')
   document.body.append(nav);

   let navUl = document.createElement('ul');
   navUl.setAttribute('class', 'pagination pagination-lg justify-content-center');
   nav.append(navUl);

   //list

   //PREVIOUS

   let previous = document.createElement('li');
   previous.setAttribute('class', 'page-item');
   navUl.append(previous);

   //PREVIOUS ANCHOR

   let previousA = document.createElement('a');
   previousA.setAttribute('class', 'page-link');
   previousA.innerHTML = 'Previous';
   previousA.addEventListener('click', function (e) {

      e.preventDefault();

      if (currentPage !== 1) { currentPage-- }

      if(pageReq==="houseBar"){
      getHouse(currentPage);
       
      }
      else if(pageReq==="characterBar"){
         getCharacter(currentPage);

      }
      else{
           getBook(currentPage)
      }
   })

   previous.append(previousA);






   //NUM 1

   let p1 = document.createElement('li');
   p1.setAttribute('class', 'page-item');
   navUl.append(p1);

   // num anchor

   let p11 = document.createElement('a');
   p11.setAttribute('class', 'page-link');
   p11.setAttribute('onclick', `${functionName}(1);event.preventDefault();currentPage=1`);
   p11.innerHTML = '1';
   p1.append(p11);

   //NUM 2

   let p2 = document.createElement('li');
   p2.setAttribute('class', 'page-item');
   navUl.append(p2);

   // num anchor

   let p22 = document.createElement('a');
   p22.setAttribute('class', 'page-link');
   p22.setAttribute('onclick', `${functionName}(2);event.preventDefault();currentPage=2`);
   p22.innerHTML = '2';
   p2.append(p22);


   //NUM 3

   let p3 = document.createElement('li');
   p3.setAttribute('class', 'page-item');
   navUl.append(p3);

   // num anchor

   let p33 = document.createElement('a');
   p33.setAttribute('class', 'page-link');
   p33.setAttribute('onclick', `${functionName}(3);event.preventDefault();currentPage=3;`);
   p33.innerHTML = '3';
   p3.append(p33);


   //NUM 4

   let p4 = document.createElement('li');
   p4.setAttribute('class', 'page-item');
   navUl.append(p4);

   // num anchor

   let p44 = document.createElement('a');
   p44.setAttribute('class', 'page-link');
   p44.setAttribute('onclick', `${functionName}(4);event.preventDefault();currentPage=4`);
   p44.innerHTML = '4';
   p4.append(p44);


   //NUM 5

   let p5 = document.createElement('li');
   p5.setAttribute('class', 'page-item');
   navUl.append(p5);

   // num anchor

   let p55 = document.createElement('a');
   p55.setAttribute('class', 'page-link');
   p55.setAttribute('onclick', `${functionName}(5);event.preventDefault();currentPage=5`);
   p55.innerHTML = '5';
   p5.append(p55);


   //NEXT

   let next = document.createElement('li');
   next.setAttribute('class', 'page-item');
   navUl.append(next);

   //NEXT ANCHOR

   let nextA = document.createElement('a');
   nextA.setAttribute('class', 'page-link');


   nextA.addEventListener('click', function (e) {

      e.preventDefault();

      if (currentPage !== 5) { currentPage++ }

    if(pageReq==='bookBar'){
      getBook(currentPage);
       
    }
    else if(pageReq==='houseBar'){
       getHouse(currentPage)
    }
    else{
       getCharacter(currentPage)
    }
      
      
     
   })
   nextA.innerHTML = 'Next';
   next.append(nextA);

}

