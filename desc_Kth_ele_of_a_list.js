const chai=require('chai')
const expect=chai.expect

describe.only('find the kth element of a list',()=>{

    context('when the list is empty',()=>{
        it('should return nothing',()=>{
            let result=findKthElement([])
            expect(result).to.be.undefined
        })
    })

    context('when the list contains less than K elements',()=>{
        it('should return nothing',()=>{
            let result=findKthElement([1,2,3,4],5)
            expect(result).to.be.undefined
        })
    })

    context('when the list contains atleast K elements',()=>{
        it('should return the Kth element',()=>{
            let result=findKthElement([1,2,3,4,5],5)
            expect(result).to.be.eql(5)
        })
    })


})

const findKthElement=(list,k)=>{
    if(list.length<k){
        return undefined
    }
    return list[k-1]
}