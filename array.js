function Makingarray(){
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false,
      });
this.length=arguments.length;
for(let i=0;i<arguments.length;i++)
{
    this[i]=arguments[i]
}
}
var arr1=new Makingarray(1,2,3,4,5);

Makingarray.prototype.pus=function(value){
    this[this.length]=value;
    this.length++
}
Makingarray.prototype.pop=function(){
    delete this[this.length-1]
    this.length--;
}
Makingarray.prototype.print=function(){
    console.log(this)
}
Makingarray.prototype.top=function(){
    console.log(this[this.length-1])
}

arr1.pus(6);
arr1.pop()
arr1.print();
arr1.top();
