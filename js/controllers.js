var mp4Controllers=angular.module("mp4Controllers",[]);mp4Controllers.controller("WayfairMatchAppController",["$scope","$http","CommonData",function($scope,$http){function contentChange(event_to_send){$scope.count--,console.log($scope.count),$scope.resp.push(event_to_send),$scope.count<0&&($scope.count=9,$http.get("data/data.json").then(function(response){console.log("bedore get:"+$scope.products),$scope.products=$scope.products.concat(response.data),console.log("after get:"+$scope.products)}))}$scope.count=9;var swipe_flag=!1;$scope.resp=[],$http.get("data/data.json").then(function(response){$scope.products=response.data,console.log($scope.products)}),$scope.options={throwOutConfidence:function(offset,element){return $(window).width()<=739?Math.min(Math.abs(offset)/element.offsetWidth*1.6,1):Math.min(Math.abs(offset)/element.offsetWidth/1.4,1)},isThrowOut:function(offset,element,throwOutConfidence){return contentChange(),swipe_flag=!0,1===throwOutConfidence}},$scope.remove_top=function(){console.log($(".product_cards li:last-child").attr("class"));var top_index=$(".product_cards li:last-child").attr("class");top_index=top_index.substr(4),$scope.remove(top_index)},$scope.remove=function(index){$scope.products.splice(index,1),$(".pane"+index).css({opacity:0,WebkitTransition:"opacity 1s ease-in-out",MozTransition:"opacity 1s ease-in-out",MsTransition:"opacity 1s ease-in-out",OTransition:"opacity 1s ease-in-out",transition:"opacity 1s ease-in-out"})},$(".buttons .like").click(function(e){e.preventDefault(),contentChange("like")}),$(".buttons .dislike").click(function(e){e.preventDefault(),contentChange("dislike")})}]);