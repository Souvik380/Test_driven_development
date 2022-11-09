const chai=require('chai')
const expect=chai.expect

describe.only('Find out whether a list is a palindrome',()=>{

    context('when the list is empty',()=>{
        it('should return nothing',()=>{
            let result=isPallindrome([])
            expect(result).to.be.eql([])
        })
    })

    context('when the list contains atleast one element',()=>{
        it('should return true if the list is pallindrome',()=>{
            let result=isPallindrome([1,2,3,2,3])
            expect(result).to.be.eql(true)
        })

        it('should return false if the list is not pallindrome',()=>{
            let result=isPallindrome([1,2,3,2])
            expect(result).to.be.eql(false)
        })
    })

    context('when it is a string',()=>{
        it('should return true if the string is pallindrome',()=>{
            let result=isPallindrome2("wow")
            expect(result).to.be.eql(true)
        })
    })
})

const isPallindrome=(list)=>{
    let li=[...list]
    list.reverse()
    return list
}

const isPallindrome2=(str)=>{
    let ans=""
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i]
    }
    return ans
}