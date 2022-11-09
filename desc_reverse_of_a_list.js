const chai=require('chai')
const expect=chai.expect

describe.only('find the reverse of a list and string',()=>{

    context('when the list is empty',()=>{
        it('should return nothing',()=>{
            let result=findReverseList([])
            expect(result).to.be.eql([])
        })
    })

    context('when the list contains atleast one element',()=>{
        it('should return the reverse of list',()=>{
            let result=findReverseList([1,2,3,4])
            expect(result).to.be.eql([4,3,2,1])
        })
    })

    context('when it is a string',()=>{
        it('should return the reverse of string',()=>{
            let result=findReverseString("souvik")
            expect(result).to.be.eql("kivuos")
        })
    })


})

const findReverseList=(list)=>{
    list.reverse()
    return list
}

const findReverseString=(str)=>{
    let ans=""
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i]
    }
    return ans
}