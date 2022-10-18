export default function bs_list(haystack: number[], needle: number): boolean {
     let high = haystack.length 
     let low = 0
      if(haystack[low] === needle || haystack[high] === needle){
         return true; 
        } 
        do{
             let middle = Math.floor(low + (high - low) / 2) 
             if(haystack[middle] === needle){
                 return true; 
                } 
                if(needle < haystack[middle]){
                     high = middle; 
                    } else{
                         low = middle+1; 
                        } 
                    } while(low < high); 
                    return false; 
                }