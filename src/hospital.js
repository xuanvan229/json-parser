import data from './practitioner.json'

var json_results = []




for (let item of data._items){
	if(item.hospital){
			for(let item_s of item.hospital){
				let check = false
				for(let item_result of json_results){
					console.log("***", item_result)
					if(item_result === item_s.name){
						check = true 
					}
				}

				if(!check){
					json_results.push(item_s.name)
				}
			}
	}
}

json_results.sort()


console.log("-----------------------")
console.log(json_results)

