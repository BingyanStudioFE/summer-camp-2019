CSS
=============
css基础语法
-------------
>selector {declaration1; declaration2; ... declarationN }  
>selector {property: value}  

- color五种方法：
>p { color: #ff0000; }  
>p { color: #f00; }  
>p { color: red; }  
>p { color: rgb(255,0,0); }  
>p { color: rgb(100%,0%,0%); }   

- 多种属性值
>p
{  
  text-align: center;  
  color: black;  
  font-family: arial;  
}  

CSS高级语法
---------- 
- selector分组  

>h1,h2,h3,h4,h5,h6 {  
  color: green;  
  }  
  
- 继承问题
>body {   
     font-family: Verdana, sans-serif;  
     }  
一般来说，子元素继承父元素的属性。有些浏览器会忽略继承问题。  
 
- 派生选择器  
<li><strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong></li>  
在选择器后可以加上strong元素进行申明，会对该选择器中申明中strong元素包括的部分产生影响。  

- id选择器

      #red {color:red;}
      #green {color:green;}
      <p id="red">这个段落是红色。</p>
      <p id="green">这个段落是绿色。</p>
    
- id选择器常常建立于派生选择器

        #sidebar p {
	   text-align: right;
	  margin-top: 0.5em;
	  }

