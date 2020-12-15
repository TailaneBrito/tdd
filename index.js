function fahreheint2celsius(fahreheint){
	return (fahreheint - 32) * 5 / 9;
}

describe('the fahrenheit to celsius canary spec', () => {
	it('shows the infrastructure works', () => {
		true.should.be.true();	   
	});

describe('fahrenheit to celsius converter behaves as follows', () => {
	it('212 degress fahrehit is 100 degrees celsius', () => {
		fahreheint2celsius(212).should.be.equal(100);
	});
	
	it('32 degrees fahrenheit is 0 degrees celsius', () => {
		fahreheint2celsius(32).should.be.equal(0);
	});
	
	it('50 degrees fahreheint is 10 degress celsius', () => {
		fahreheint2celsius(50).should.be.equal(10);
	});
	
	it('-22 degrees fahreheint is -30 degress celsius', () => {
		fahreheint2celsius(-22).should.be.equal(-30);
	});
});
	//error message should drive what we do. no more writting code to resolve the issue.
	// four rules for simple design.
	// 1 pass the tast (green bar tells us),
	// 2 reveals intention
	// 3 no duplication
	// 4 fewest number of elements.
});
	
