var mp4Controllers=angular.module("mp4Controllers",[]);mp4Controllers.controller("WayfairMatchAppController",["$scope","$http","CommonData",function($scope,$http){function sendLikeDislikeEvent(event_to_send){$scope.$broadcast("timer-reset"),$scope.$broadcast("timer-start"),$scope.resp.push(event_to_send)}$scope.count_down=119;var swipe_flag=!1;$scope.resp=[],$http.get("data/data.json").then(function(response){$scope.products=response.data,console.log($scope.products)}),$scope.options={throwOutConfidence:function(offset,element){return 0>offset&&($("."+element.className).children(".status_like").css("opacity","1"),setTimeout(function(){$("."+element.className).children(".status_like").css("opacity","0")},1e3)),offset>0&&($("."+element.className).children(".status_nope").css("opacity","1"),setTimeout(function(){$("."+element.className).children(".status_nope").css("opacity","0")},1e3)),$(window).width()<=739?Math.min(Math.abs(offset)/element.offsetWidth*2,1):Math.min(Math.abs(offset)/element.offsetWidth/1.4,1)},isThrowOut:function(offset,element,throwOutConfidence){return swipe_flag=!0,1===throwOutConfidence&&($scope.swipe_remove(),sendLikeDislikeEvent(offset>0?"like":"dislike")),1===throwOutConfidence}},$scope.swipe_remove=function(){$scope.remove_top(),$(".product_cards li:last-child").fadeOut(300,function(){$(".product_cards li:last-child").remove()}),1==$(".product_cards ul li").length&&$http.get("data/data.json").then(function(response){console.log("bedore get:"+$scope.products),$scope.products=$scope.products.concat(response.data),console.log("after get:"+$scope.products)})},$scope.remove_top=function(){var top_index=$(".product_cards li:last-child").attr("class");top_index=top_index.substr(4),$scope.products.splice(top_index,1)},$scope.click_remove=function(){$scope.remove_top(),1==$(".product_cards ul li").length&&$http.get("data/data.json").then(function(response){console.log("bedore get:"+$scope.products),$scope.products=$scope.products.concat(response.data),console.log("after get:"+$scope.products)})},$(".buttons .like").click(function(e){e.preventDefault(),sendLikeDislikeEvent("like")}),$(".buttons .dislike").click(function(e){e.preventDefault(),sendLikeDislikeEvent("dislike")}),$(document.body).on("touchmove",function(event){event.preventDefault(),event.stopPropagation()})}]);