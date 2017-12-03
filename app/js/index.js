class Test{
	constructor(){
		this.a = 'hello world!(master branch)';
	}
}

let test = new Test();

document.body.innerHTML = test.a;