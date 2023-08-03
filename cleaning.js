const fs = require('fs');
const data=require("./New folder/archive/file1.json")
// console.log(data)
var leng=data.length
var count=0
async function cleaning(){
    for (i=0;i<leng;i++){
        if(data[i].results_shown !==0){


            try {
            const lenth=data[i].restaurants.length;
            //console.log(lenth)
            for (j=0;j<lenth;j++){
                count++
               var  modi=data[i].restaurants[j].restaurant.id;
                var modifiedData=JSON.stringify( data[i].restaurants[j].restaurant)
                
              fs.appendFile('data.txt', modifiedData + ','+'\n', 'utf8', (err) => {
                     if (err) {
                     console.error('Error appending to file:', err);
                      } else {
                        console.log('Data appended to file successfully.');
                       }
                    });
                 console.log(modi,count)
                 
            }}
            catch (error) {
                console.log(error)
            }
        }


    }
}

cleaning()

console.log(count)




// let jsonString = JSON.stringify(jsonObject);

// fs.appendFile('data.txt', jsonString + '\n'+`,`, 'utf8', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Data appended to file successfully.');
//   }
// });