// console.log("**********Very Easy***********");

// console.log("Q1");

function convert(x){
  x =  x*60;
  return x;
}

// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));

// console.log("");
// console.log("Q2");

function dividesEvenly(a, b){
  let x =a/b;
  return (Number.isInteger(x))? true : false;
}

// console.log(dividesEvenly(98, 7));
// console.log(dividesEvenly(85, 4));

// console.log("");
// console.log("***********Easy**************");
// console.log("Q1");

function charCount(x, y){
  let count = 0;
  for(let i=0; i<y.length; i++){
    if( x === y.charAt(i)) {
      count++;
    }
  }
  return count;
}

// console.log(charCount("a", "edabit"));
// console.log(charCount("c", "Chamber of secrets" ));
// console.log(charCount("b", "big fat bubble"));

// console.log("");
// console.log("Q2");
function addUp(a){
  let sum = 0;
  for(let i=0; i<=a; i++){
    sum = sum+i;
  }
  return sum;
}

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// console.log("");
// console.log("Q3");

function replaceVowel(x){
  x = x.replace(/a/g, 1);
  x = x.replace(/e/g, 2);
  x = x.replace(/i/g, 3);
  x = x.replace(/o/g, 4);
  x = x.replace(/u/g, 5);
  return x;
}

// console.log(replaceVowel("karachi"));
// console.log(replaceVowel("chembur"));
// console.log(replaceVowel("khandbari"));
// console.log(" ");


// console.log("*********Medium*******");
// console.log("Q1");

function specialReverse(x, y){
	x = x.split(" ");
	let s = "";
	for(let i=0; i<x.length; i++){
		if(x[i].includes(y)){
			for(let j=x[i].length-1; j>=0; j--){
				s = s+x[i][j];
			}
		}
		else{
			s = s+x[i];
		}
		s = s+" ";
	}
	return s;
}

// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));
// console.log(" ");

// console.log("Q2");

function testJackpot(a){
	let s = a[0];
	let b = true;
	for(let i=1; i<a.length; i++){
		if(a[i] !== s){
			b = false;
		}
	}
	return b;
}

// console.log(testJackpot(["@", "@", "@", "@"]));
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

// console.log(" ");

// console.log("Q3");

function removeDups(a){
	let b = [];
	for(let i=0; i<a.length; i++){
		let x = a[i];
		let y = true;
		for(let j=0; j<b.length; j++){
			if( x === b[j]){
				y = false;
			}
		}
		if(y){
			b.push(x);
		}
	}

	return b;
}

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["The", "big", "cat"]));
// console.log(removeDups(["John", "Taylor", "John"]));
// console.log(" ");

// console.log("********Hard**********");
// console.log(" ");
 // console.log("Q1");

function realType(x){
	var ans = (Object.prototype.toString.call(x));
    return ans.substring(8).replace(']','');
}

// console.log(realType(1));
// console.log(realType("a"));
// console.log(realType(true));
// console.log(realType([]));
// console.log(realType(null));
// console.log();

// console.log("Q2");

function numInStr(a){
	let n = [];
	for(let i=0; i<a.length; i++){
		let x = a[i];
		let flag = false;
		for(let j=0; j<x.length; j++){
			let y = x[j];
			if(!isNaN(y) && y !== " "){
				flag = true;
			}
		}
		if(flag){
			n.push(x);
		}
	}
	return n;
}

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));
// console.log(" ");