var mp4Controllers=angular.module("mp4Controllers",[]);mp4Controllers.controller("WayfairMatchAppController",["$scope","$http","CommonData",function($scope,$http){$scope.count=0,$http.get("data/data.json").then(function(response){$scope.products=response.data,console.log($scope.products),$scope.percentage=$scope.products[$scope.count].percent_off,$scope.down_count="2:00",$scope.product_image=$scope.products[$scope.count].img,$scope.product_name=$scope.products[$scope.count].name,$scope.product_manufacturer=$scope.products[$scope.count].manufacturer,$scope.product_price_after_discount=$scope.products[$scope.count].after_price,$scope.product_price_before_discount=$scope.products[$scope.count].before_price}),$scope.options={throwOutConfidence:function(offset,element){return console.log("throwOutConfidence",offset,element.offsetWidth),Math.min(Math.abs(offset)/element.offsetWidth*1.3,1)},isThrowOut:function(offset,element,throwOutConfidence){return console.log("isThrowOut",offset,element.offsetWidth,throwOutConfidence),1===throwOutConfidence}},$scope.remove=function(index){console.log(index),$scope.products.splice(index,1),$(".pane"+index).remove(),console.log($scope.products)},$scope.add=function(name){$scope.products.push({name:name})}}]);