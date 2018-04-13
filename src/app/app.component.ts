import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {
	trigger,
	state,
	style,
	animate,
	transition
  } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		trigger('heroState', [
			state('inactive', style({
			backgroundColor: '#eee',
			transform: 'scale(1)'
			})),
			state('active',   style({
			backgroundColor: '#cfd8dc',
			transform: 'scale(2)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})
export class AppComponent {
	title = 'app';
	uploader: FileUploader = new FileUploader({
		url: "http://www.download.com:80/uploadFile",
		method: "POST",
		itemAlias: "uploadedfile"
	});
	public imgs:Array<any> = [];
	selectedImgUrl: any[] = [];
	selectedImgLength = 0;
	heroes:Array<any> = [{
		name:'英雄1',
		state:'active'
	},{
		name:'英雄2',
		state:'inactive'
	},{
		name:'英雄3',
		state:'inactive'
	}];
	toggleState(index){
		for(var i in this.heroes){
			this.heroes[i].state = 'inactive';
		}
		this.heroes[index].state = 'active';
	}
	ngOnInit(){
		var that = this;
		this.uploader.onAfterAddingFile = function(e){
			console.log('onAfterAddingFile',e);
			var fileReader = new FileReader()
			fileReader.onload = function(es) {
				
				that.imgs.push(Object.assign(es.target,{
					'name': e.some.name
				}));
				console.log('imgs',that);
			};
			fileReader.readAsDataURL(e.some);
		}
		this.uploader.onBuildItemForm = function(form){
			console.log('form',form);
		} 
	}
	selectedFileOnChanged(e){
		// console.log(e);
		// var that = this;
		// var fileReader = new FileReader()
		// fileReader.onload = function(es) {
		// 	that.imgs.push({
		// 		src: es.target
		// 	})
		// 	console.log('imgs',that.imgs,es);
		// };
		// fileReader.readAsDataURL(e.target.files[0]);
	};
	
	// 	var fileReader = new FileReader(),
	// 	blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
	// 	file = _file || dom.files[0],
	// 	chunkSize = 2097152,
	// 	// read in chunks of 2MB
	// 	chunks = Math.ceil(file.size / chunkSize),
	// 	currentChunk = 0,
	// 	spark = new SparkMD5();

	// fileReader.onload = function(e){
	// 	spark.appendBinary(e.target.result); // append binary string
	// 	currentChunk++;
	// 	if (currentChunk < chunks) {
	// 		loadNext();
	// 	}else {
	// 		//box.innerText='MD5 hash:'+spark.end();
	// 		var md5 = spark.end();
	// 		$scope.$apply(function () {
	// 			if($scope.picMd5Arr.length >= 9){
	// 				return;
	// 			};
	// 			var fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1),
	// 				name = md5 + '.' + fileExtension ,
	// 				index = _.findKey($scope.picMd5Arr,{md5: name});
	// 			if(index || index == '0'){
	// 				$scope.uploadPromptText = $scope.uploadPromptText + (file.name + '<br>');
	// 				(_index)++ === dom.files.length - 1 ? loopEndCallback(dom) : console.log('end1');
	// 			}else{
	// 				$scope.picMd5Arr.push({
	// 					md5: name,
	// 					file: _file
	// 				});
	// 				$scope.getPicUrl(dom, _file, $scope.picMd5Arr.length -1);
	// 			};
	// 			// $scope.file ={
	// 			//     MD5:md5,
	// 			//     //Src:e.target.result,
	// 			//     Name:dom.files[0].name,
	// 			//     Count: $scope.paginationConf.totalItems
	// 			// };
	// 		});
	// 	}
	// };
	// $scope.getPicUrl =function (dom,_file,index) {
	// 	index = index > 0 ? index : 0;
	// 	if($scope.picMd5Arr.length ==0 ){
	// 		return;
	// 	};
	// 	var fileReader = new FileReader(),
	// 		file = _file || dom.files[0];
	// 	fileReader.onload = function(e) {
	// 		$scope.$apply(function () {
	// 			$scope.picMd5Arr[index].src = e.target.result;
	// 		});
	// 		(_index)++ === dom.files.length - 1 ? loopEndCallback(dom) : {};
	// 	};
	// 	fileReader.readAsDataURL(file);
	// }

	fileOverBase(event) {
		// 拖拽状态改变的回调函数
		console.log('fileOverBase',event);
	}
	fileDropOver(event) {
		// 文件拖拽完成的回调函数
		console.log('fileDropOver',event);
	}
}
