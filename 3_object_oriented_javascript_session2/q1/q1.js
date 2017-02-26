function createConstructor(typeFn) {
        return typeFn.bind({});
}
var fnCounter = 0;
var TestClass = createConstructor(
function TestClass() {
    if (this instanceof arguments.callee) {
        console.log("function invocations: ", ++fnCounter);
        return;
    }
    TestClass.consCounter = (TestClass.consCounter || 0)+1;
    console.log("constructor calls: ", TestClass.consCounter);
});

TestClass(); // output 1
var obj = new TestClass(); 	// output 1
var obj1 = new TestClass();	// output 2
TestClass();			// output 2
