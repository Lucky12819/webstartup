var form= document.getElementById('form');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');
var counter = 0;
add_more_fields.onclick = function(){
	counter ++;
    var newDiv1 = document.createElement('div');
	var newDiv2 = document.createElement('div');
	var newDiv3 = document.createElement('div');
	var newDiv4 = document.createElement('div');
	var newSpan1 = document.createElement('span');
	var newSpan2 = document.createElement('span');
	var newSpan3 = document.createElement('span');
	var newSpan4 = document.createElement('span');
	var newField1 = document.createElement('input');
	var newField2 = document.createElement('input');
	var newField3 = document.createElement('input');
	var newField4 = document.createElement('input');
	newDiv1.setAttribute('class','input-box');
	newDiv2.setAttribute('class','input-box');
	newDiv3.setAttribute('class','input-box');4
	newDiv4.setAttribute('class','input-box');
	newSpan1.setAttribute('class','details');
	newSpan2.setAttribute('class','details');
	newSpan3.setAttribute('class','details');
	newSpan4.setAttribute('class','details');
	newSpan1.innerHTML = 'Product Name';
	newSpan2.innerHTML = 'Product Price';
	newSpan3.innerHTML = 'Product Image';
    newSpan4.innerHTML = 'Product Details';
    let pname = 'pname'+counter;
	let pprice = 'pprice'+counter;
	let pimage = 'pimage'+counter;
	let pfeature = 'pfeature' +counter;
    newField1.setAttribute('type','text');
	newField1.setAttribute('class','user-details');
	newField1.setAttribute('placeholder','Enter Your Product Name');
	newField1.setAttribute('name',pname);
	newDiv1.append(newSpan1, newField1);
	newField2.setAttribute('type','number');
	newField2.setAttribute('class','user-details');
	newField2.setAttribute('placeholder','Enter Your Product Price');
	newField2.setAttribute('name',pprice);
	newDiv2.append(newSpan2, newField2);
	newField3.setAttribute('type','file');
	newField3.setAttribute('class','user-details');
	newField3.setAttribute('placeholder','Add Your Product Picture');
	newField3.setAttribute('name',pimage);
	newDiv3.append(newSpan3, newField3);
	newField4.setAttribute('type','text');
	newField4.setAttribute('class','user-details');
	newField4.setAttribute('placeholder','Enter Your Product Name');
	newField4.setAttribute('name',pfeature);
	newDiv4.append(newSpan4, newField4);
	form.appendChild(newDiv1);
	form.appendChild(newDiv2);
	form.appendChild(newDiv3);
	form.appendChild(newDiv4);
}

remove_fields.onclick = function(){
	if(counter>0){
	counter--;
	var input_tags = form.getElementsByClassName('input-box');
    console.log(input_tags);
	for(i=0;i<4;i++){
		form.removeChild(input_tags[(input_tags.length) - 2]);
	}
}}