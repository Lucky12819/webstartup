// $('.buy').click(function(){
//     $('.bottom').addClass("clicked");
//   });
  
//   $('.remove').click(function(){
//     $('.bottom').removeClass("clicked");
//   });

// const getProducts = async () => {
// 	const res = await fetch("products.json");
// 	const data = await res.json();
// 	const products = data.products;
// 	return products;
//   };
//   const products = getProducts();
// 	products.map(
// 	  ({ title,price,feature }) => cardCreater(title,price,feature));
// //   let shopCenter = document.getElementById('product'); 
// //   window.addEventListener("DOMContentLoaded", async () => {
// // 	const products = await getProducts();
// // 	products.map(
// // 	  ({ title,price,feature }) => cardCreater(title,price,feature));
// //   });
//   function cardCreater(title,price,feature){
// 	  let productArea = document.getElementById('product');
// 	  let divWrapper = document.createElement('div');
// 	  let divContainer = document.createElement('div');
// 	  let divTop = document.createElement('div');
// 	  let divBottom = document.createElement('div');
// 	  let divLeft = document.createElement('div');
// 	  let divDetails = document.createElement('div');
// 	  let divBuy = document.createElement('div');
// 	  let divInside = document.createElement('div');
// 	  let divIcon = document.createElement('div');
// 	  let divContents = document.createElement('div');
// 	  let productName = document.createElement('h1');
// 	  let productPrice = document.createElement('p');
// 	  let atcbtn = document.createElement('button');
// 	  let buyIcon = document.createElement('i');
// 	  let infoIcon = document.createElement('i');
// 	  divWrapper.setAttribute('class','wrapper');
// 	  divContainer.setAttribute('class','container');
// 	  divTop.setAttribute('class','top');
// 	  divBottom.setAttribute('class','bottom');
// 	  divLeft.setAttribute('class','left');
// 	  divDetails.setAttribute('class','details');
// 	  divBuy.setAttribute('class','buy');
// 	  divInside.setAttribute('class','inside');
// 	  divIcon.setAttribute('class','icon');
// 	  divContents.setAttribute('class','contents');
// 	  atcbtn.setAttribute('class','addtocart');
// 	  buyIcon.setAttribute('class','material-icons');
// 	  infoIcon.setAttribute('class','material-icons');
// 	  productName.innerHTML = title;
// 	  productPrice.innerHTML = price;
// 	  buyIcon.innerHTML = 'add_shopping_cart';
// 	  infoIcon.innerHTML = 'info_outline';
// 	  divContents.innerHTML = feature;
// 	  divIcon.append(infoIcon);
// 	  divInside.append(divIcon,divContents);
// 	  divBuy.append(atcbtn,buyIcon);
// 	  divDetails.append(productName,productPrice);
// 	  divLeft.append(divDetails,divBuy);
// 	  divBottom.append(divLeft);
// 	  divContainer.append(divTop,divBottom);
// 	  divWrapper.append(divContainer,divInside);
// 	  productArea.appendChild(divWrapper);
//   }
  


  const attToCartBtn = document.getElementsByClassName('addtocart');
	console.log(attToCartBtn.length);
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			// console.log(e.target.parentElement.parentElement.parentElement.children[0].children[0].textContent);
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						
						name:e.target.parentElement.parentElement.parentElement.children[0].children[0].textContent,
						price:e.target.parentElement.parentElement.parentElement.children[0].children[1].textContent,
						no:1
					};
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
//   if(typeof(Storage)!== 'undefined'){
//   let details = item.getElementsByClassName('details')[0];
//   let data = {
//     name : details.getElementsByTagName('h1')[0].textContent,
//     price : details.getElementsByTagName('p')[0].textContent
//   };
//   localStorage.setItem("items",JSON.stringify(data));
// }else{
//   alert('local storage is not working');}

// flag = false; 
// function addtocart(item){
//   let asc = item.getElementsByClassName('asc')[0];
// let rsc = item.getElementsByClassName('rsc')[0];

//   if(flag==false){
//     flag = true;
   
//     rsc.style.display = 'block';
//     asc.style.display = 'none';
//     addLocalStorage(item);
//   }  
//   else{
//     flag = false;
//     asc.style.display = 'block';
//     rsc.style.display = 'none';
//   }
// }

// JSON.parse(localStorage.getItem('items')).map(data=>{
// 	console.log(data.);
// });
