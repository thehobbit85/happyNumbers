module.exports=function h(n,c){for(var t=n,s=0;t;t=0|t/10)s+=Math.pow(t%10,2)
return s==1||!~(c=c||[]).indexOf(n)&&h(s,c.concat(n))}
