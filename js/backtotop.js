function isHidden(){var o=document.documentElement.scrollTop||document.body.scrollTop;document.querySelector(".back-to-top").className=0<o?"back-to-top":"back-to-top hidden"}var backToTop=function(){var o=document.documentElement.scrollTop||document.body.scrollTop,e=Math.ceil(10*o/200),c=setInterval(function(){(o=document.documentElement.scrollTop||document.body.scrollTop)-e<=0?(document.documentElement.scrollTop=0,document.body.scrollTop=0,clearInterval(c)):(document.documentElement.scrollTop=o-e,document.body.scrollTop=o-e)},10)};isHidden(),document.addEventListener("scroll",isHidden,!1),document.querySelector(".back-to-top").addEventListener("click",backToTop,!1);