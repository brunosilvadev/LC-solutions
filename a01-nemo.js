const nemo = ['nemo'];
const everyone = ['fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','fwefewf','nemo'];
const large = new Array(50000).fill('nmo');

function findNemo(array){
    
    
    for (let i=0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found NEMO!');
        }
    }
    
    console.log(t1-t0 + 'miliseconds')
}

findNemo(large);