class Test{
	constructor(){
		this.a = 'hello world!(test branch)';
	}
}

let test = new Test();

document.body.innerHTML = test.a;