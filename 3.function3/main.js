function alphabetSort(message){
  // wirte your code here
  var min=0;
  var arr=message.split('');
  for(let n=0;n<arr.length;n++){
	min=n;
	for(let i=n;i<arr.length;i++){
		if(arr[i].charCodeAt(0)<arr[min].charCodeAt(0)){
			min=i;
		}
	}
	let tmp=arr[min];
	arr[min]=arr[n];
	arr[n]=tmp;
  }
  return arr.join('');
}
alphabetSort('hello'); // should return 'ehllo'