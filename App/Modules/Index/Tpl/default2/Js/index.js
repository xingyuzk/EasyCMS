$(document).ready(function(){jQuery(".h_l").slide({mainCell:"ul.h_tu",autoPlay:true,titCell:"ul.h_c li",titOnClassName:"h_s",delayTime:250});jQuery(".i_r").slide({mainCell:"ul",effect:"leftLoop",autoPlay:true,prevCell:".ml",nextCell:".mr",vis:7,scroll:7,interTime:5000});jQuery(".g_s").slide({mainCell:".g_b",titCell:".g_a li",titOnClassName:"g_bs"});jQuery("#m").slide({mainCell:".m_r_b",titCell:".m_l li",titOnClassName:"online",trigger:"click"});jQuery(".h_d_p").slide({mainCell:".v_h_h ul",titCell:".v_h_d li",vis:2,scroll:2,autoPlay:true,effect:"leftLoop",interTime:5000});jQuery("a[rel='external'],a[rel='external nofollow']").click(function(){window.open(this.href);return false});$(".qb").fancybox({openSpeed:10,closeSpeed:10,afterLoad:function(){$("embed").css("display","none")},afterClose:function(){$("embed").css("display","block")}});$(".qimg").fancybox({openEffect:"elastic",closeEffect:"elastic",prevEffect:"none",nextEffect:"none",closeBtn:true,helpers:{buttons:{}},afterLoad:function(){this.title="Image "+(this.index+1)+" of "+this.group.length+(this.title?" - "+this.title:"")}});$.fn.extend({scrollFollow:function(q){q=q||{};q.container=q.container||$(this).parent();q.bottomObj=q.bottomObj||"";q.bottomMargin=q.bottomMargin||0;q.marginTop=q.marginTop||0;q.marginBottom=q.marginBottom||0;q.zindex=q.zindex||999;var p=$(window);var o=$(this);if(o.length<=0){return false}var n=o.position().top;var m=q.container.height();var k=o.css("position");if(q.bottomObj==""||$(q.bottomObj).length<=0){var a=false}else{var a=true}p.scroll(function(r){var i=o.height();if(o.css("position")==k){n=o.position().top}scrollTop=p.scrollTop();topPosition=Math.max(0,n-scrollTop);if(a==true){var s=$(q.bottomObj).position().top-q.marginBottom-q.marginTop;topPosition=Math.min(topPosition,(s-scrollTop)-i)}if(scrollTop>n){if(a==true&&(n+i>s)){o.css({position:k,top:n})}else{if(window.XMLHttpRequest){o.css({position:"fixed",top:topPosition+q.marginTop,"z-index":q.zindex})}else{o.css({position:"absolute",top:scrollTop+topPosition+q.marginTop+"px","z-index":q.zindex})}}}else{o.css({position:k,top:n})}});return this}});$(".g_g").scrollFollow({bottomObj:"#x",marginTop:15,marginBottom:300});jQuery(".article h2 a,.article_b h2 a,.g_b li a,.g_v li a,.kc h3 a,#k ul a,.qr li a,.ql li a.nt").click(function(){jQuery(this).text("页面载入中......");window.location=jQuery(this).attr("href")});jQuery("img.qqoq").hover(function(){jQuery(this).fadeTo("fast",0.5)},function(){jQuery(this).fadeTo("fast",1)});backTop=function(n){var i=document.getElementById(n);var k=document.documentElement;var a=document.body;window.onscroll=m;i.onclick=function(){i.style.display="none";window.onscroll=null;this.timer=setInterval(function(){k.scrollTop-=Math.ceil((k.scrollTop+a.scrollTop)*0.1);a.scrollTop-=Math.ceil((k.scrollTop+a.scrollTop)*0.1);if((k.scrollTop+a.scrollTop)==0){clearInterval(i.timer,window.onscroll=m)}},10)};function m(){i.style.display=(k.scrollTop+a.scrollTop>100)?"block":"none"}};backTop("gotop");$(".info").Validform({tiptype:function(m,k,i){if(!k.obj.is("form")){var a=k.obj.siblings(".Validform_checktip");i(a,k.type);a.text(m)}else{var a=k.obj.find("#msgdemo");i(a,k.type);a.text(m)}},ajaxPost:true,callback:function(a){if(a.q=="qqoq"&&a.status=="y"){window.location.href=a.url;resetForm()}}});function l(a){allValid=true;for(d=0;d<a.length;d++){if(a.charAt(d)!=" "){allValid=false;break}}return allValid}var f=!-[1]&&!window.XMLHttpRequest,b=$("body"),d=$("#tag-cloud a"),c=$("#tag textarea"),e=function(a){var k=" "+a.val()+" ",i=$.trim(k).replace(/\s{2,}/ig," ").split(" ");d.each(function(){var m=$.inArray($(this).text(),i);if(m>-1){$(this).addClass("selected")}else{$(this).removeClass("selected")}})};d.live("click",function(o){o.preventDefault();var i=$("#tag textarea").val(),a=$(this).text(),n=" ";$(this).addClass("selected");$("#tag textarea").val(i+a+n);return false});c.keyup(function(m){m.stopPropagation();var k=$.trim($(this).val()).replace(/\s{2,}/ig," "),i=k.split(","),a=i.length;e($(this))});$(document).on("click",".s-s",function(){h($(this),"sina");return false});$(document).on("click",".s-t",function(){h($(this),"qqt");return false});$(document).on("click",".s-z",function(){h($(this),"qqz");return false});function h(v,x){var C=v.attr("data-title");var n=v.attr("data-link");var q=v.attr("data-pic");var D=v.closest("#n").find("#j .n_n").text().toString().slice(0,100)+" [......\u5168\u6587\u672a\u5b8c]";var B="";switch(x){case"sina":B="\u65b0\u6d6a\u5fae\u535a";var r="\u8fd9\u7bc7\u6587\u7ae0\u300a"+C+"\u300b\u5199\u7684\u4e0d\u9519\u54e6\uff0c\u5927\u5bb6\u8fc7\u6765\u56f4\u89c2\u4e00\u4e0b\u5427\uff0c\u5730\u5740\u662f\uff1a"+n;var A="http://service.weibo.com/share/share.php?";A+="url="+encodeURIComponent(n);A+="&appkey="+sinakey;A+="&title="+r;A+="&pic="+q;A+="&ralateUid=";A+="&language=";win_s=window.open(A,"\u8f6c\u64ad\u5230\u65b0\u6d6a\u5fae\u535a","width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no");break;case"qqt":B="\u817e\u8baf\u5fae\u535a";var r="\u8fd9\u7bc7\u6587\u7ae0\u300a"+C+"\u300b\u5199\u7684\u4e0d\u9519\u54e6\uff0c\u5927\u5bb6\u8fc7\u6765\u56f4\u89c2\u4e00\u4e0b\u5427\uff0c\u5730\u5740\u662f\uff1a"+n;var m=encodeURIComponent(n);var k=qqtkey;var w=q;var y="http://www.qqoq.net";var z="http://v.t.qq.com/share/share.php?title="+r+"&url="+m+"&appkey="+k+"&site="+y+"&pic="+w;win_t=window.open(z,"\u8f6c\u64ad\u5230\u817e\u8baf\u5fae\u535a","width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no");break;case"qqz":B="QQ\u7a7a\u95f4";var r="\u8fd9\u7bc7\u6587\u7ae0\u300a"+C+"\u300b\u5199\u7684\u4e0d\u9519\u54e6\uff0c\u5927\u5bb6\u8fc7\u6765\u56f4\u89c2\u4e00\u4e0b\u5427\uff0c\u5730\u5740\u662f\uff1a"+n;var a={url:n,showcount:"1",desc:r,summary:"\u3010\u6587\u7ae0\u6458\u8981\u3011:"+D,title:""+C,site:"\u8001\u8428\u535a\u5ba2",pics:q,style:"202",otype:"share",width:105,height:31};var D=[];for(var o in a){D.push(o+"="+encodeURIComponent(a[o]||""))}url="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+D.join("&");win_q=(window.open(url,"\u8f6c\u64ad\u5230QQ\u7a7a\u95f4","width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no"));break;default:}}$("#score_good,#score_bad").click(function(){$("#score_good,#score_bad").css("display","none");$("#score").css("display","block");var a=$(this).children().clone();$("#score").prepend("<span>我的评价是：</span>");$("#score").append(a);var i=$(this).attr("data-grade");var k=$(this).attr("data-postid");$.ajax({url:location.href,type:"POST",dataType:"json",data:"action=vote&postid="+k+"&grade="+i,error:function(){$("#score_good,#score_bad").css("display","block")},success:function(m){if(m.status=="y"){$(".v_grade_l strong").text(m.grade);$(".v_grade_l p").text(m.sum);$(".pct_like .bar span").animate({width:m.pct_like});$(".pct_bad .bar span").animate({width:m.pct_bad});$(".pct_like .rate_count").text(m.pct_like);$(".pct_bad .rate_count").text(m.pct_bad)}else{$("#score_good,#score_bad").css("display","block");$("#score").css("display","none")}}})});$(".good,.bad").click(function(){var m=$(this);var i=$(".dm_1,.dm_2");var k=m.attr("data-grade");var n=m.attr("data-postid");if(n){$.ajax({url:location.href,type:"POST",dataType:"json",data:"action=vote&postid="+n+"&grade="+k,error:function(){},success:function(a){if(a.status=="y"){m.children("b").stop().css("display","block").animate({top:"-40px"},"5000",function(){$(this).css({display:"none",top:"0",opacity:"1"})});i.stop().animate({width:0},"slow",function(){$(".dm_1").animate({width:a.pct_like}).text(a.pct_like);$(".dm_2").animate({width:a.pct_bad}).text(a.pct_bad)})}else{if(a.status=="n"){$(".nvote").css("display","block").animate({top:"-40px"},function(){setTimeout(function(){$(".nvote").css({display:"none",top:"-30px"})},1000)})}}}})}else{$(".nvote").text("无投票内容").css("display","block").animate({top:"-40px"},function(){setTimeout(function(){$(".nvote").css({display:"none",top:"-30px"})},1000)})}});var g;$(".pli").hover(function(){clearInterval(g)},function(){g=setInterval(function(){var i=$(".pli ul");var a=i.find("li:last").height();i.animate({marginTop:a+"px"},1000,function(){i.find("li:last").prependTo(i);i.find("li:first").hide();i.css({marginTop:0});i.find("li:first").fadeIn(1000)})},3000)}).trigger("mouseleave");$(".qqoq-com").hover(function(){$(this).parent("li").addClass("hover")},function(){$(this).parent("li").removeClass("hover")});$(".comment-form").focus(function(){if(!$("body").hasClass("logged-in")){$("a.qb").click()}});$(document).on("click","a.sm",function(){$(this).prev(".smiley").css("display","block")});$(document).on("click",".smp a",function(){var i=$(this).parents("form");var k=$(this).children("img").attr("alt");var m=$(this).children("img").attr("src");var a='<img width="20" height="20" alt="'+k+'" src="'+m+'">';i.children(".comment-form").append(a);$(this).parents(".smiley").css("display","none")});$(document).on("submit",".qform",function(){var m=$(".ncom .qqoq-avatar img").attr("src");var i=$(".ncom .qqoq-avatar a").attr("href");var k=$(".ncom a.comment-name").text();var p=$(this);var o=p.find(".replyid").val();var n=p.find(".comment-form").html();if(!$("body").hasClass("logged-in")){$("a.qb").click()}else{if(n==""){alert("内容不能为空")}else{var a=p.serialize();$.ajax({url:location.href,type:"POST",dataType:"json",data:a+"&action=comment&con="+n,beforeSend:function(){var q=new Date();var s=q.toLocaleDateString()+" "+q.toLocaleTimeString();if(o!=0){var r=p.parents(".qqoq-comment").children(".qqoq-depth").text()}else{var r=$(".commentlist>li").length+1+" 楼"}n='<li style="display:none;" class="newcomment comment"><div class="qqoq-com"><div class="qqoq-avatar"><a href="'+i+'"><img width="40" height="40" alt="" src="'+m+'" class="avatar"></a></div><div class="qqoq-comment"><span class="qqoq-depth">'+r+'</span><a href="'+i+'" title="" target="_blank" class="comment-name">'+k+'</a><div class="comment-content">  '+n+'  </div><div class="comment-info"><span class="comment-time"> '+s+" </span></div></div></div></li>";if(o!=0){$("#comment-"+o).append("<ul class='children'>"+n+"</ul>")}else{$(".commentlist").prepend(n)}$(".newcomment").slideDown("show");p.find(".comment-submit").attr("disabled",true).css("opacity","0.5").val("正在提交...");p.find(".loadcom").css("display","block").animate({top:"0"})},error:function(){$(".newcomment").slideUp("show",function(){$(this).remove()});p.find(".loadcom").text("网络开小差了，请稍后再试。").delay(2000).animate({top:"30"},function(){$(this).css("display","none").text("努力发送中...");$(this).next(".comment-submit").removeAttr("disabled").css("opacity","1").val("提交评论")})},success:function(q){if(q.status=="y"){p.find(".comment-form").html("");if(o!=0){p.slideUp(function(){$(this).remove();$(".c-reply").css("display","none")})}p.find(".loadcom").text(q.info).delay(2000).animate({top:"30"},function(){$(this).css("display","none").text("努力发送中...");timeclose()})}else{if(q.status=="n"){$(".newcomment").slideUp("show",function(){$(this).remove()});p.find(".loadcom").text(q.info).delay(2000).animate({top:"30"},function(){$(this).css("display","none").text("努力发送中...");$(this).next(".comment-submit").removeAttr("disabled").css("opacity","1").val("提交评论")})}}}})}}return !1});$(".reply").click(function(){$(".c-reply").css("display","none");$(this).next(".c-reply").css("display","block");$(".qform:not('#respond .qform')").remove();var a=$(this).parent(".comment-info");var i=$(this).attr("data-id");a.after($(".qform").clone().css("display","none"));a.next(".qform").find(".comment-form").html("");a.next(".qform").find(".replyid").val(i);a.next(".qform").slideDown("slow")});$(".c-reply").click(function(){$(this).parent(".comment-info").next(".qform").slideUp(function(){$(this).remove()});$(this).css("display","none")});var j=waiting_time;timeclose=function(){var a=$(".comment-submit");if(j>=0){setTimeout("timeclose()",1000);if(j==0){a.removeAttr("disabled").css("opacity","1").val("提交评论")}else{a.val(j+"秒后可以再次评论")}j--}else{j=waiting_time}}});function gbcount(c,d){var a;a=140;if(c.value.length>a){c.value=c.value.substring(0,a);d.value=0}else{var b=c.value.length;d.value=a-b}};
