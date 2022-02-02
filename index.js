function receivesAFunction(spy){
    return spy();
};

function returnsANamedFunction(){
    return function test(){
        console.log("question 1")
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("no questions")
    }
}