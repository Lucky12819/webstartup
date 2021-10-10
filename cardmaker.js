const getProducts = async () => {
	const res = await fetch("products.json");
	const data = await res.json();
	const products = data.products;
	return products;
  };
//   const products = getProducts();
// 	products.map(
// 	  ({ title,price,feature }) => cardCreater(title,price,feature));
//   let shopCenter = document.getElementById('product'); 
  window.addEventListener("DOMContentLoaded", async () => {
	const products = await getProducts();
	products.map(
	  ({ title,price,feature }) => cardCreater(title,price,feature));
  });
  function cardCreater(title,price,feature){
	  let productArea = document.getElementById('product');
	  let divWrapper = document.createElement('div');
	  let divContainer = document.createElement('div');
	  let divTop = document.createElement('div');
	  let divBottom = document.createElement('div');
	  let divLeft = document.createElement('div');
	  let divDetails = document.createElement('div');
	  let divBuy = document.createElement('div');
	  let divInside = document.createElement('div');
	  let divIcon = document.createElement('div');
	  let divContents = document.createElement('div');
	  let productName = document.createElement('h1');
	  let productPrice = document.createElement('p');
	  let atcbtn = document.createElement('button');
	  let buyIcon = document.createElement('i');
	  let infoIcon = document.createElement('i');
	  divWrapper.setAttribute('class','wrapper');
	  divContainer.setAttribute('class','container');
	  divTop.setAttribute('class','top');
	  divBottom.setAttribute('class','bottom');
	  divLeft.setAttribute('class','left');
	  divDetails.setAttribute('class','details');
	  divBuy.setAttribute('class','buy');
	  divInside.setAttribute('class','inside');
	  divIcon.setAttribute('class','icon');
	  divContents.setAttribute('class','contents');
	  atcbtn.setAttribute('class','addtocart');
	  buyIcon.setAttribute('class','material-icons');
	  infoIcon.setAttribute('class','material-icons');
	  productName.innerHTML = title;
	  productPrice.innerHTML = price;
	  buyIcon.innerHTML = 'add_shopping_cart';
	  infoIcon.innerHTML = 'info_outline';
	  divContents.innerHTML = feature;
	  divIcon.append(infoIcon);
	  divInside.append(divIcon,divContents);
	  divBuy.append(atcbtn,buyIcon);
	  divDetails.append(productName,productPrice);
	  divLeft.append(divDetails,divBuy);
	  divBottom.append(divLeft);
	  divContainer.append(divTop,divBottom);
	  divWrapper.append(divContainer,divInside);
	  productArea.appendChild(divWrapper);
  }
  
