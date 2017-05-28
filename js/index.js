		//推荐课程
		$(function(){
			var aLi = $(".tuijian-body ul li");
			var aBg = $(".tuijian-bg");
			
			for(var i=0;i<aLi.length;i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					for(var i=0; i<aLi.lenth;i++){
						aBg[i].style.display = "none";
					}
						aBg[this.index].style.display = "block";
				}
				aLi[i].onmouseout = function(){
					aBg[this.index].style.display = "none";
				}
				
			}
			
		})
		//教师介绍
		$(function(){
			$('#marquee1').kxbdSuperMarquee({
				distance:309,
				time:3,
				btnGo:{left:'#goR',right:'#goL'},
				direction:'left',
				loop:0

			});
		})
		
		$(function(){
			var aTe = $("#marquee1 ul li");
			var aBg = $(".teacher-bg");
			
			for(var i=0;i<aTe.length;i++){
				aTe[i].index = i;
				aTe[i].onmouseover = function(){
					for(var i=0;i<aBg.length;i++){
						aBg[i].style.display = "none";
					}
					aBg[this.index].style.display = "block";
				}
				aTe[i].onmouseout = function(){
					for(var i=0;i<aBg.length;i++){
						aBg[i].style.display = "none";
					}
					
				}
			}
			
		})
		//优秀学员
		$(function(){
			var ali = $(".stu-top-right li a");
			var acont = $(".stu-body");
			
			for(var i=0;i<ali.length-1; i++){
				ali[i].index = i;
				ali[i].onmouseover = function(){
					for(var i=0;i<acont.length;i++){
						acont[i].style.display = "none";
						ali[i].className = "";
					}
					ali[this.index].className = "teacher-li-bg";
					acont[this.index].style.display = "block";
				}
			}
		})
		//校园环境
		$(function(){
			var ali = $(".huanjing-body-right li");
			var abg = $(".huanjing-body-right div");
			
			for(var i=0;i<ali.length;i++){
				ali[i].index = i;
				ali[i].onmouseover = function(){
					for(var i=0;i<abg.length;i++){
						abg[i].style.display = "none";
					}
					abg[this.index].style.display = "block";	
				}
				ali[i].onmouseout = function(){
					for(var i=0;i<abg.length;i++){
						abg[i].style.display = "none";
					}
				}
			}
		})
		//自编教材
		$(function(){
			var ali = $(".book-body li");
			var abg = $(".book-body div");
			
			for(var i=0;i<ali.length;i++){
				ali[i].index = i;
				ali[i].onmouseover = function(){
					for(var i=0;i<abg.length;i++){
						abg[i].style.display = "none";
					}
					abg[this.index].style.display = "block";
				}
				ali[i].onmouseout = function(){
					for(var i=0;i<abg.length;i++){
						abg[i].style.display = "none";
					}
				}
			}
		})
			//轮播图
			$("#container").PageSwitch({
				direction:'horizontal',
				easing:'ease-in',
				duration:1000,
				autoPlay:false,
				loop:'true'
			});
			//菜单栏
			$("#nav-list dl").hover(
				function(){
					$(this).addClass('hover');
				},
				function(){
					$(this).removeClass('hover');
				}
			)
			
			$("#nav-list dl:eq(0)").hover(
				function(){
					$("#nav-1").show();
				},			
				function(){
					$("#nav-1").hide();
               	}
			)
			
			$("#nav-list dl:eq(1)").hover(
				function(){
					$("#nav-2").show();
				},			
				function(){
					$("#nav-2").hide();
               	}
			)
			
			$("#nav-list dl:eq(2)").hover(
				function(){
					$("#nav-3").show();
				},			
				function(){
					$("#nav-3").hide();
               	}
			)
			
			$("#nav-list dl:eq(3)").hover(
				function(){
					$("#nav-4").show();
				},			
				function(){
					$("#nav-4").hide();
               	}
			)
			
			$("#nav-list dl:eq(4)").hover(
				function(){
					$("#nav-5").show();
				},			
				function(){
					$("#nav-5").hide();
               	}
			)
			
			$("#nav-list dl:eq(5)").hover(
				function(){
					$("#nav-6").show();
				},			
				function(){
					$("#nav-6").hide();
               	}
			)
			
			$("#nav-list dl:eq(6)").hover(
				function(){
					$("#nav-7").show();
				},			
				function(){
					$("#nav-7").hide();
               	}
			)
	//课程计划
	$(function(){
		var ali = $(".class-body li");
		var atab = $(".class-body table");
		for(i=0; i<ali.length;i++){
			ali[i].index = i;
			ali[i].onmouseover = function(){
				for(i=0;i<ali.length;i++){
					ali[i].className = "";
					atab[i].style.display = "none";
				}
				this.className = "backGround";
				atab[this.index].style.display = "block";
				
			};
		}		
	});
	//发布信息栏
	$(function(){
		var aSpan = $(".right-top-left span");
		var aUl= $(".class-right-body ul");
		for(i=0; i<aSpan.length;i++){
			aSpan[i].index = i;
			aSpan[i].onmouseover = function(){
				for(i=0;i<aUl.length;i++){
					aSpan[i].className = "";
					aUl[i].style.display = "none";
				}
				this.className = "color"; 
				aUl[this.index].style.display = "block";
				
			};
		}		
	});
	//校园环境切换
	$(function(){
		var ali = $(".huanjing-top-right li a");
		var abd = $(".huanjing-body");
		
		for(var i=0;i<ali.length-1;i++){
				ali[i].index = i;
				ali[i].onmouseover = function(){
					for(var i=0;i<abd.length;i++){
						abd[i].style.display = "none";
						ali[i].className = "";
					}
					ali[this.index].className = "teacher-li-bg";
					abd[this.index].style.display = "block";
				}
		}
	})
	//资料切换
	$(function(){
		var ali = $(".ziliao-right-top li");
		var acont = $(".ziliao-right-body");
		
		for(var i=0;i<ali.length;i++){
				ali[i].index = i;
				ali[i].onmouseover = function(){
					for(var i=0;i<acont.length;i++){
						acont[i].style.display = "none";
						ali[i].className = "";
					}
					ali[this.index].className = "on";
					acont[this.index].style.display = "block";
				}
		}
	})
