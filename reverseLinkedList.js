/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

function reverseLink(head){
    let prev = null
    let current = head
    let next = null

    while (current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

let head = [1,2,3,4,5]
let head2 = [1,2]
let head3 = []
console.log(reverseLink(head))
console.log(reverseLink(head2))
console.log(reverseLink(head3))