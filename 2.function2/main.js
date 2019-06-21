function palindrome(message){
  // wirte your code here
  var left=0;
  var right=message.length-1;
  var res=false;
  while(left<=right){
	  if(message.charAt(left)==message.charAt(right)){
		  left++;
		  right--;
	  }else{
		  break;
	  }
  }
  if(left>=right){
	  res=true;
  }
  return res;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true