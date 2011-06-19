(function(){
	
	function addStyles(sheet)
	{
		var stylesheet = document.createElement('style');
		
		for (var selector in sheet)
		{
			var rules = sheet[selector];
			stylesheet.textContent += selector +' {\n';
			for (var property in rules)
			{
				stylesheet.textContent += '\t'+property+': '+rules[property]+';\n';
			}
			stylesheet.textContent += '}\n';
		}
		
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}
	
	var depthData = {"asks":[[19.53,15],[19.61,8.467],[19.62,70],[19.66,7.79],[19.7,68],[19.7458,1.77],[19.75,0.25],[19.78,11.82],[19.8,33.729],[19.83,1.14],[19.86,15],[19.876,0.21],[19.8882,0.5],[19.889,53.03],[19.898,41],[19.9,25.46],[19.91,10],[19.94,7],[19.98,9.94],[19.9876,0.33],[19.989,39.06],[19.99,24.27],[19.999,1.59],[19.9991,10],[20,323.99],[20.059,35],[20.0609,0.128],[20.0717,0.166],[20.1,20.05],[20.19,6.11],[20.2,3.35],[20.25,10],[20.274,0.207],[20.3,27.94],[20.35,0.3],[20.4,1.5],[20.41,1.35],[20.45,0.1],[20.48,2],[20.49,2.47],[20.5,36.72],[20.513,37.8],[20.5233,24.86],[20.544,0.11],[20.5944,1],[20.6432,2.795],[20.67,1],[20.68,0.2],[20.7,0.22],[20.75,2.007],[20.763,6.76],[20.8,146.97],[20.8331,1.53],[20.8592,1.53],[20.88,9],[20.8853,1.53],[20.89,9.94],[20.9,33.67],[20.906,10],[20.91,3],[20.921,20.076],[20.9221,0.166],[20.95,2],[20.9633,1.489],[20.97,45],[20.971,78.1],[20.9899,100],[20.99,58.05],[20.9937,1.53],[20.9983,0.3],[20.9998,5],[20.9999,15.85],[21,772.07],[21.0009,1],[21.02,1.53],[21.0463,1.53],[21.05,4],[21.053,18.1],[21.0726,1.53],[21.093,0.2],[21.1,6.5],[21.1036,1.376],[21.1204,1.329],[21.13,1],[21.2,0.5],[21.21,0.29],[21.23,0.34],[21.25,2.19],[21.3,15.1],[21.3444,1.53],[21.3711,1.53],[21.4,3.16],[21.423,8.74],[21.45,17.88],[21.4856,0.558],[21.49,5],[21.499,100],[21.5,61.03],[21.516,0.2],[21.57,2.44],[21.5719,1.53],[21.5989,1.53],[21.6259,0.152],[21.66,50],[21.7,23],[21.75,1.36],[21.7751,2],[21.7786,10],[21.78,51],[21.8,19.88],[21.89,51.5],[21.9,75.72],[21.901,42],[21.91,6.99],[21.912,1.7],[21.919,29.8],[21.9221,1.53],[21.93,129.65],[21.9422,20.18],[21.946,0.2],[21.948,14],[21.9495,1.54],[21.95,100.3],[21.9505,3.06],[21.9525,0.68],[21.9594,0.025],[21.96,72],[21.9625,0.061],[21.976,2],[21.98,33.56],[21.9856,88.54],[21.989,10],[21.9899,4.01],[21.99,21.37],[21.998,0.1],[21.999,100.99],[21.9997,12.43],[21.9999,18.81],[22,416.841],[22.01,2],[22.1,9.55],[22.11,0.96],[22.12,1.98],[22.133,7.5],[22.19,1],[22.199,107.34],[22.2,4],[22.29,0.44],[22.3,42.1],[22.3204,2.658],[22.35,40],[22.36,6.82],[22.3636,39.77],[22.384,5.55],[22.385,14.78],[22.39,1],[22.3998,100],[22.4,45.21],[22.41,40.59],[22.449,8],[22.45,50.25],[22.46,10],[22.49,30.887],[22.497,3],[22.5,252.581],[22.51,3.98],[22.55,5],[22.58,3.47],[22.59,0.01],[22.6,0.89],[22.61,1],[22.69,5.78],[22.6968,30],[22.7,30.58],[22.722,0.265],[22.74,1.81],[22.75,25.44],[22.76,2.32],[22.77,5],[22.8,24.11],[22.83,2.19],[22.8384,1.33],[22.85,6.47],[22.8533,0.696],[22.8556,1.5],[22.89,18.25],[22.9,93.88],[22.91,1.09],[22.94,8.95],[22.949,0.5],[22.95,60.89],[22.9612,3.6],[22.97,66.39],[22.9732,10],[22.9765,2.44],[22.979,1],[22.98,151.99],[22.989,10],[22.99,370.8],[22.9943,5],[22.997,5],[22.998,100.1],[22.999,50],[22.9999,20],[23,984.64],[23.01,12],[23.054,0.2],[23.1,2.5],[23.12,2.029],[23.2,68.92],[23.21,10.7],[23.24,2.32],[23.3,51],[23.31,4.83],[23.4,58.51],[23.41,30.98],[23.42,0.58],[23.44,1.4],[23.45,17.3],[23.47,45.5],[23.475,69.61],[23.4777,3.19],[23.479,10],[23.4887,30],[23.49,105.841],[23.499,14.17],[23.5,201.55],[23.514,21.86],[23.515,0.2],[23.6,12.52],[23.6115,2],[23.62,1],[23.64,2.18],[23.666,9],[23.69,30],[23.7,110],[23.74,1.13],[23.76,4.21],[23.77,5],[23.784,10],[23.79,4],[23.799,7.7],[23.8,260.04],[23.8078,0.98],[23.8204,5.315],[23.849,0.99],[23.85,0.96],[23.8601,13],[23.87,10],[23.89,107.44],[23.8999,5],[23.9,172.24],[23.9243,0.18],[23.94,28.93],[23.95,79.74],[23.96,32],[23.9686,0.547],[23.97,118.23],[23.9799,99.75],[23.98,118.67],[23.984,200],[23.985,61.2],[23.9899,3.03],[23.99,484.54],[23.999,96.17],[23.9998,2.3],[23.9999,21.14],[24,1274.514],[24.01,10],[24.0101,25.77],[24.04,19.87],[24.0499,14],[24.05,2.35],[24.1,22.983],[24.105,4.41],[24.15,10.76],[24.2,142.56],[24.25,4.45],[24.2569,3.67],[24.2796,0.02],[24.29,2],[24.2998,3],[24.3,18.34],[24.3185,4.96],[24.321,25],[24.33,3],[24.3492,3],[24.35,1],[24.399,14.46],[24.4,46.56],[24.41,5],[24.43,82.61],[24.44,26.84],[24.45,1.8],[24.4501,2.63],[24.46,75],[24.465,0.2],[24.4713,1.84],[24.48,22.689],[24.4808,5.81],[24.484,24.48],[24.49,33.016],[24.497,15.16],[24.498,200],[24.499,1.16],[24.4991,50],[24.4998,10],[24.5,363.26],[24.51,4.5],[24.6,57.58],[24.65,24.21],[24.6556,5],[24.66,11],[24.68,2.98],[24.69,67.48],[24.7,12.57],[24.71,5.37],[24.75,62.04],[24.76,1.28],[24.77,10],[24.78,20],[24.79,45.66],[24.7999,20],[24.8,81.96],[24.82,2.98],[24.8219,1.6],[24.8499,10],[24.85,0.1],[24.86,15],[24.87,16.47],[24.88,7.31],[24.8865,5],[24.887,25],[24.889,3],[24.89,18.66],[24.899,24.84],[24.9,372.65],[24.91,1.93],[24.918,3.37],[24.92,0.1],[24.94,0.16],[24.95,131.41],[24.9501,10],[24.954,0.2],[24.955,1],[24.9588,0.01],[24.96,10.31],[24.9697,20],[24.9698,27.95],[24.9699,200],[24.97,224.69],[24.979,41.74],[24.9797,10],[24.98,75.99],[24.986,2],[24.9876,10],[24.989,17],[24.9898,15.98],[24.9899,11.46],[24.99,501.249],[24.991,1.11],[24.9959,10],[24.9989,6],[24.999,122.46],[24.9995,4.53],[24.9999,25],[25,3988.4],[25.1,9.98],[25.11,46.6],[25.12,2.49],[25.1625,6.678],[25.2,18.05],[25.2001,13],[25.211,0.2],[25.25,20],[25.3,12],[25.3492,3],[25.3976,5.74],[25.43,18.87],[25.4346,126.213],[25.444,112.71],[25.49,7.948],[25.499,1],[25.5,63.82],[25.51,2],[25.55,5],[25.6,13.58],[25.611,0.69],[25.6204,10.631],[25.69,1],[25.715,0.2],[25.74,10],[25.7456,1.99],[25.75,53.65],[25.7846,5],[25.8,17.22],[25.8406,10],[25.8488,5],[25.85,1],[25.87,4],[25.88,100],[25.89,10],[25.9,64.31],[25.95,11.85],[25.964,1],[25.98,37],[25.9877,15],[25.99,19.13],[25.998,25],[25.9999,210],[26,297.806],[26.0012,46.59],[26.0207,1.516],[26.1,25.57],[26.111,5],[26.12,0.002],[26.2,2],[26.23,0.2],[26.26,0.01],[26.2998,2],[26.3492,2],[26.47,1.62],[26.4779,0.22],[26.49,15.006],[26.499,1],[26.5,42.2],[26.51,1],[26.54,0.33],[26.56,10],[26.5855,1],[26.59,117.35],[26.6,6],[26.62,0.6],[26.63,3.5],[26.67,1],[26.691,2],[26.7,1.99],[26.71,27.62],[26.73,1],[26.74,10],[26.75,57.57],[26.754,0.2],[26.77,0.1],[26.799,2],[26.8,52.93],[26.81,217.62],[26.85,2.04],[26.8788,1],[26.89,13],[26.9,100],[26.91,3],[26.925,16],[26.95,0.5],[26.98,40.89],[26.99,1],[26.9989,1],[26.999,200],[26.9999,10],[27,689.6],[27.1001,20],[27.1501,44],[27.18,0.25],[27.2,26],[27.29,0.2],[27.3,5.3],[27.32,15],[27.3492,2],[27.4,1.78],[27.45,176.45],[27.48,10],[27.49,57.3],[27.5,39.35],[27.6,31.5],[27.61,0.1],[27.62,20],[27.65,100],[27.6541,2.22],[27.7,7],[27.71,11],[27.7204,21.261],[27.7299,4],[27.77,18.57],[27.8,178.3],[27.82,1.08],[27.836,0.2],[27.85,5.1],[27.87,1.11],[27.8755,5],[27.88,10],[27.89,10],[27.9,12],[27.91,18],[27.9224,30],[27.95,5],[27.96,0.5],[27.964,1],[27.97,55],[27.98,48.26],[27.989,190.79],[27.99,3],[27.998,10],[27.9989,200],[27.999,10],[27.9999,17.783],[28,752.82],[28.1,10],[28.2,46],[28.25,21.68],[28.284,10],[28.3,9.73],[28.392,0.2],[28.4,2.3],[28.42,3],[28.4384,7.94],[28.45,4.07],[28.4698,1],[28.47,5],[28.489,1],[28.49,45.82],[28.5,573.41],[28.5231,5.17],[28.5233,2.92],[28.5395,7],[28.543,15.89],[28.55,21.98],[28.5858,264.343],[28.6,200],[28.6157,213.17],[28.72,20],[28.73,7],[28.8,61.95],[28.82,1],[28.83,25],[28.89,0.2],[28.9,101.53],[28.901,16.76],[28.93,20],[28.96,2.2],[28.97,13.82],[28.98,29],[28.9899,4.79],[28.99,7.07],[29,651.97],[29.01,0.99],[29.05,4],[29.1515,25],[29.1738,1.58],[29.24,22.87],[29.282,0.6],[29.34,4.09],[29.35,1],[29.398,16.1],[29.4,30.66],[29.485,30],[29.4877,5],[29.49,4],[29.499,7.51],[29.4999,0.1],[29.5,150.15],[29.539,0.2],[29.54,145.61],[29.5414,0.27],[29.55,50],[29.5722,285.872],[29.59,3.32],[29.6,10],[29.64,19.97],[29.65,2.42],[29.689,100],[29.7,135.03],[29.7256,2.06],[29.75,8],[29.77,5],[29.78,11.32],[29.8,101.63],[29.8071,30],[29.81,1],[29.83,3.6],[29.85,56.09],[29.8501,0.01],[29.86,9.94],[29.88,2.77],[29.8898,99],[29.89,19],[29.899,5],[29.9,397.73],[29.92,30],[29.9213,0.5],[29.94,1],[29.9499,153.07],[29.95,34.28],[29.9694,50],[29.9695,3],[29.97,6.17],[29.98,154.4],[29.983,22.57],[29.9899,139.3],[29.99,282.53],[29.998,377.5],[29.9989,2],[29.999,135.49],[29.9997,5],[29.9998,20.75],[29.9999,50.19],[30,2748.38],[30.0001,50],[30.001,4.82],[30.01,3.97],[30.0108,4.51],[30.1,239],[30.1204,42.523],[30.13,0.2],[30.17,11],[30.1738,5],[30.2,117.01],[30.23,5],[30.3,108.08],[30.4,116.61],[30.46,2],[30.4989,1],[30.499,6.57],[30.4995,45],[30.5,163.98],[30.5613,3],[30.57,7.273],[30.6,5],[30.6984,0.17],[30.7,106],[30.732,0.2],[30.7384,1.99],[30.8,29.42],[30.85,2],[30.9,12],[30.93,12],[30.9311,175],[30.9489,5],[30.9501,7.9],[30.9798,3],[30.98,30.12],[30.99,6.42],[31,875.275],[31.04,20],[31.1,3],[31.1601,3],[31.1738,2.39],[31.2,27.16],[31.21,20.19],[31.23,5],[31.25,30.95],[31.26,2],[31.269,10],[31.3,16.2],[31.347,0.2],[31.35,2],[31.39,2],[31.4,8],[31.41,5],[31.43,15],[31.4699,32],[31.49,8.31],[31.5,76.36],[31.59,3],[31.6,1],[31.6329,3.5],[31.7,13.33],[31.74,30],[31.75,0.5],[31.7501,1.63],[31.7755,3],[31.799,15],[31.81,2.95],[31.859,4.998],[31.87,15.51],[31.879,3],[31.89,18.24],[31.899,7],[31.9,2.1],[31.91,100],[31.96,1],[31.97,100],[31.974,0.2],[31.98,1],[31.989,5],[31.99,15.75],[31.998,23.5],[31.999,14.19],[31.9999,30],[32,838.37],[32.03,100],[32.0429,0.211],[32.09,100],[32.11,51],[32.169,10],[32.2,31.08],[32.208,15.492],[32.2102,0.6],[32.22,9.94],[32.25,1.2],[32.3,0.2],[32.326,1.5],[32.343,3],[32.3607,10],[32.4,5],[32.449,100],[32.45,1],[32.453,1],[32.461,6],[32.488,1],[32.4964,0.486],[32.499,1],[32.5,37.68],[32.5062,5],[32.55,50],[32.613,0.2],[32.7211,0.1],[32.82,0.3],[32.8204,85.046],[32.89,1],[32.9,1],[32.97,3.77],[32.999,11],[32.9999,3.23],[33,245.09],[33.05,5],[33.0894,0.84],[33.169,10],[33.2,8.01],[33.23,3],[33.253,2],[33.265,0.2],[33.33,2.1],[33.332,30]],"bids":[[19.491,18],[19.4001,2],[19.4,5.67],[19.35,1.01],[19.2004,3],[19.2003,23.054],[19.2001,0.101],[19.1899,37.686],[19.12,5],[19.11,20.193],[19.1,100.991],[19.02,1.01],[19.0001,0.528],[19,18.811],[18.95,1],[18.9101,0.181],[18.9,43.443],[18.8859,0.175],[18.8,6],[18.76,1.9],[18.75,0.15],[18.7,38.483],[18.6994,11],[18.61,20],[18.6,26.96],[18.57,3.1],[18.5591,3],[18.559,0.216],[18.55,2.4],[18.5301,0.05],[18.53,0.52],[18.52,7.77],[18.51,73.9],[18.5,169.888],[18.4516,0.123],[18.4124,66.3],[18.41,10],[18.4,10.2],[18.38,22.1],[18.3629,0.118],[18.36,0.44],[18.3529,0.123],[18.35,1.5],[18.34,2.61],[18.3209,10],[18.3,0.5],[18.27,6.2],[18.2601,10],[18.2542,0.167],[18.251,3],[18.25,2.221],[18.2111,2.738],[18.211,1.51],[18.2,70.207],[18.195,0.223],[18.15,3.33],[18.1371,0.406],[18.1202,1.5],[18.12,1.003],[18.11,1],[18.105,60],[18.1,37.723],[18.09,1.003],[18.05,20],[18.04,66.45],[18.03,58.6],[18.0234,42.778],[18.0219,25],[18.02,5],[18.01,15.61],[18.001,0.846],[18.0001,5.5],[18,431.933],[17.95,1.02],[17.9224,1.53],[17.903,25.04],[17.9,25.5],[17.8556,0.124],[17.85,0.6],[17.838,0.227],[17.83,1],[17.8,4],[17.77,50.5],[17.7,1],[17.62,0.1],[17.612,36.5],[17.6,10.69],[17.5001,200],[17.5,281.154],[17.488,0.232],[17.47,2.86],[17.42,1.42],[17.41,1.39],[17.4,4],[17.39,10],[17.35,3.27],[17.3,22.735],[17.27,50],[17.251,4],[17.25,22.9],[17.23,13.865],[17.22,3.201],[17.21,2.58],[17.2,1.2],[17.18,1],[17.1667,0.13],[17.145,0.236],[17.115,1],[17.11,13],[17.1001,0.17],[17.1,88.588],[17.02,5],[17.01,105.317],[17.001,95.31],[17,286.299],[16.964,4.74],[16.9556,0.26],[16.95,13.322],[16.9,2.1],[16.8823,0.117],[16.809,0.241],[16.8,0.833],[16.75,91.821],[16.72,8],[16.7107,89.763],[16.71,1],[16.7,57.5],[16.6999,2.7],[16.66,18],[16.65,3.553],[16.61,15],[16.6,50.11],[16.59,10],[16.58,6.189],[16.56,50],[16.55,120],[16.5399,3.154],[16.52,31.99],[16.5102,7.365],[16.5101,29.865],[16.51,19.458],[16.5021,1],[16.5001,4.488],[16.5,318.186],[16.4994,0.157],[16.479,0.246],[16.4,50],[16.34,1],[16.33,100],[16.3,1.65],[16.25,54.1],[16.2404,0.14],[16.234,2],[16.213,0.012],[16.2113,4.8],[16.21,30],[16.2,110],[16.19,210],[16.1802,0.155],[16.174,0.3],[16.1702,0.07],[16.156,0.248],[16.15,32.03],[16.1245,124.035],[16.12,1.802],[16.115,1],[16.11,152],[16.1001,53.652],[16.1,251.329],[16.055,1],[16.05,29.927],[16.04,10.517],[16.03,297.176],[16.0204,0.004],[16.02,4.53],[16.012,50],[16.0111,15],[16.011,2.49],[16.0103,300],[16.01,31.8],[16.001,10],[16.0001,30.899],[16,1043.666],[15.95,1.04],[15.91,0.555],[15.9,42],[15.839,0.256],[15.8175,10],[15.805,51],[15.8,141.003],[15.76,1],[15.7501,17],[15.75,11.062],[15.715,1.07],[15.6973,50.52],[15.67,2],[15.66,2],[15.65,0.05],[15.637,2],[15.612,20],[15.6,102.6],[15.55,26.584],[15.528,0.261],[15.52,41.901],[15.51,10],[15.501,16],[15.5,183.467],[15.4934,5],[15.4923,2.5],[15.45,3],[15.4356,3],[15.4,13.5],[15.3439,1],[15.3098,65.317],[15.3,71.878],[15.27,0.426],[15.25,5.878],[15.224,0.266],[15.22,2],[15.21,12.01],[15.205,5],[15.201,61.054],[15.2,109.97],[15.15,27.28],[15.13,50],[15.123,2],[15.121,2],[15.115,1],[15.112,15],[15.11,75],[15.1,738.349],[15.09,30.078],[15.05,5],[15.0294,1.85],[15.0202,10],[15.02,53.71],[15.0111,49.29],[15.011,13.5],[15.0104,0.006],[15.0102,200],[15.01,350.702],[15.001,13.7],[15.0001,10],[15,2476.432],[14.9999,0.1],[14.99,6],[14.925,0.271],[14.9,0.602],[14.8,102],[14.75,500],[14.7104,0.029],[14.7056,1.2],[14.701,40.261],[14.7,50.356],[14.632,0.277],[14.62,0.1],[14.6155,5],[14.6,10],[14.56,3],[14.5,109.913],[14.48,46],[14.4,11],[14.379,5],[14.35,20],[14.345,0.282],[14.342,0.8],[14.33,3],[14.324,2],[14.3,1],[14.251,1.896],[14.23,39.172],[14.21,60],[14.2,3],[14.17,1],[14.1515,20],[14.15,2],[14.12,3]]};

	var model = {
		data: [],
		sortFun: function(a,b){
			return a.price - b.price;
		},
		get: function(price) {
			return this.data[this.getIndex(price)] || {price: price, bids: 0, asks: 0}
		},
		getIndex: function(price) {
			var min = 0,
				max = this.data.length-1,
				mid;
			while (min <= max && max >= 0)
			{
				mid = (min+max)/2|0;
				if (price > this.data[mid].price)
					min = mid + 1;
				else if (price < this.data[mid].price)
					max = mid - 1;
				else
					return mid;
			}
			return -1;
		},
		addBid: function(price, amount) {
			var index = this.getIndex(price);
			
			if (index == -1)
			{
				this.data.push({ price:price, bids:amount, asks:0 });
				this.data.sort(this.sortFun);
			}
			else
				this.data[index].bids += amount;
		},
		addAsk: function(price, amount) {
			var index = this.getIndex(price);
			
			if (index == -1)
			{
				this.data.push({ price:price, bids:0, asks:amount });
				this.data.sort(this.sortFun);
			}
			else
				this.data[index].asks += amount;
		},
		removeBid: function(price, amount) {
			this.addBid(price, -amount);
		},
		removeAsk: function(price, amount) {
			this.addAsk(price, -amount);
		},
		clear: function() {
			data = [];
		},
		replaceWithDepthData: function(data) {
			var asks = data.asks,
				bids = data.bids;
			
			model.clear();
			
			for (var i=0, len=bids.length; i<len; ++i)
			{
				model.addBid(bids[i][0], bids[i][1]);
			}
			for (var i=0, len=asks.length; i<len; ++i)
			{
				model.addAsk(asks[i][0], asks[i][1]);
			}
		}
	};

	model.replaceWithDepthData(depthData);

	$(document)
		.mousedown(function(e){
			if (this.dragon)
			{
				this.dragon.startX = this.dragon.startX || e.clientX;
				this.dragon.startY = this.dragon.startY || e.clientY;
				this.dragon.elementX = this.dragon.elementX || this.dragon.element.offsetLeft;
				this.dragon.elementY = this.dragon.elementY || this.dragon.element.offsetTop;
				return false;
			}
		})
		.mousemove(function(e) {
			if (this.dragon)
				this.dragon.handler(e);
		})
		.mouseup(function(){
			this.dragon = null;
		});

	var view = {
		rows: 21,
		scroll: 0,
		createElements: function() {
			// Stylesheet
			addStyles({
				'#the-element': {
					'position': 'absolute',
					'right': '15px',
					'top': '15px'
				},
				'#the-element table': {
					'background-color': '#f6f6f6',
					'border': '1px solid #dedede',
					'border-collapse': 'collapse',
					'cursor': 'default',
					'font-family': "'Myriad Pro', helvetica, sans-serif",
					'font-size': '13px',
					'box-shadow': '0px 8px 10px 0px rgba(0,0,0,.25)',
					'width': '250px'
				},
				'#the-element th, #the-element td': {
					'padding': '3px',
					'border': '1px solid #dedede',
					'width': '33%'
				},
				'#the-element .scrollbar': {
					'position': 'absolute',
					'right': '-10px',
					'top': '23px',
					'width': '10px',
					'height': '100px',
					'background': '#aaa',
					'border-radius': '0px 3px 3px 0px',
					'box-shadow': 'inset 3px 0px 3px -2px rgba(0,0,0,.3)'
				}
			});
			
			// The element
			view.theElement = $('<div id="the-element">').appendTo('body');
			
			// The table
			$('<table>')
				.append("<thead><tr><th>Bids</th><th>Price</th><th>Asks</th></tr></thead><tbody></tbody>")
				.appendTo(view.theElement);
			
			// Scrollbar
			view.scrollbar = $("<div class='scrollbar'></div>")
				.mousedown(function(){
					document.dragon = {
						element: this,
						startScroll: view.scroll,
						handler: function(e) {
							var scroll = (e.clientY - this.startY)/(view.theElement.find('tbody').height() - $(this.element).height());
							
							view.scroll = Math.min(Math.max(this.startScroll + scroll, 0), 1);
							view.render();
						}
					};
				})
				.appendTo(view.theElement);
			
			// Dragging
			view.theElement.find('thead')
				.mousedown(function(e){
					document.dragon = {
						element: view.theElement.get(0),
						handler: function(e) {
							var maxX = $('body').outerWidth(true) - $(this.element).outerWidth();
							$(this.element).css({
								right: Math.max(Math.min(maxX, maxX - this.elementX - e.clientX + this.startX), 0),
								top: Math.max(0, this.elementY + e.clientY - this.startY)
							});
						}
					};
				});
		},
		render: function() {
			var rows = Math.min(this.rows, model.data.length);
			var begin = (model.data.length-rows)*(1-view.scroll)|0;
			var end = begin+rows;
			
			var dataSubSet = model.data.slice(begin, end);
			
			view.theElement.find('tbody').empty();
			for (var i=dataSubSet.length-1; i>=0; --i)
			{
				view.theElement.find('tbody').append("<tr><td>"+dataSubSet[i].bids+"</td><td>"+dataSubSet[i].price+"</td><td>"+dataSubSet[i].asks+"</td></tr>");
			}
			
			// Scrollbar
			var bodyHeight = view.theElement.find('tbody').height();
			
			view.scrollbar.css({
				top: view.theElement.find('thead').height() + ((bodyHeight - view.scrollbar.height()) * view.scroll),
				height: bodyHeight * (21/model.data.length)
			});
		}
	};


	$(function(){	
		view.createElements();
		view.render();
	});
	
})();